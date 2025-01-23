import dotenv from "dotenv";
dotenv.config();

export const config = {
  // These values should be static, and tell the scraper how to access the AON elastic instance.
  root: "https://elasticsearch.aonprd.com/",
  index: "aon",

  // Comment out any targets you do not want to scrape.
  targets: [
    "action",
    "ancestry",
    "archetype",
    "armor",
    "article",
    "background",
    "class",
    "creature",
    "creature-family",
    "deity",
    "equipment",
    "feat",
    "hazard",
    "rules",
    "skill",
    "shield",
    "spell",
    "source",
    "trait",
    "weapon",
    "weapon-group",
    "plane", //new
    "vehicle",
    "relic",
    "curse",
    "kingdom-structure",
    "warfare-tactic",
    "familiar-ability",
    "heritage",
    "druidic-order",
    "animal-companion",
    "condition",
    "domain",
    "language"
  ],
};