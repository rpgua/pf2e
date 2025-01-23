import TableListBackgrounds from "@/app/components/tables/TableListBackgrounds";
import { pb } from "@/app/lib";
import { Background } from "@/app/types";
// export async function generateStaticParams() {
//   return [];
// }

export default async function Page() {
  const backgrounds: Background[] = await pb.collection("Background").getFullList({expand:'rarity,source_id,type'});
  return (
    <div className="overflow-x-auto w-full">
      <h1>Backgrounds</h1>
      <TableListBackgrounds data={backgrounds}/>
    </div>
  );
}
