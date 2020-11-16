import React, { useEffect, useState } from "react";
import { sortBy } from "lodash";
import Card from "./Card";

interface IProps {
  records: IRecord[];
}

export default (props: IProps) => {
  const [sorted, setSorted] = useState([]);
  console.log(sorted);
  useEffect(() => {
    if (sorted.length !== props.records.length) {
      const tempSorted = sortBy(props.records, [
        (r) => {
          if (typeof window !== "undefined") {
            return -+!!window.localStorage.getItem(r.id);
          }
        },
        (r) => -r.Likes,
      ]);

      setSorted(tempSorted);
    }
  }, [props.records]);

  return (
    <div className="w-full bg-gray-200 py-6 border-t border-b shadow-inner">
      <div className="p-6 max-w-11/12 mx-auto justify-center">
        <h1 className="font-bold text-2xl pb-6">Tous les jeux</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {sorted.map((r) => (
            <Card key={r.id} record={r} />
          ))}
        </div>
      </div>
    </div>
  );
};
