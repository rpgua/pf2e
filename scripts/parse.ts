'use server'

import { readdirSync, readFileSync, existsSync, statSync } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const cores = [
    'Player Core',
    'GM Core',
    'Monster Core',
    'Player Core 2'
]

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

const getJsons = (folder: string, type: string): string[] => {
    const basePath = path.join(__dirname, "data", type);

    if (!folder) {
        // If no folder is specified, iterate over all subfolders
        const jsonFiles: string[] = [];
        const subfolders = readdirSync(basePath);

        subfolders.forEach((subfolder) => {
            const subFolderPath = path.join(basePath, subfolder);
            if (existsSync(subFolderPath) && statSync(subFolderPath).isDirectory()) {
                const jsons = readdirSync(subFolderPath).filter(
                    (file) => path.extname(file) === ".json"
                );
                jsonFiles.push(...jsons.map((file) => path.join(subFolderPath, file)));
            }
        });

        return jsonFiles;
    } else {
        // If a folder is specified, return JSON files in that folder
        const folderPath = path.join(basePath, folder);
        if (!existsSync(folderPath) || !statSync(folderPath).isDirectory()) {
            throw new Error(`Folder does not exist: ${folderPath}`);
        }
        return readdirSync(folderPath)
            .filter((file) => path.extname(file) === ".json")
            .map((file) => path.join(folderPath, file));
    }
};




export const getArrayFromSet = async (
    folder: string,
    folder_type: "raw" | "sorted" | "parsed",
    filter: string,
    source: string,
    core: boolean
) => {
    const jsons = getJsons(folder, folder_type);

    const items: { name: string; filter_name: string; source_name: string }[] = [];

    for (const file of jsons) {
        const filePath = path.resolve(file);
        if (existsSync(filePath)) {
            try {
                const fileData = readFileSync(filePath, "utf-8");
                const json = JSON.parse(fileData);

                let value;
                if (core) {
                    if (cores.includes(json["source"][0])) {
                        value = { name:json['name'],filter_name: json[filter], source_name: json["source"][0] };
                    }
                } else if (source.length > 0) {
                    if (source === json["source"][0]) {
                        value = { name:json['name'],filter_name: json[filter], source_name: json["source"][0] };
                    }
                } else {
                    value = { name:json['name'],filter_name: json[filter], source_name: json["source"][0] };
                }

                if (value !== undefined) {
                    if (Array.isArray(value)) {
                        items.push(...value);
                    } else {
                        items.push(value);
                    }
                }
            } catch (error) {
                console.error(`Error processing file: ${filePath}`, error);
            }
        } else {
            console.error(`File not found: ${filePath}`);
        }
    }

    // Remove duplicates based on `name` and `source_name`
    const uniqueItems = Array.from(
        new Map(items.map((item) => [`${item.name}_${item.source_name}`, item])).values()
    );

    return uniqueItems;
};


export const getArray = async (folder: string, folder_type: 'raw' | 'sorted' | 'parsed', filter: string, table: string) => {
    const jsons = getJsons(folder, folder_type)
    const items: string[] = []
    jsons.forEach(file => {
        const filePath = path.join(__dirname, "data", folder_type, folder, `${file}`)
        if (existsSync(filePath)) {
            const fileData = readFileSync(filePath);
            const json = JSON.parse(fileData.toString());
            const value = json[filter]
            try {
                Array.isArray(value) ? value.map((item: string) => items.push(item)) : items.push(value)
            } catch (error) {

            }
        } else {
            console.error(`File not found: ${filePath}`);
        }
    });

    return items
}



