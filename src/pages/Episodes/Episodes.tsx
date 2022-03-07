import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "./query";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader";
import { TitleStyle } from "../../styled";
import { useNavigate } from "react-router";

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
    },
  });

  useEffect(() => {
    if (data?.episodes?.results.length) {
      setEpisodesData((prev) => [...prev, ...data?.episodes?.results] as []);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  const updateCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleOnRowClick = (selectedCharacterId: number) => {
    navigate(`/episodes/${selectedCharacterId}`);
  };

  return (
    <div className="container">
      <div className="row">
        <TitleStyle>Episodes</TitleStyle>
      </div>
      <div className="row">
        <Table
          id="episodes-table"
          columnData={[
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
            {
              id: "action",
              name: "Action",
              enableSort: true,
            },
          ]}
          rows={episodesData}
          page={page}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          setPage={setPage}
          updateCurrentPage={updateCurrentPage}
          handleOnRowClick={handleOnRowClick}
        />
      </div>
    </div>
  );
};
export default Episodes;
