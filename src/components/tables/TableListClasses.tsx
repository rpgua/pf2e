import RemasterBadge from "@/app/components/ui/RemasterBadge";
import { Class } from "@/app/types";
type Props = {
  data: Class[];
};
const TableListClasses = async ({ data }: Props) => {
  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Rarity</th>
          <th>Source</th>
          <th>Remaster</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.expand?.rarity.name}</td>
              <td>{item.expand?.source_id.name}</td>
              <td>
                <RemasterBadge remaster={item.expand?.source_id.remaster} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableListClasses;
