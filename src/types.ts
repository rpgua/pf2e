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
  pfs?: boolean;
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
  speed: {
    ground: number | null;
    burrow: number | null;
    swim: number | null;
    fly: number | null;
    climb: number | null;
  };
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
  speed: {
    ground: number | null;
    burrow: number | null;
    swim: number | null;
    fly: number | null;
    climb: number | null;
  };
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

export interface Feat {
  prerequisites: string[];
  benefits: string[];
}

export type Trait = BaseItem;

export interface Rules extends BaseItem {
  parent: number[];
}

export type Heritage = BaseItem;
