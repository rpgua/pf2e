export interface BaseItem  {
    id: number,
    aon: string,
    name: string,
    original_name: string,
    rulebook_id: number,
    page_number: number,
    category: string,
    remaster_id?: number,
    legacy_id?: number
    rarity: string,
    content: string,
    pfs?: boolean
    traits?: string,
}

export interface Action extends BaseItem {
    "actions": number,
    "frequency": string,
    "triggers": string,
    "critical_success"?: string,
    "success"?: string,
    "failure"?: string,
    "critical_failure"?: string,
    "content": string,
    "requirements"?: string,
}

export interface AnimalCompanion extends BaseItem{
    "size": string,
    "attacks": string,
    "attribute_modifiers": {
        strength: string | null,
        dexterity: string | null,
        constitution: string | null,
        intelligence: string | null,
        wisdom: string | null,
        charisma: string | null
    },
    "hp": string,
    "skill": string,
    "senses": string,
    "speed": {
        ground: string | null,
        burrow: string | null,
        swim: string | null,
        fly: string | null,
        climb: string | null
    },
    "special": string,
    "support_benefit": string,
    "advanced_maneuver": string
}

export interface Apparition  extends BaseItem{
    "skill": string,
    "senses": string,
    "spell": string
}

export interface ArcaneSchool extends BaseItem {
    "curriculum": {
        0: string | null,
        1: string | null,
        2: string | null,
        3: string | null,
        4: string | null,
        5: string | null,
        6: string | null,
        7: string | null,
        8: string | null,
        9: string | null,
        initial: string | null,
        advanced: string | null
    }
}

export type ArcaneThesis = BaseItem 

export interface Archeinterface  {
    "prerequisite"?: string,
    "feats"?: string[],
}

export interface Armor  {
    "attributes": {
        level: string,
        strength: string,
        price: string,
        ac: string,
        dex: string,
        speed: number,
        check_penalty: number,
        bulk: string,
        category: string,
        group: string
    }
}

export type Article = BaseItem

export type Trait = BaseItem