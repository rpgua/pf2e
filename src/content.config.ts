import { file } from "astro/loaders";
import { defineCollection } from "astro:content";


const action = defineCollection({
  loader: file("src/data/action.json", {parser: (text) => JSON.parse(text)})
})
const ancestry = defineCollection({
  loader: file("src/data/ancestry.json", {parser: (text) => JSON.parse(text)})
})
const animalCompanion = defineCollection({
  loader: file("src/data/animal-companion.json", {parser: (text) => JSON.parse(text)})
})
const apparition = defineCollection({
  loader: file("src/data/apparition.json", {parser: (text) => JSON.parse(text)})
})
const arcaneSchool = defineCollection({
  loader: file("src/data/arcane-school.json", {parser: (text) => JSON.parse(text)})
})
const arcaneThesis = defineCollection({
  loader: file("src/data/arcane-thesis.json", {parser: (text) => JSON.parse(text)})
})
const archetype = defineCollection({
  loader: file("src/data/archetype.json", {parser: (text) => JSON.parse(text)})
})
const armor = defineCollection({
  loader: file("src/data/armor.json", {parser: (text) => JSON.parse(text)})
})
const armorGroup = defineCollection({
  loader: file("src/data/armor-group.json", {parser: (text) => JSON.parse(text)})
})
const article = defineCollection({
  loader: file("src/data/article.json", {parser: (text) => JSON.parse(text)})
})
const background = defineCollection({
  loader: file("src/data/background.json", {parser: (text) => JSON.parse(text)})
})
const bloodline = defineCollection({
  loader: file("src/data/bloodline.json", {parser: (text) => JSON.parse(text)})
})
const campsiteMeal = defineCollection({
  loader: file("src/data/campsite-meal.json", {parser: (text) => JSON.parse(text)})
})
const cause = defineCollection({
  loader: file("src/data/cause.json", {parser: (text) => JSON.parse(text)})
})
const classes = defineCollection({
  loader: file("src/data/class.json", {parser: (text) => JSON.parse(text)})
})
const classKit = defineCollection({
  loader: file("src/data/class-kit.json", {parser: (text) => JSON.parse(text)})
})
const classSample = defineCollection({
  loader: file("src/data/class-sample.json", {parser: (text) => JSON.parse(text)})
})
const condition = defineCollection({
  loader: file("src/data/condition.json", {parser: (text) => JSON.parse(text)})
})
const consciousMind = defineCollection({
  loader: file("src/data/conscious-mind.json", {parser: (text) => JSON.parse(text)})
})
const creature = defineCollection({
  loader: file("src/data/creature.json", {parser: (text) => JSON.parse(text)})
})
const creatureAbility = defineCollection({
  loader: file("src/data/creature-ability.json", {parser: (text) => JSON.parse(text)})
})
const creatureAdjustment = defineCollection({
  loader: file("src/data/creature-adjustment.json", {parser: (text) => JSON.parse(text)})
})
const creatureFamily = defineCollection({
  loader: file("src/data/creature-family.json", {parser: (text) => JSON.parse(text)})
})
const cultActivity = defineCollection({
  loader: file("src/data/cult-activity.json", {parser: (text) => JSON.parse(text)})
})
const curse = defineCollection({
  loader: file("src/data/curse.json", {parser: (text) => JSON.parse(text)})
})
const deity = defineCollection({
  loader: file("src/data/deity.json", {parser: (text) => JSON.parse(text)})
})
const deityCategory = defineCollection({
  loader: file("src/data/deity-category.json", {parser: (text) => JSON.parse(text)})
})
const disease = defineCollection({
  loader: file("src/data/disease.json", {parser: (text) => JSON.parse(text)})
})
const doctrine = defineCollection({
  loader: file("src/data/doctrine.json", {parser: (text) => JSON.parse(text)})
})
const domain = defineCollection({
  loader: file("src/data/domain.json", {parser: (text) => JSON.parse(text)})
})
const druidicOrder = defineCollection({
  loader: file("src/data/druidic-order.json", {parser: (text) => JSON.parse(text)})
})
const eidolon = defineCollection({
  loader: file("src/data/eidolon.json", {parser: (text) => JSON.parse(text)})
})
const element = defineCollection({
  loader: file("src/data/element.json", {parser: (text) => JSON.parse(text)})
})
const epithet = defineCollection({
  loader: file("src/data/epithet.json", {parser: (text) => JSON.parse(text)})
})
const equipment = defineCollection({
  loader: file("src/data/equipment.json", {parser: (text) => JSON.parse(text)})
})
// const equipmentCategory = defineCollection({
//   loader: file("src/data/equipment-category.json", {parser: (text) => JSON.parse(text)})
// })
const familiarAbility = defineCollection({
  loader: file("src/data/familiar-ability.json", {parser: (text) => JSON.parse(text)})
})
const familiarSpecific = defineCollection({
  loader: file("src/data/familiar-specific.json", {parser: (text) => JSON.parse(text)})
})
const feat = defineCollection({
  loader: file("src/data/feat.json", {parser: (text) => JSON.parse(text)})
})
const hazard = defineCollection({
  loader: file("src/data/hazard.json", {parser: (text) => JSON.parse(text)})
})
const hellknightOrder = defineCollection({
  loader: file("src/data/hellknight-order.json", {parser: (text) => JSON.parse(text)})
})
const heritage = defineCollection({
  loader: file("src/data/heritage.json", {parser: (text) => JSON.parse(text)})
})
const huntersEdge = defineCollection({
  loader: file("src/data/hunters-edge.json", {parser: (text) => JSON.parse(text)})
})
const hybridStudy = defineCollection({
  loader: file("src/data/hybrid-study.json", {parser: (text) => JSON.parse(text)})
})
const ikon = defineCollection({
  loader: file("src/data/ikon.json", {parser: (text) => JSON.parse(text)})
})
const implement = defineCollection({
  loader: file("src/data/implement.json", {parser: (text) => JSON.parse(text)})
})
const innovation = defineCollection({
  loader: file("src/data/innovation.json", {parser: (text) => JSON.parse(text)})
})
const instinct = defineCollection({
  loader: file("src/data/instinct.json", {parser: (text) => JSON.parse(text)})
})
const kingdomEvent = defineCollection({
  loader: file("src/data/kingdom-event.json", {parser: (text) => JSON.parse(text)})
})
const kingdomStructure = defineCollection({
  loader: file("src/data/kingdom-structure.json", {parser: (text) => JSON.parse(text)})
})
const language = defineCollection({
  loader: file("src/data/language.json", {parser: (text) => JSON.parse(text)})
})
const lesson = defineCollection({
  loader: file("src/data/lesson.json", {parser: (text) => JSON.parse(text)})
})
const methodology = defineCollection({
  loader: file("src/data/methodology.json", {parser: (text) => JSON.parse(text)})
})
// const monsters = defineCollection({
//   loader: file("src/data/monsters.json", {parser: (text) => JSON.parse(text)})
// })
const muse = defineCollection({
  loader: file("src/data/muse.json", {parser: (text) => JSON.parse(text)})
})
const mystery = defineCollection({
  loader: file("src/data/mystery.json", {parser: (text) => JSON.parse(text)})
})
const mythicCalling = defineCollection({
  loader: file("src/data/mythic-calling.json", {parser: (text) => JSON.parse(text)})
})
const patron = defineCollection({
  loader: file("src/data/patron.json", {parser: (text) => JSON.parse(text)})
})
const plane = defineCollection({
  loader: file("src/data/plane.json", {parser: (text) => JSON.parse(text)})
})
const practice = defineCollection({
  loader: file("src/data/practice.json", {parser: (text) => JSON.parse(text)})
})
const racket = defineCollection({
  loader: file("src/data/racket.json", {parser: (text) => JSON.parse(text)})
})
const relic = defineCollection({
  loader: file("src/data/relic.json", {parser: (text) => JSON.parse(text)})
})
const researchField = defineCollection({
  loader: file("src/data/research-field.json", {parser: (text) => JSON.parse(text)})
})
const ritual = defineCollection({
  loader: file("src/data/ritual.json", {parser: (text) => JSON.parse(text)})
})
const rules = defineCollection({
  loader: file("src/data/rules.json", {parser: (text) => JSON.parse(text)})
})
const setRelic = defineCollection({
  loader: file("src/data/set-relic.json", {parser: (text) => JSON.parse(text)})
})
const shield = defineCollection({
  loader: file("src/data/shield.json", {parser: (text) => JSON.parse(text)})
})
const siegeWeapon = defineCollection({
  loader: file("src/data/siege-weapon.json", {parser: (text) => JSON.parse(text)})
})
const skill = defineCollection({
  loader: file("src/data/skill.json", {parser: (text) => JSON.parse(text)})
})
const source = defineCollection({
  loader: file("src/data/source.json", {parser: (text) => JSON.parse(text)})
})
const spell = defineCollection({
  loader: file("src/data/spell.json", {parser: (text) => JSON.parse(text)})
})
const style = defineCollection({
  loader: file("src/data/style.json", {parser: (text) => JSON.parse(text)})
})
const subconsciousMind = defineCollection({
  loader: file("src/data/subconscious-mind.json", {parser: (text) => JSON.parse(text)})
})
const tactic = defineCollection({
  loader: file("src/data/tactic.json", {parser: (text) => JSON.parse(text)})
})
const tenet = defineCollection({
  loader: file("src/data/tenet.json", {parser: (text) => JSON.parse(text)})
})
const tradition = defineCollection({
  loader: file("src/data/tradition.json", {parser: (text) => JSON.parse(text)})
})
const trait = defineCollection({
  loader: file("src/data/trait.json", {parser: (text) => JSON.parse(text)})
})
const vehicle = defineCollection({
  loader: file("src/data/vehicle.json", {parser: (text) => JSON.parse(text)})
})
const warfareArmy = defineCollection({
  loader: file("src/data/warfare-army.json", {parser: (text) => JSON.parse(text)})
})
const warfareTactic = defineCollection({
  loader: file("src/data/warfare-tactic.json", {parser: (text) => JSON.parse(text)})
})
const way = defineCollection({
  loader: file("src/data/way.json", {parser: (text) => JSON.parse(text)})
})
const weapon = defineCollection({
  loader: file("src/data/weapon.json", {parser: (text) => JSON.parse(text)})
})
const weaponGroup = defineCollection({
  loader: file("src/data/weapon-group.json", {parser: (text) => JSON.parse(text)})
})
const weatherHazard = defineCollection({
  loader: file("src/data/weather-hazard.json", {parser: (text) => JSON.parse(text)})
})

export const collections = { action, ancestry, animalCompanion, apparition, arcaneSchool, arcaneThesis, archetype, armor, armorGroup, article, background, bloodline, campsiteMeal, cause, classes, classKit, classSample, condition, consciousMind, creature, creatureAbility, creatureAdjustment, creatureFamily, cultActivity, curse, deity, deityCategory, disease, doctrine, domain, druidicOrder, eidolon, element, epithet,equipment, familiarAbility, familiarSpecific, feat, hazard, hellknightOrder, heritage, huntersEdge, hybridStudy, ikon, implement, innovation, instinct, kingdomEvent, kingdomStructure, language, lesson, methodology, muse,mystery, mythicCalling, patron, plane, practice, racket, relic, researchField, ritual, rules, setRelic, shield, siegeWeapon,skill, source, spell, style, subconsciousMind, tactic, tenet, tradition, trait, vehicle, warfareArmy, warfareTactic, way, weapon, weaponGroup, weatherHazard };