"use client";

import { Class } from "@/app/types";
import { useEffect, useState } from "react";
import { pb } from "../../lib";

type Props = {
  slug: string;
};

const ClassPage = ({ slug }: Props) => {
  const [_class, setClass] = useState<Class>();
  useEffect(() => {
    const getClass = async () => {
      const data = await pb
        .collection("Class")
        .getFirstListItem(`original_name="${slug}"`,
            {
                expand: 'attribute,pfs,source_id,rarity,traits,type,tradition'
            }
        );
      setClass(data as unknown as Class);
    };
    getClass();
  }, [slug]);

  return (
    <div>
      <h1>{slug}</h1>
      <ul className="menu">
        <li>{_class?.name}</li>
        <li>id: {_class?.id}</li>
        <li>
          attack_proficiency:
          <ul>
            {_class?.attack_proficiency.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </li>
        <li>
          defense_proficiency:
          <ul>
            {_class?.defense_proficiency.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </li>
        <ul>perception_proficiency:
          {_class?.perception_proficiency.map((i)=> (
            <li key={i.id}>{i.name}</li>
          ))}
           </ul>
        <ul>fortitude_proficiency:
           {_class?.fortitude_proficiency.map((i)=> (
            <li key={i.id}>{i.name}</li>
           ))}
           </ul>
        <ul>reflex_proficiency:
           {_class?.reflex_proficiency.map((i)=> (
            <li key={i.id}>{i.name}</li>
           ))}
           </ul>
        <ul>will_proficiency:
           {_class?.will_proficiency.map((i)=> (
            <li key={i.id}>{i.name}</li>
           ))}
           </ul>
        <li>
          skill_proficiency:
          <ul>
            {_class?.skill_proficiency.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </li>
        <li>
          attribute:
          <ul>
            {_class?.expand?.attribute.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </li>
        <li>hp: {_class?.hp}</li>
        <li>name: {_class?.name}</li>
        <li>original_name: {_class?.original_name}</li>
        <li>pfs: {_class?.expand?.pfs.name}</li>
        <li>source_id: {_class?.expand?.source_id.name}</li>
        <li>rarity: {_class?.expand?.rarity.name}</li>
        <li>
          traits:
          <ul>
            {_class?.expand?.traits?.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </li>
        <li>type: {_class?.expand?.type.name}</li>
        <li>
          tradition:
          <ul>
            {_class?.expand?.tradition?.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </li>
        <li>content:<div className="prose" dangerouslySetInnerHTML={{__html: _class?.content || ''}}></div></li>
        <li>legacy: {_class?.source_id.remaster}</li>
      </ul>
    </div>
  );
};

export default ClassPage;
