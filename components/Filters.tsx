import React, { useRef, useState } from "react";
import classnames from "classnames";
import Sticky from "react-stickynode";
import { logEvent } from "../lib/analytics";

interface IProps {
  filters: IFilters;
  setFilters: (f: IFilters) => void;
}

export default (props: IProps) => {
  return (
    <>
      <div className="lg:hidden block">
        <MobileFilters {...props} />
      </div>
      <div
        id="filters"
        className="lg:block hidden w-3/12 bg-gray-100 border-t border-b"
      >
        <DesktopFilters {...props} />
      </div>
    </>
  );
};

const DesktopFilters = ({ filters, setFilters }: IProps) => {
  return (
    <Sticky
      enabled={true}
      top="#header"
      bottomBoundary="#filters"
      className="w-full"
    >
      <div className="py-8 px-4 font-monospace">
        <div className="font-bold pl-2">Filtres</div>
        {Object.keys(filters)
          .sort()
          .map((k) => (
            <div
              className={classnames(
                "cursor-pointer p-2 my-2 rounded-full whitespace-no-wrap text-sm block",
                {
                  "bg-accent-500 text-white hover:bg-accent-400": filters[k],
                  "text-gray-600 hover:text-gray-800": !filters[k],
                }
              )}
              key={k}
              onClick={() => {
                setFilters({ ...filters, [k]: !filters[k] });
                if (!filters[k]) {
                  // we're activating the filter
                  logEvent("filterClick", k);
                }
              }}
            >
              {k}
            </div>
          ))}
      </div>
    </Sticky>
  );
};

const MobileFilters = ({ filters, setFilters }: IProps) => {
  return (
    <Sticky enabled={true} top="#header" className="z-50">
      <div className="w-full px-12 flex overflow-x-scroll lg:text-md text-sm bg-gray-100 border-t border-b shadow-md">
        {Object.keys(filters).map((k) => (
          <div
            className={classnames(
              "cursor-pointer m-2 p-2 rounded-full whitespace-no-wrap font-bold",
              {
                "bg-accent-500 text-white hover:bg-accent-400": filters[k],
                "text-gray-600 hover:text-gray-800": !filters[k],
              }
            )}
            key={k}
            onClick={() => {
              setFilters({ ...filters, [k]: !filters[k] });
              if (!filters[k]) {
                // we're activating the filter
                logEvent("filterClick", k);
              }
            }}
          >
            {k}
          </div>
        ))}
      </div>
      <style jsx global>{`
        .sticky-inner-wrapper {
          z-index: 50;
        }
      `}</style>
    </Sticky>
  );
};
