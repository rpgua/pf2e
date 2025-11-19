import { getCollection, type CollectionEntry } from "astro:content";

import { ACTIVE_BOOKS_IDS } from "@config/books";

const collectionNames = [
  "action",
  "ancestry",
  "animalCompanion",
  "apparition",
  "arcaneSchool",
  "arcaneThesis",
  "archetype",
  "armorGroup",
  "armor",
  "article",
  "background",
  "bloodline",
  "campsiteMeal",
  "cause",
  "class_",
  "classKit",
  "classSample",
  "condition",
  "consciousMind",
  "creatureAbility",
  "creatureAdjustment",
  "creatureFamily",
  "creature",
  "curse",
  "deityCategory",
  "deity",
  "disease",
  "doctrine",
  "domain",
  "druidicOrder",
  "eidolon",
  "element",
  "epithet",
  "equipment",
  "familiarAbility",
  "familiarSpecific",
  "feat",
  "hazard",
  "hellknightOrder",
  "heritage",
  "huntersEdge",
  "hybridStudy",
  "ikon",
  "implement",
  "innovation",
  "instinct",
  "kingdomEvent",
  "kingdomStructure",
  "language",
  "lesson",
  "methodology",
  "muse",
  "mystery",
  "mythicCalling",
  "patron",
  "plane",
  "practice",
  "racket",
  "relic",
  "researchField",
  "ritual",
  "rules",
  "setRelic",
  "shield",
  "siegeWeapon",
  "skill",
  "source",
  "spell",
  "style",
  "subconsciousMind",
  "tactic",
  "tenet",
  "tradition",
  "trait",
  "vehicle",
  "warfareArmy",
  "warfareTactic",
  "way",
  "weaponGroup",
  "weapon",
  "weatherHazard",
] as const;

export type CollectionName = (typeof collectionNames)[number];

export type AllCollections = {
  [K in CollectionName]: CollectionEntry<K>[];
};

async function fetchAllCollections(): Promise<AllCollections> {
  console.log(
    "📚 Fetching and filtering all content collections ONCE for the build.",
  );

  const promises = collectionNames.map(async (name) => {
    const entries = await getCollection(name);

    if (ACTIVE_BOOKS_IDS.length !== 0) {
      return entries.filter((entry) => {
        const hasRulebookId = "rulebook_id" in entry.data;

        if (hasRulebookId) {
          const id: number = (entry.data as any).rulebook_id;
          return (ACTIVE_BOOKS_IDS as number[]).includes(id);
        }

        return false;
      });
    } else return entries;
  });

  const results = await Promise.all(promises);

  const collections = Object.fromEntries(
    collectionNames.map((name, index) => [name, results[index]]),
  );

  return collections as AllCollections;
}

export const collections: AllCollections = await fetchAllCollections();

export default collections;
