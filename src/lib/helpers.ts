import { useTranslations } from "@i18n/utils";

const lang = "en";

const t = useTranslations(lang);

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

export const getSpeed = (speed: any): string => {
    return Object.entries(speed).map(([type, value]) => {
        if (value !== null)
            return `${t(`speed.${type}`)} ─ ${value} ${t("speed.unit")}`;
    }).join(", ");
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