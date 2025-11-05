import { file } from "astro/loaders";
import { defineCollection } from "astro:content";

const action = defineCollection({
  loader: file("src/data/action.json", { parser: (text) => JSON.parse(text) })
});
const ancestry = defineCollection({
  loader: file("src/data/ancestry.json", { parser: (text) => JSON.parse(text) })
});
const archetype = defineCollection({
  loader: file("src/data/archetype.json", { parser: (text) => JSON.parse(text) })
});
const armor = defineCollection({
  loader: file("src/data/armor.json", { parser: (text) => JSON.parse(text) })
});
const background = defineCollection({
  loader: file("src/data/background.json", { parser: (text) => JSON.parse(text) })
});
const classes = defineCollection({
  loader: file("src/data/class.json", { parser: (text) => JSON.parse(text) })
});
const condition = defineCollection({
  loader: file("src/data/condition.json", { parser: (text) => JSON.parse(text) })
});
const creature = defineCollection({
  loader: file("src/data/creature.json", { parser: (text) => JSON.parse(text) })
});
const creatureFamily = defineCollection({
  loader: file("src/data/creature-family.json", { parser: (text) => JSON.parse(text) })
});
const deity = defineCollection({
  loader: file("src/data/deity.json", { parser: (text) => JSON.parse(text) })
});
const equipment = defineCollection({
  loader: file("src/data/equipment.json", { parser: (text) => JSON.parse(text) })
});
const feat = defineCollection({
  loader: file("src/data/feat.json", { parser: (text) => JSON.parse(text) })
});
const hazard = defineCollection({
  loader: file("src/data/hazard.json", { parser: (text) => JSON.parse(text) })
});
const rules = defineCollection({
  loader: file("src/data/rules.json", { parser: (text) => JSON.parse(text) })
});
const shield = defineCollection({
  loader: file("src/data/shield.json", { parser: (text) => JSON.parse(text) })
});
const skill = defineCollection({
  loader: file("src/data/skill.json", { parser: (text) => JSON.parse(text) })
});
const source = defineCollection({
  loader: file("src/data/source.json", { parser: (text) => JSON.parse(text) })
});
const spell = defineCollection({
  loader: file("src/data/spell.json", { parser: (text) => JSON.parse(text) })
});
const trait = defineCollection({
  loader: file("src/data/trait.json", { parser: (text) => JSON.parse(text) })
});
const weapon = defineCollection({
  loader: file("src/data/weapon.json", { parser: (text) => JSON.parse(text) })
});

export const collections = { action, ancestry, archetype, armor, background, classes, condition, creature, creatureFamily, deity, equipment, feat, hazard, rules, shield, skill, source, spell, trait, weapon };