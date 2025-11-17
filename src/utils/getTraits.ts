import type { BaseItem } from "../types";

export default function getTraits(item: BaseItem): string[] {
  const rarities = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    unique: "Unique",
  };

  const rarity = rarities[item.rarity as keyof typeof rarities];

  const totalTraits = [
    rarity,
    ...(item.traits?.filter((trait) => trait !== rarity) || []),
  ];
  return totalTraits;
}
