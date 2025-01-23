import TableListSkills from "@/app/components/tables/TableListSkills";
import { pb } from "@/app/lib";
import { Skill } from "@/app/types";
export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  const skills: Skill[] = await pb
    .collection("Skill")
    .getFullList({ expand: "rarity,source_id,type" });
  return (
    <div className="overflow-x-auto w-full">
      <h1>Skills</h1>
      <TableListSkills data={skills} />
    </div>
  );
}
