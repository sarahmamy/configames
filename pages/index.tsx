import React, { useEffect, useState } from "react";
import getAllRecords from "../lib/getAllRecords";
import { GetStaticProps } from "next";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

import Meta from "../components/Meta";
import Explainer from "../components/Explainer";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import AddContent from "../components/AddContent";
import Filters from "../components/Filters";
import RecentContent from "../components/RecentContent";

interface IProps {
  records: Array<IRecord>;
}

const Index = (props: IProps) => {
  const [records, setRecords] = useState<IRecord[]>(props.records);
  const [filteredRecords, setFilteredRecords] = useState(props.records);
  const [filters, setFilters] = useState({} as IFilters);
  const { data } = useSWR("/api/content", fetcher);

  // set the records using the SWR data
  useEffect(() => {
    if (data?.records) {
      setRecords(data.records);
    }
  }, [data]);

  // set the filters depending on the records
  useEffect(() => {
    // collect all the themes and set them as unselected
    const themes = records.reduce((acc, rec) => {
      try {
        rec.Catégories.forEach((theme) => {
          acc[theme] = false;
        });
        return acc;
      } catch (error) {
        return acc;
      }
    }, {});

    setFilters({
      ...filters,
      ...themes,
    });
  }, [records.length]);

  // get all the filtered records depending on the filters
  useEffect(() => {
    const areAllFiltersOff =
      Object.values(filters).filter((e) => !!e).length === 0;

    if (areAllFiltersOff) {
      setFilteredRecords(records);
    } else {
      const filtered = records.filter((r) => {
        const t = r.Catégories.filter((t) => filters[t]).length;
        return t > 0;
      });
      setFilteredRecords(filtered);
    }
  }, [filters, records]);
  console.log(filteredRecords);
  return (
    <>
      <Meta />
      <Explainer />
      <div className="flex lg:flex-row flex-col">
        <Filters filters={filters} setFilters={setFilters} />
        <Cards records={filteredRecords} />
      </div>
      <div className="text-center p-4 pt-10 font-monospace text-gray-800">
        Une idée de jeu à ajouter à cette liste ?
      </div>
      <AddContent />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const records = await getAllRecords();
  return { props: { records } };
};

const fetcher = async (url) => {
  return fetch(url).then((res) => res.json());
};

export default Index;
