import TableListClasses from "@/app/components/tables/TableListClasses";
import { pb } from "@/app/lib";
import { Class } from "@/app/types";
export async function generateStaticParams() {
  return [];
}

export default async function Page() {
  const classes: Class[] = await pb
    .collection("Class")
    .getFullList({ expand: "rarity,source_id,type" });
  return (
    <div className="overflow-x-auto w-full">
      <h1>Class</h1>

      <TableListClasses data={classes} />
    </div>
  );
}
