export interface Action {
    id: string;
    name: string;
    original_name: string;
    actions: number;
    source_id: Source;
    cost: string;
    traits: Trait[];
    trigger: string;
    content: string;
    type: ElementType;
    frequency: Frequency;
}

export interface Ancestry {
    id: string;
    name: string;
    original_name: string;
    hp: number;
    attribute: Attribute[];
    language: Language[];
    source_id: Source;
    page: string;
    rarity: Rarity;
    speed: Speed[];
    speed_max: number;
    traits: Trait[];
    vision: Vision[];
    content: string;
    type: ElementType;
    expand?: {
        attribute: Attribute[];
        language: Language[];
        source_id: Source;
        rarity: Rarity;
        speed: Speed[];
        traits: Trait[];
        vision: Vision[];
        type: ElementType;
    }
}

export interface Archetype {
    id: string;
    name: string;
    original_name: string;
    access: string;
    categories: ArchetypeCategory[];
    level: number;
    pfs: PFS;
    prerequisite: string;
    source_id: Source;
    rarity: Rarity;
    traits: Trait[];
    requirement: string;
    content: string;
    type: ElementType;
    expand?: {
        categories: ArchetypeCategory[];
        pfs: PFS;
        source_id: Source;
        rarity: Rarity;
        traits: Trait[];
        type: ElementType;
    }
}

export interface Armor {
    id: string;
    ac: number;
    armor_category: ArmorCategory;
    bulk: number;
    check_penalty: number;
    dex_cap: number;
    item_category: ItemCategory;
    item_subcategory: ItemSubCategory;
    level: number;
    name: string;
    original_name: string;
    pfs: PFS;
    price: number;
    rarity: Rarity;
    source_id: Source;
    strength: number;
    traits: Trait[];
    type: ElementType;
    access: string;
    armor_group: ArmorGroup;
    speed_penalty: number;
    content: string;
}

export interface Background {
    id: string;
    name: string;
    original_name: string;
    attribute: Attribute[];
    feat: Feat[];
    is_general_background: boolean;
    pfs: PFS;
    prerequisite: string;
    source_id: Source;
    rarity: Rarity;
    region: Region;
    skill: Skill;
    traits: Trait[];
    type: ElementType;
    expand?: {
        attribute: Attribute[];
        feat: Feat[];
        pfs: PFS;
        source_id: Source;
        rarity: Rarity;
        region: Region;
        skill: Skill;
        traits: Trait[];
        type: ElementType;
    }
}

export interface Class {
    id: string;
    attack_proficiency: AttackProficiency[]
    defense_proficiency: DefenseProficiency[]
    perception_proficiency: PerceptionProficiency[]
    fortitude_proficiency: FortitudeProficiency[]
    reflex_proficiency: ReflexProficiency[]
    will_proficiency: WillProficiency[]
    skill_proficiency: SkillProficiency[]
    attribute: Attribute[];
    hp: number;
    name: string;
    original_name: string;
    pfs: PFS;
    source_id: Source;
    rarity: Rarity;
    traits: Trait[];
    type: ElementType;
    tradition: Tradition[];
    content: string;
    expand?: {
        attack_proficiency: AttackProficiency[]
        defense_proficiency: DefenseProficiency[]
        perception_proficiency: PerceptionProficiency[]
        fortitude_proficiency: FortitudeProficiency[]
        reflex_proficiency: ReflexProficiency[]
        will_proficiency: WillProficiency[]
        skill_proficiency: SkillProficiency[]
        attribute: Attribute[];
        pfs: PFS;
        source_id: Source;
        rarity: Rarity;
        traits: Trait[];
        type: ElementType;
        tradition: Tradition[];
    }
}

export interface Condition {
    id: string;
    name: string;
    original_name: string;
    source_id: Source;
    rarity: Rarity;
    traits: Trait[];
    type: ElementType;
    content: string;
}

export interface Creature {
    id: string;
    ac: number;
    alignment: Alignment;
    charisma: number;
    intelligence: number;
    dexterity: number;
    strength: number;
    constitution: number;
    wisdom: number;
    creature_ability: CreatureAbility;
    creature_family: CreatureFamily;
    element: Element;
    fortitude_save: number;
    hardness: number;
    hp: number;
    immunity: Immunity[];
    item: Equipment[];
    language: Language[];
    level: number;
    name: string;
    original_name: string;
    npc: boolean;
    pfs: PFS;
    source_id: Source;
    rarity: Rarity;
    traits: Trait[];
    reflex_save: number;
    resistance: Resistance[]
    school: School;
    sense: Sense[];
    size: Size[];
    skill: Skill[];
    skill_mod: SkillMod[]
    speed: Speed[];
    speed_max: number;
    spell: Spell[];
    spell_dc: number[];
    stealth: number;
    content: string;
    tradition: Tradition[];
    type: ElementType;
    vision: Vision;
    weakness: Weakness[]
    will_save: number;

}

export interface Speed {
    id: string;
    type: SpeedType;
    amount: number;
}

export interface SkillMod {
    id: string;
    skill: Skill;
    amount: number;
}

export interface Resistance {
    id: string;
    type: ResistanceType;
    amount: number
}

export interface CreatureFamily {
    id: string;
    name: string;
    original_name: string;
    source_id: Source;
    rarity: Rarity;
    traits: Trait[];
    type: ElementType;
}

export interface Deity {
    id: string;
    name: string;
    original_name: string;
    anathema: string;
    alignment: string;
    area_of_concern: AreaOfConcern[]
    attribute: Attribute[];
    cleric_spell: Spell[]
    deity_category: DeityCategory;
    divine_font: DivineFont[]
    domain: Domain[]
    domain_alternate: DomainAlternate[]
    edict: string;
    favored_weapon: Weapon[]
    follower_alignment: Alignment[]
    pantheon: Pantheon[]
    pfs: PFS;
    sanctification: Sanctification[]
    skill: Skill[]
    spell: Spell[]
    content: string
    source_id: Source;
    rarity: Rarity;
    traits: Trait[];
    type: ElementType;
}

export interface Equipment {
    id: string;
    access: string;
    actions: number;
    alignment: Alignment;
    ammunition: Ammunition[];
    base_item: Weapon[];
    bulk: number;
    duration: number;
    element: Element[];
    frequency: Frequency;
    hands: -1 | 2 | 1;
    item_category: ItemCategory;
    item_subcategory: ItemSubCategory;
    level: number;
    onset: number;
    pfs: PFS;
    price: number;
    rarity: Rarity;
    traits: Trait[];
    requirement: string;
    saving_throw: string;
    school: School;
    skill: Skill[]
    source_id: Source;
    spell: Spell[];
    stage: string[]
    content: string;
    trigger: string;
    type: ElementType;
    usage: Usage;
}

export interface Feat {
    id: string;
    access: string;
    actions: number;
    archetype: Archetype[]
    cost: string;
    element: Element[];
    heighten: Heighten[];
    heighten_level: number[];
    level: number;
    name: string;
    original_name: string;
    pfs: PFS;
    prerequisite: string;
    rarity: Rarity;
    traits: Trait[];
    requirement: string;
    school: School;
    skill: Skill[];
    content: string;
    trigger: string;
    type: ElementType;
    source_id: Source;
}

export interface Hazard {
    id: string;
    ac: number;
    complexity: 'complex' | 'simple';
    disable: string;
    element: ElementType;
    fortitude_save: number;
    hardness: number
    hazard_type: HazardType;
    hp: number;
    immunity: Immunity;
    level: number;
    name: string;
    original_name: string;
    rarity: Rarity;
    traits: Trait[];
    reflex_save: number;
    reset: string;
    school: School;
    stealth: string;
    content: string;
    type: ElementType;
    weakness: Weakness[]
    will_save: number;
    source_id: Source;
}


export interface Ritual {
    id: string;
    actions: number;
    area: number[]
    area_type: AreaType[]
    cost: string;
    duration: number;
    element: Element;
    heighten: Heighten[]
    heighten_level: number[]
    level: number
    name: string;
    original_name: string;
    rarity: Rarity;
    traits: Trait[];
    pfs: PFS;
    primary_check: string;
    range: number;
    requirement: string;
    school: School
    secondary_casters: number;
    secondary_check: string;
    source_id: Source;
    content: string;
    target: string;
    type: ElementType;
}

export interface BaseRule {
    id: string;
}

export interface Rule extends BaseRule {
    name: string;
    original_name: string;
    source_id: Source;
    page: number;
    content: string;
    type: ElementType;
    subrules: string[]
    expand?: {
        source_id: Source;
        type: ElementType;
        subrules: Rule[];
    }
}

export interface Shield {
    id: string;
    ac: number;
    bulk: number;
    hardness: number;
    hp: number;
    item_category: ItemCategory;
    item_subcategory: ItemSubCategory
    level: number;
    name: string;
    original_name: string;
    rarity: Rarity;
    traits: Trait[];
    pfs: PFS;
    price: number;

    source_id: Source;
    speed_penalty: string;

    content: string;
    type: ElementType;


}

export interface Skill {
    id: string;
    attribute: Attribute[];
    name: string;
    original_name: string;
    rarity: Rarity;
    traits: Trait[];
    source_id: Source;
    content: string;
    type: ElementType;
    expand?: {
        attribute: Attribute[];
        rarity: Rarity;
        traits: Trait[];
        source_id: Source;
        type: ElementType;
    }
}

export interface Source {
    id: string;
    source_category: SourceCategory;
    name: string;
    original_name: string;
    remaster: boolean;
    release_date: string;
    content: string;
    licence: string;
    type: ElementType;
    expand?: {
        source_category: SourceCategory
        type: ElementType;
    }
}

export interface Spell {
    id: string;
    actions: number;
    area: string[]
    area_type: AreaType[]
    bloodline: Bloodline[]
    component: Component[]
    cost: string;
    deity: Deity[]
    domain: Domain[]
    duration: number;
    element: Element[]
    heighten: Heighten[]
    heighten_level: number[]
    lesson: Lesson[]
    level: number;
    mystery: Mystery[]
    name: string;
    original_name: string;
    patron_theme: PatronTheme[];

    pfs: PFS;
    range: number;

    rarity: Rarity;
    traits: Trait[];
    school: School
    saving_throw: SavingThrow
    source_id: Source;
    spell_type: 'Focus' | 'Spell' | 'Cantrip'
    content: string;
    target: string;
    tradition: Tradition[]
    trigger: string;
    type: ElementType
    warden_spell_tier: 'Advanced' | 'Initiate' | 'Peerless' | 'Master'

}

export interface Trait {
    id: string;
    name: string;
    original_name: string;
    rarity: Rarity;
    type: ElementType
    source_id: Source;
}

export interface Weapon {
    id: string;
    access: string;
    ammunition: Ammunition;
    bulk: number;
    damage_die: number;
    damage_type: 'Slashing' | 'Piercing' | 'Bludgeoning'
    deity: Deity[]
    hands: -1 | 1 | 1.5 | 2 | 3
    item_category: ItemCategory;
    item_subcategory: ItemSubCategory
    level: number;
    name: string;
    original_name: string;
    traits: Trait[];
    rarity: Rarity;
    type: ElementType
    source_id: Source;
    pfs: PFS;
    price: number;
    range: number;
    reload: 0 | 1 | 2 | 30
    content: string;
    weapon_category: WeaponCategory
    weapon_group: WeaponGroup
    weapon_type: WeaponType
}

export interface WeaponGroup {
    id: string;
    name: string;
    original_name: string;
    traits: Trait[];
    rarity: Rarity;
    type: ElementType
    source_id: Source;
}

// helpers

export interface WeaponType {
    id: string;
    name: string
}

export interface WeaponCategory {
    id: string;
    name: string
}

export interface SavingThrow {
    id: string;
    name: string
}

export interface PatronTheme {
    id: string;
    name: string
}

export interface Mystery {
    id: string;
    name: string
}

export interface Lesson {
    id: string;
    name: string
}

export interface Component {
    id: string;
    name: string
}

export interface Bloodline {
    id: string;
    name: string
}

export interface AreaType {
    id: string;
    name: string
}

export interface HazardType {
    id: string;
    name: string;
    original_name: string;
}

export interface Heighten {
    id: string;
    name: string;
    original_name: string;
}

export interface Usage {
    id: string;
    name: string;
    original_name: string;
}


export interface Frequency {
    id: string;
    name: string;
    original_name: string;
}

export interface Element {
    id: string;
    name: string;
    original_name: string;
}

export interface Ammunition {
    id: string;
    name: 'any' | 'arrow' | 'round' | 'bolt' | 'sling bullet' | 'bolts';
}

export interface Sanctification {
    id: string;
    name: 'holy' | 'unholy';
}

export interface DomainAlternate {
    id: string;
    name: string;
    original_name: string;
}
export interface Pantheon {
    id: string;
    name: string;
    original_name: string;
}

export interface Domain {
    id: string;
    name: string;
    original_name: string;
}

export interface DivineFont {
    id: string;
    name: string;
    original_name: string;
}

export interface DeityCategory {
    id: string;
    name: string;
    original_name: string;
}

export interface AreaOfConcern {
    id: string;
    name: string;
    original_name: string;
}

export interface WeaknessType {
    id: string;
    name: string;
    original_name: string;
}

export interface Tradition {
    id: string;
    name: string;
    original_name: string;
}

export interface SpeedType {
    id: string;
    name: string;
    original_name: string;
}

export interface Size {
    id: string;
    name: string;
    original_name: string;
}

export interface Sense {
    id: string;
    name: string;
    original_name: string;
}

export interface School {
    id: string;
    name: string;
    original_name: string;
}

export interface ResistanceType {
    id: string;
    name: string;
    original_name: string;
}

export interface Immunity {
    id: string;
    name: string;
    original_name: string;
}

export interface CreatureAbility {
    id: string;
    name: string;
    original_name: string;
}

export interface Alignment {
    id: string;
    name: string;
    original_name: string;
}

export interface Tradition {
    id: string;
    name: string;
    original_name: string;
}

export interface Region {
    id: string;
    name: string;
    original_name: string;
}

export interface ArmorGroup {
    id: string;
    name: string;
    original_name: string;
}

export interface ItemCategory {
    id: string;
    name: string;
    original_name: string;
}

export interface ItemSubCategory {
    id: string;
    name: string;
    original_name: string;
}

export interface ArmorCategory {
    id: string;
    name: string;
    original_name: string;
}

export interface ElementType {
    id: string;
    name: string;
    original_name: string;
}

export interface PFS {
    id: string;
    name: string;
    original_name: string;
}

export interface ArchetypeCategory {
    id: string;
    name: string;
    original_name: string;
}

export interface SourceCategory {
    id: string;
    name: string;
    original_name: string;
    group: SourceGroup;
    expand?: {
        group: SourceGroup;
    }
}

export interface SourceGroup {
    id: string;
    name: string;
    original_name: string;
}

export interface Vision {
    id: string;
    name: string;
    original_name: string;
}

export interface Rarity {
    id: string;
    name: string;
    original_name: string;
    order: number;
}
export interface Attribute {
    id: string;
    name: string;
    original_name: string;
}
export interface Language {
    id: string;
    name: string;
    original_name: string;
    source_id: Source,
    traits: Trait[]
    expand?: {
        source_id: Source,
        traits: Trait[]
    }
}
export interface TraitGroup {
    id: string;
    name: string;
    original_name: string;
}
export interface Trait {
    id: string;
    name: string;
    original_name: string;
    trait_group?: TraitGroup;
}

export interface AttackProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface DefenseProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface SkillProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface FortitudeProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface PerceptionProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface ReflexProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface WillProficiency {
    id: string;
    name: string;
    original_name: string;
}

export interface Weakness {
    id: string;
    type: WeaknessType;
    amount: number;
}

export interface Translation {
    id: string;
    term: string;
    original_term: string;
    comment: string;
}

export interface BookBase {
    id: string;
    source_id: Source
    content: Rule[]
}

export interface Book extends BookBase {
    expand?: {
        source_id: Source
        content: Rule[]
    }
}
// app

export type ToastProps = {
    type: "error" | "info" | "success" | "warning";
    message: undefined | string
}

export type Chapter = {
    rule: Rule;
    next_rule: {
        id: string;
        name: string;
        original_name: string;
    } | undefined;
    prev_rule: {
        id: string;
        name: string;
        original_name: string;
    } | undefined;
};

// export type Book = {
//     id: string;
//     title: string;
//     chapters: {
//       title: string;
//       sections: string[];
//     }[];
//   };
