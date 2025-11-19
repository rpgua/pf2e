import { file } from "astro/loaders";
import { defineCollection } from "astro:content";

const action = defineCollection({
  loader: file("src/data/action.json"),
});
const ancestry = defineCollection({
  loader: file("src/data/ancestry.json"),
});
const animalCompanion = defineCollection({
  loader: file("src/data/animal-companion.json"),
});
const apparition = defineCollection({
  loader: file("src/data/apparition.json"),
});
const arcaneSchool = defineCollection({
  loader: file("src/data/arcane-school.json"),
});
const arcaneThesis = defineCollection({
  loader: file("src/data/arcane-thesis.json"),
});
const archetype = defineCollection({
  loader: file("src/data/archetype.json"),
});
const armorGroup = defineCollection({
  loader: file("src/data/armor-group.json"),
});
const armor = defineCollection({
  loader: file("src/data/armor.json"),
});
const article = defineCollection({
  loader: file("src/data/article.json"),
});
const background = defineCollection({
  loader: file("src/data/background.json"),
});
const bloodline = defineCollection({
  loader: file("src/data/bloodline.json"),
});
const campsiteMeal = defineCollection({
  loader: file("src/data/campsite-meal.json"),
});
const cause = defineCollection({
  loader: file("src/data/cause.json"),
});
const class_ = defineCollection({
  loader: file("src/data/class.json"),
});
const classKit = defineCollection({
  loader: file("src/data/class-kit.json"),
});
const classSample = defineCollection({
  loader: file("src/data/class-sample.json"),
});
const condition = defineCollection({
  loader: file("src/data/condition.json"),
});
const consciousMind = defineCollection({
  loader: file("src/data/conscious-mind.json"),
});
const creatureAbility = defineCollection({
  loader: file("src/data/creature-ability.json"),
});
const creatureAdjustment = defineCollection({
  loader: file("src/data/creature-adjustment.json"),
});
const creatureFamily = defineCollection({
  loader: file("src/data/creature-family.json"),
});
const creature = defineCollection({
  loader: file("src/data/creature.json"),
});
const curse = defineCollection({
  loader: file("src/data/curse.json"),
});
const deityCategory = defineCollection({
  loader: file("src/data/deity-category.json"),
});
const deity = defineCollection({
  loader: file("src/data/deity.json"),
});
const disease = defineCollection({
  loader: file("src/data/disease.json"),
});
const doctrine = defineCollection({
  loader: file("src/data/doctrine.json"),
});
const domain = defineCollection({
  loader: file("src/data/domain.json"),
});
const druidicOrder = defineCollection({
  loader: file("src/data/druidic-order.json"),
});
const eidolon = defineCollection({
  loader: file("src/data/eidolon.json"),
});
const element = defineCollection({
  loader: file("src/data/element.json"),
});
const epithet = defineCollection({
  loader: file("src/data/epithet.json"),
});
const equipment = defineCollection({
  loader: file("src/data/equipment.json"),
});
const familiarAbility = defineCollection({
  loader: file("src/data/familiar-ability.json"),
});
const familiarSpecific = defineCollection({
  loader: file("src/data/familiar-specific.json"),
});
const feat = defineCollection({
  loader: file("src/data/feat.json"),
});
const hazard = defineCollection({
  loader: file("src/data/hazard.json"),
});
const hellknightOrder = defineCollection({
  loader: file("src/data/hellknight-order.json"),
});
const heritage = defineCollection({
  loader: file("src/data/heritage.json"),
});
const huntersEdge = defineCollection({
  loader: file("src/data/hunters-edge.json"),
});
const hybridStudy = defineCollection({
  loader: file("src/data/hybrid-study.json"),
});
const ikon = defineCollection({
  loader: file("src/data/ikon.json"),
});
const implement = defineCollection({
  loader: file("src/data/implement.json"),
});
const innovation = defineCollection({
  loader: file("src/data/innovation.json"),
});
const instinct = defineCollection({
  loader: file("src/data/instinct.json"),
});
const kingdomEvent = defineCollection({
  loader: file("src/data/kingdom-event.json"),
});
const kingdomStructure = defineCollection({
  loader: file("src/data/kingdom-structure.json"),
});
const language = defineCollection({
  loader: file("src/data/language.json"),
});
const lesson = defineCollection({
  loader: file("src/data/lesson.json"),
});
const methodology = defineCollection({
  loader: file("src/data/methodology.json"),
});
const muse = defineCollection({
  loader: file("src/data/muse.json"),
});
const mystery = defineCollection({
  loader: file("src/data/mystery.json"),
});
const mythicCalling = defineCollection({
  loader: file("src/data/mythic-calling.json"),
});
const patron = defineCollection({
  loader: file("src/data/patron.json"),
});
const plane = defineCollection({
  loader: file("src/data/plane.json"),
});
const practice = defineCollection({
  loader: file("src/data/practice.json"),
});
const racket = defineCollection({
  loader: file("src/data/racket.json"),
});
const relic = defineCollection({
  loader: file("src/data/relic.json"),
});
const researchField = defineCollection({
  loader: file("src/data/research-field.json"),
});
const ritual = defineCollection({
  loader: file("src/data/ritual.json"),
});
const rules = defineCollection({
  loader: file("src/data/rules.json"),
});
const setRelic = defineCollection({
  loader: file("src/data/set-relic.json"),
});
const shield = defineCollection({
  loader: file("src/data/shield.json"),
});
const siegeWeapon = defineCollection({
  loader: file("src/data/siege-weapon.json"),
});
const skill = defineCollection({
  loader: file("src/data/skill.json"),
});
const source = defineCollection({
  loader: file("src/data/source.json"),
});
const spell = defineCollection({
  loader: file("src/data/spell.json"),
});
const style = defineCollection({
  loader: file("src/data/style.json"),
});
const subconsciousMind = defineCollection({
  loader: file("src/data/subconscious-mind.json"),
});
const tactic = defineCollection({
  loader: file("src/data/tactic.json"),
});
const tenet = defineCollection({
  loader: file("src/data/tenet.json"),
});
const tradition = defineCollection({
  loader: file("src/data/tradition.json"),
});
const trait = defineCollection({
  loader: file("src/data/trait.json"),
});
const vehicle = defineCollection({
  loader: file("src/data/vehicle.json"),
});
const warfareArmy = defineCollection({
  loader: file("src/data/warfare-army.json"),
});
const warfareTactic = defineCollection({
  loader: file("src/data/warfare-tactic.json"),
});
const way = defineCollection({
  loader: file("src/data/way.json"),
});
const weaponGroup = defineCollection({
  loader: file("src/data/weapon-group.json"),
});
const weapon = defineCollection({
  loader: file("src/data/weapon.json"),
});
const weatherHazard = defineCollection({
  loader: file("src/data/weather-hazard.json"),
});

export const collections = {
  action,
  ancestry,
  animalCompanion,
  apparition,
  arcaneSchool,
  arcaneThesis,
  archetype,
  armor,
  armorGroup,
  article,
  background,
  bloodline,
  campsiteMeal,
  cause,
  class_,
  classKit,
  classSample,
  condition,
  consciousMind,
  creature,
  creatureAbility,
  creatureAdjustment,
  creatureFamily,
  curse,
  deity,
  deityCategory,
  disease,
  doctrine,
  domain,
  druidicOrder,
  eidolon,
  element,
  epithet,
  equipment,
  familiarAbility,
  familiarSpecific,
  feat,
  hazard,
  hellknightOrder,
  heritage,
  huntersEdge,
  hybridStudy,
  ikon,
  implement,
  innovation,
  instinct,
  kingdomEvent,
  kingdomStructure,
  language,
  lesson,
  methodology,
  muse,
  mystery,
  mythicCalling,
  patron,
  plane,
  practice,
  racket,
  relic,
  researchField,
  ritual,
  rules,
  setRelic,
  shield,
  siegeWeapon,
  skill,
  source,
  spell,
  style,
  subconsciousMind,
  tactic,
  tenet,
  tradition,
  trait,
  vehicle,
  warfareArmy,
  warfareTactic,
  way,
  weapon,
  weaponGroup,
  weatherHazard,
};
