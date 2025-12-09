type Speed = {
  ground: number | null;
  burrow: number | null;
  swim: number | null;
  fly: number | null;
  climb: number | null;
};

export interface BaseItem {
  id: number;
  aon: string;
  name: string;
  original_name: string;
  rulebook_id: number;
  page_number: number;
  category: string;
  remaster_id?: number;
  legacy_id?: number;
  rarity?: string;
  pfs?: string;
  traits?: string[];
  spoilers?: string;
  content: string;
}
// TODO Refactor this interface
export interface Attack {
  name: string;
}
export interface Action extends BaseItem {
  actions: number;
  cost?: string;
  element?: string;
  school?: string;
  frequency?: string;
  requirements?: string;
  triggers?: string;
  critical_success?: string;
  success?: string;
  failure?: string;
  critical_failure?: string;
}
export interface Ancestry extends BaseItem {
  hp: number;
  size: string[];
  speed: Speed;
  languages: string[];
  additional_languages: string | null;
  attribute_boosts: string[];
  attribute_flaw: string[];
  vision?: string;
  additional_mechanics: string | null;
  type: string;
}
export interface AnimalCompanion extends BaseItem {
  level: number;
  mount?: boolean;
  access?: string;
  element?: string[];
  size: string[];
  attacks: Attack[];
  attribute_modifiers: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  hp: number;
  skill: string[];
  sense?: string;
  speed: Speed;
  special: string | null;
  support_benefit: string | null;
  advanced_maneuver: string | null;
}
export interface Apparition extends BaseItem {
  skill: string;
  senses: string;
  spell: string;
}
export interface ArcaneSchool extends BaseItem {
  curriculum: {
    0: number[] | [];
    1: number[] | [];
    2: number[] | [];
    3: number[] | [];
    4: number[] | [];
    5: number[] | [];
    6: number[] | [];
    7: number[] | [];
    8: number[] | [];
    9: number[] | [];
    initial: number | null;
    advanced: number | null;
  };
}
export type ArcaneThesis = BaseItem;
export interface Archetype extends BaseItem {
  level?: number;
  prerequisite?: string;
  requirement?: string;
}
export interface Armor extends BaseItem {
  access: string;
  level: number;
  price: number;
  attributes: {
    strength?: number;
    ac: number;
    dex_cap?: number;
    speed_penalty?: number;
    check_penalty?: number;
    bulk: number;
    category: string;
    group?: string;
  };
}
export type ArmorGroup = BaseItem;
export type Article = BaseItem;
export interface Background extends BaseItem {
  access?: string;
  attributes: string[];
  feats?: number[];
  skills?: number[];
  general?: boolean;
  region?: string;
}
export interface Bloodline extends BaseItem {
  skills?: number[];
  spells?: number[];
  tradition: string[];
}
export interface CampsiteMeal extends BaseItem {
  level: number;
  price?: number;
  requirements?: string;
}
export interface Cause extends BaseItem {
  alignment?: string;
}
export interface Class extends BaseItem {
  attack_proficiency: string[];
  defense_proficiency: string[];
  fortitude_proficiency: string;
  perception_proficiency: string;
  reflex_proficiency: string;
  will_proficiency: string;
  skill_proficiency: string[];
  traditions?: string[];
  attributes: string[];
  hp: number;
}
export interface ClassKit extends BaseItem {
  bulk: number;
  price: number;
}
export type Condition = BaseItem;
export interface ConsciousMind extends BaseItem {
  spell: number[];
}
// Creature -> Monster
export interface Monster extends BaseItem {
  level: number;
  npc: boolean;
  ac: number;
  alignment: string;
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  elements: string[];
  strongest_save: string[];
  perception: number;
  stealth: number;
  saves: {
    fortitude: number;
    reflex: number;
    will: number;
  }
  hardness: number;
  hp: number;
  resistance?: string;
  immunity?: string;
  school?: string;
  sense?: string;
  size: string[];
  skills: string;
  abilities?: string[];
  monster_family?: string;
  items?: string[];
  languages: string;
  tradition?: string[];
  weakness?: string;
}
// CreatureAbility  -> MonsterAbility 
export interface MonsterAbility {
  actions?: number;
}
// CreatureAdjustment -> MonsterAdjustment
export type MonsterAdjustment = BaseItem;
// CreatureFamily -> MonsterFamily
export type MonsterFamily = BaseItem;
export interface Curse extends BaseItem {
  element?: string[];
  saving_throw?: string;
  school?: string;
  usage?: string;
}
export interface Deity extends BaseItem {
  alignment?: string;
  anathema: string;
  area_of_concern?: string[];
  attributes?: string[];
  cleric_spell?: string[];
  deity: string[];
  deity_category: string;
  divine_font_markdown: string;
  domain?: string[];
  domain_alternate?: string;
  domain_primary?: string;
  edict: string;
  epithet?: string;
  follower_alignment?: string[];
  pantheon?: string[];
  pantheon_member?: string[];
  religious_symbol?: string;
  sacred_animal?: string;
  sacred_color?: string[];
  sanctification: string;
  skill: string;
  spells: string;
}
export interface DeityCategory extends BaseItem {
  deity: string;
  deity_category: string;
}
export interface Disease extends BaseItem {
  element?: string[];
  saving_throw: string;
  onset?: string;
  school?: string;
  stage: string[];
}
export type Doctrine = BaseItem;
export interface Domain extends BaseItem {
  advanced_apocryphal_spell?: string;
  advanced_domain_spell: string;
  apocryphal_spell?: string;
  deity?: string[];
  domain: string[];
  domain_spell: string;
  spells: string[];
}
export type DruidicOrder = BaseItem;
export interface Eidolon extends BaseItem {
  alignment?: string;
  home_plane: string;
  language: string;
  sense: string;
  size: string[];
  skill: string;
  speed: Speed
  tradition: string[];
}
export interface Element extends BaseItem {
  element: string[];
}
export type Epithet = BaseItem;
export interface Equipment extends BaseItem {
  access?: string;
  actions?: number;
  alignment?: string;
  ammunition?: string;
  base_item?: string;
  bulk: number;
  duration?: number;
  element?: string[];
  frequency?: string;
  hands?: string;
  item_category: string;
  item_subcategory?: string;
  item_child_id?: number[];
  level: number;
  onset?: number;
  price?: number;
  requirement?: number;
  saving_throw?: string;
  school?: string;
  skill?: string;
  stage?: string;
  trigger?: string;
  usage?: string;
}
export interface FamiliarAbility extends BaseItem {
  ability_type: string;
  actions?: number;
  frequency?: string;
  requirement?: string;
}
export interface FamiliarSpecific extends BaseItem {
  access?: string;
  alignment?: string;
  element?: string[];
  familiar_ability?: string;
  required_abilities?: number;
}
export interface Feat {
  access?: string;
  actions?: number;
  archetype?: string[];
  cost?: string;
  duration?: number;
  element?: string[];
  frequency?: string;
  heighten?: string[];
  heighten_group?: string[]
  heighten_level?: number[];
  level: number;
  prerequisite?: string;
  requirement?: string;
  school?: string;
  skill?: string[];
  trigger?: string;
  usage?: string;
}
export interface Hazard extends BaseItem {
  ac?: number;
  complexity: string;
  disable?: string;
  element?: string[];
  fortitude_save?: number;
  reflex_save?: number;
  will_save?: number;
  hardness?: number;
  hazard_type?: string;
  hp?: number;
  immunity?: string;
  level: number;
  reset?: string;
  resistance?: string;
  school?: string;
  stealth?: string;
  weakness?: string;
}
export interface HellknightOrder extends BaseItem {
  favored_weapon: string;
}
export type Heritage = BaseItem;
export type HuntersEdge = BaseItem;
export type HybridStudy = BaseItem;
export interface Ikon extends BaseItem {
  usage: string;
}
export type Implement = BaseItem;
export type Innovation = BaseItem;
export type Instinct = BaseItem;
export interface KingdomEvent extends BaseItem {
  level: number;
  skill: string;
}
export interface KingdomStructure extends BaseItem {
  level: number;
  cost: string;
}
export type Language = BaseItem;
export type Lesson = BaseItem;
export type Methodology = BaseItem;
export type Muse = BaseItem;
export interface Mystery extends BaseItem {
  domain?: string[];
  skill?: string;
  spell?: string;
}
export interface MythicCalling extends BaseItem {
  edict: string;
  anathema: string;
}
export interface Patron extends BaseItem {
  hex_cantrip: string;
  skill: string;
  spell: string[];
  tradition: string;
}
export interface Plane extends BaseItem {
  alignment?: string;
  element?: string[];
  plane_category: string;
}
export type Practice = BaseItem;
export type Racket = BaseItem;
export interface Relic extends BaseItem {
  aspect: string;
  element?: string[];
  prerequisite?: string;
  school?: string;
}
export type ResearchField = BaseItem;
export interface Ritual extends BaseItem {
  actions?: string;
  area?: string;
  area_type?: string;
  cost?: string;
  duration?: string;
  element?: string[];
  heighten: string[];
  heighten_group: string[];
  heighten_level: number[];
  level: number;
  primary_check: string;
  range?: number;
  requirement?: string;
  school?: string;
  secondary_casters?: string;
  secondary_check?: string;
  target?: string;
}
export interface Rules extends BaseItem {
  parent: number[];
}
export interface SetRelic extends BaseItem {
  aspect: string;
}
export interface Shield extends BaseItem {
  ac: number;
  bulk: number;
  hardness: number;
  hp: number;
  item_category: string;
  item_subcategory: string;
  level: number;
}
export interface SiegeWeapon extends BaseItem {
  ammunition?: string;
  bulk?: number;
  crew: string;
  fortitude_save?: number;
  hardness?: number;
  hp?: number;
  immunity: string;
  item_category: string;
  item_child_id: any[];
  level: number;
  price?: number;
  reflex_save?: number;
  siege_weapon_category: string;
  size: string[];
  space?: string;
  speed: Speed;
  usage: string;
  weapon_category: string;
}
export interface Skill extends BaseItem {
  attribute?: string[];
}
export interface Source extends BaseItem {
  release: string;
  type: string;
}
export interface Spell extends BaseItem {
  actions?: number;
  area?: string;
  area_type?: string;
  bloodline?: string;
  components?: string[];
  cost?: string;
  deity?: string[];
  duration?: string;
  element?: string[];
  heighten?: string[];
  heighten_group?: string[];
  heighten_level?: number[];
  lesson?: string;
  level: number;
  mystery?: string;
  patron_theme: string;
  range?: number;
  requirement?: string;
  saving_throw?: string;
  school?: string;
  spell_type: string;
  target?: string;
  tradition?: string;
  trigger?: string;
  warden_spell_tier?: string;
}
export type Style = BaseItem;
export interface SubconsciousMind extends BaseItem {
  attribute: string[];
}
export interface Tactic extends BaseItem {
  actions: number;
  frequency?: string;
  requirement?: string;
}
export type Tenet = BaseItem;
export type Tradition = BaseItem;
export type Trait = BaseItem;
export interface Vehicle extends BaseItem {
  ac: number;
  crew: string;
  fortitude_save: number;
  hardness: number;
  hp: number;
  immunity: string;
  item_category: string;
  level: number;
  passengers: number;
  piloting_check: string;
  price?: number;
  reflex_save?: number;
  resistance?: string;
  school?: string;
  size: string[];
  space: string;
  speed: Speed;
  type: string;
  weakness?: string;
}
export interface WarfareArmy extends BaseItem {
  ac: number;
  hp: number;
  level: number;
}
export interface WarfareTactic extends BaseItem {
  level: number;
}
export interface Way extends BaseItem {
  skill: string[];
}
export interface Weapon extends BaseItem {
  access?: string;
  ammunition: string;
  bulk: number;
  damage?: string;
  damage_die?: number;
  damage_type?: string[];
  deity?: string;
  hands?: string;
  item_category: string;
  item_subcategory: string;
  level: number;
  price?: number;
  range?: number;
  reload?: string;
  weapon_category: string;
  weapon_group: string;
  weapon_type: string;
}
export type WeaponGroup = BaseItem;
export interface WeatherHazard extends BaseItem {
  hazard_type: string;
  level: number;
  requirement?: string;
}
