import { useTranslations } from "@i18n/utils";
import collections from "./collections";
import type { Feat, Skill } from "../types";

const t = useTranslations();

type PFS = "Standard" | "Limited" | "Restricted";
type PFSItem = {
    name: string;
    class: string;
    description: string;
}

export const getPFS = (pfs: PFS | string | undefined): PFSItem | null => {

    switch (pfs) {
        case "Standard":
            return { name: t("pfs.standard.name"), class: "badge badge-xs font-bold badge-neutral size-4 p-0", description: t("pfs.standard.description") };
        case "Limited":
            return { name: t("pfs.limited.name"), class: "badge badge-xs font-bold badge-warning size-4 p-0", description: t("pfs.limited.description") };
        case "Restricted":
            return { name: t("pfs.restricted.name"), class: "badge badge-xs font-bold badge-error size-4 p-0", description: t("pfs.restricted.description") };
        default:
            return null;
    }
}

export const getSpeed = (speed: { [key: string]: number | null }) => {
    return Object.entries(speed).map(([type, value]) => {
        if (value !== null)
            return [t(`speed.${type}`), value];
    }).filter((item) => item !== undefined);
}

export const getAttributeModifiers = (attributeModifiers: { [key: string]: number | null }) => {
    return Object.entries(attributeModifiers).map(([type, value]) => {
        if (value !== null)
            return [t(`attribute.${type}`), value];
    }).filter((item) => item !== undefined);
}

export const getActionIcons = (actions: number): string => {
    switch (actions) {
        case 0:

            return "[free-action]"
        case 1:

            return "[one-action]"
        case 2:

            return "[two-actions]"
        case 3:

            return "[three-actions]"
        case 4:

            return "[reaction]"

        default:
            return "";
    }
}

export const getLanguages = (languages: string[] | null) => {
    if (languages === null)
        return [];
    const langs = collections.language

    const result = languages.map((language) => {
        const lang = langs.find((lang) => lang.data.name === language);
        if (lang) {
            return [lang.id, lang.data.name];
        }
        return [null, language];
    });
    return result;
}

type Curriculum = {
    "0": string[],
    "1": string[],
    "2": string[],
    "3": string[],
    "4": string[],
    "5": string[],
    "6": string[],
    "7": string[],
    "8": string[],
    "9": string[],
    "initial": string,
    "advanced": string
}

export const getCurriculum = (curriculum: Curriculum) => {
    const dbSpells = collections.spell;
    const result: [string, [string | null, string][]][] = [];
    Object.entries(curriculum).forEach(([level, spells]) => {
        if (Array.isArray(spells)) {
            const subSpells: [string | null, string][] = [];
            spells.forEach((s) => {
                const spell = dbSpells.find((spell) => spell.data.name === s);
                if (spell) {
                    subSpells.push([spell.id, spell.data.name]);
                } else if (s) {
                    subSpells.push([null, s])
                }
            });
            result.push([level, subSpells]);
        } else {
            const spell = dbSpells.find((spell) => spell.data.name === spells);
            console.log(spell)
            if (spell) {
                result.push([level, [spell.id, spell.data.name]]);
            }
        }
    });
    console.log(result);
    return result;
}

export const getFeat = (featId: number): Feat | null => {
    try {
        const dbFeats = collections.feat;
        const feat = dbFeats.filter((feat) => feat.data.id === featId);
        console.log(featId)
        console.log(feat)
        return feat[0].data as Feat;
    } catch (error) {
        return null
    }

}

export const getSkill = (skillId: number): Skill | null => {
    try {
        const dbSkills = collections.skill;
        const skill = dbSkills.filter((skill) => skill.data.id === skillId);
        return skill[0].data as Skill;
    } catch (error) {
        return null
    }
}