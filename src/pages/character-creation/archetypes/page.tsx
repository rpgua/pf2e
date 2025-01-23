import TableListArchetypes from "@/app/components/tables/TableListArchetypes";
import { pb } from "@/app/lib";
import { Archetype } from "@/app/types";
export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  const archetypes: Archetype[] = await pb
    .collection("Archetype")
    .getFullList({ expand: "rarity,source_id,type" });
  return (
    <div className="overflow-x-auto w-full">
      <h1>Archetypes</h1>
      <TableListArchetypes data={archetypes} />
    </div>
  );
}
