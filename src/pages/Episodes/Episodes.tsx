import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "./query";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader";

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: page + 1,
    },
    skip: page % 3 !== 0,
  });

  useEffect(() => {
    if (data?.episodes?.results.length) {
      setEpisodesData((prev) => [...prev, ...data?.episodes?.results] as []);
    }
  }, [data]);

  if (loading && page === 0) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row">
        <h2>Episodes</h2>
      </div>
      <div className="row">
        <Table
          columnData={[
            {
              id: "id",
              name: "SNo",
              enableSort: true,
              align: "center",
            },
            {
              id: "name",
              name: "Name",
              enableSort: true,
              align: "center",
            },
            {
              id: "air_date",
              name: "Air Date",
              enableSort: true,
              align: "center",
            },
            {
              id: "episode",
              name: "Episode",
              enableSort: true,
              align: "center",
            },
          ]}
          rows={episodesData}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default Episodes;
