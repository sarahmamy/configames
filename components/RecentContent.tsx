import React from "react";
import Card from "./Card";

export default ({ records }: { records: IRecord[] }) => {
  const recCopy = [...records];
  recCopy.sort(
    (a, b) =>
      new Date(b["Last modified time"]).getTime() -
      new Date(a["Last modified time"]).getTime()
  );
  const mostRecentThree = recCopy.slice(0, 3);
  return (
    <div className="w-full bg-gray-200 p-8 border-t border-b">
      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-2xl pb-6">Les contenus les + récents</h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {mostRecentThree.map(content => (
            <Card key={content.id} record={content} />
          ))}
        </div>
      </div>
    </div>
  );
};
