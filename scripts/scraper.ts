import { Client } from "@elastic/elasticsearch";
import fs from "fs";
import path from "path";
import sanitize from "sanitize-filename";
import { config } from "./config";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

interface Tracking {
  [key: string]: boolean;
}

interface SearchHit {
  _source: Record<string, any>; // Adjust this type based on your actual Elasticsearch schema
}

const tracking: Tracking = {};
const client = new Client({ node: config.root });

/**
 * Ensures a directory exists, creating it if necessary.
 */
function ensureDirectoryExists(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

/**
 * Writes a JSON file with a unique name if the target name already exists.
 */
function writeFileWithUniqueName(
  dir: string,
  baseName: string,
  data: Record<string, any>
): void {
  let suffix = 0;
  let fileName = `${sanitize(baseName)}.json`;
  let filePath = path.join(dir, fileName);

  while (fs.existsSync(filePath)) {
    suffix++;
    fileName = `${sanitize(baseName)}-${suffix}.json`;
    filePath = path.join(dir, fileName);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

/**
 * Retrieve targets from Elasticsearch and save raw JSON files.
 */
export async function retrieveTargets(): Promise<void> {
  for (const target of config.targets.sort()) {
    try {
      const search = await client.search({
        index: config.index,
        from: 0,
        size: 10000,
        query: { match: { category: target } },
      });

      console.log({
        action: "saving",
        target,
        count: search?.hits?.total|| 0, //search?.hits?.total.value
      });

      ensureDirectoryExists(path.join(__dirname, "data", "raw"));
      fs.writeFileSync(
        path.join(__dirname, "data", "raw", `${sanitize(target)}.json`),
        JSON.stringify(search.hits.hits, null, 2),
        "utf8"
      );
      tracking[target] = true;
    } catch (err) {
      console.error(`Error retrieving target "${target}":`, err);
      tracking[target] = false;
    }
  }
}

/**
 * Parse raw JSON files and extract `_source` data.
 */
export async function parseTargets(): Promise<void> {
  for (const target of config.targets.sort()) {
    console.log({ action: "parsing", target });

    if (tracking[target]) {
      try {
        const rawFilePath = path.join(__dirname, "data", "raw", `${sanitize(target)}.json`);
        if (!fs.existsSync(rawFilePath)) {
          console.error(`Raw file for target "${target}" not found.`);
          continue;
        }

        const rawData: SearchHit[] = JSON.parse(fs.readFileSync(rawFilePath, "utf8"));
        const parsedData = rawData.map((entry) => entry._source);

        ensureDirectoryExists(path.join(__dirname, "data", "parsed"));
        fs.writeFileSync(
          path.join(__dirname, "data", "parsed", `${sanitize(target)}.json`),
          JSON.stringify(parsedData, null, 2),
          "utf8"
        );
      } catch (err) {
        console.error(`Error parsing target "${target}":`, err);
      }
    }
  }
}

/**
 * Sort parsed entries into individual JSON files by name.
 */
export async function sortTargets(): Promise<void> {
  for (const target of config.targets.sort()) {
    console.log({ action: "sorting", target });

    if (tracking[target]) {
      try {
        const parsedFilePath = path.join(__dirname, "data", "parsed", `${sanitize(target)}.json`);
        if (!fs.existsSync(parsedFilePath)) {
          console.error(`Parsed file for target "${target}" not found.`);
          continue;
        }

        const parsedData: Record<string, any>[] = JSON.parse(
          fs.readFileSync(parsedFilePath, "utf8")
        );

        const targetDir = path.join(__dirname, "data", "sorted", sanitize(target));
        ensureDirectoryExists(targetDir);

        for (const entry of parsedData) {
          const entryName = entry?.name || "unnamed";
          writeFileWithUniqueName(targetDir, entryName, entry);
        }
      } catch (err) {
        console.error(`Error sorting target "${target}":`, err);
      }
    }
  }
}

/**
 * Main execution flow.
 */
async function run(): Promise<void> {
  try {
    await retrieveTargets();
    await parseTargets();
    await sortTargets();
    console.log("Process completed.");
  } catch (err) {
    console.error("An error occurred during execution:", err);
  }
}

run();
