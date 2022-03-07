import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./query";
import Table from "../../components/Table/Table";
import { CharacterType } from "../../state";
import Loader from "../../components/Loader";
import { TitleStyle } from "../../styled";
import { useNavigate } from "react-router";

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage,
    },
  });

  const updateCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (data?.characters?.results.length) {
      const updatedData = data?.characters?.results.map((item: CharacterType) => {
        return {
          ...item,
          location: item?.location?.name,
          origin: item?.origin?.name,
        };
      });
      setCharactersData((prev) => [...prev, ...updatedData] as []);
    }
  }, [data]);

  if (loading) {
    return <Loader id="loading" />;
  }

  if (error) {
    return <div className="error">Unable to fetch data</div>;
  }

  const handleOnRowClick = (selectedCharacterId: number) => {
    navigate(`/characters/${selectedCharacterId}`);
  };

  return (
    <div className="container">
      <div className="row">
        <TitleStyle>Characters</TitleStyle>
      </div>
      <div className="row">
        <Table
          id="characters-table"
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
              id: "status",
              name: "Status",
              enableSort: true,
              align: "center",
            },
            {
              id: "species",
              name: "Species",
              enableSort: true,
              align: "center",
            },

            {
              id: "gender",
              name: "gender",
              enableSort: true,
              align: "center",
            },
            {
              id: "origin",
              name: "Origin",
              enableSort: true,
              align: "center",
            },
            {
              id: "location",
              name: "Location",
              enableSort: true,
              align: "center",
            },
          ]}
          rows={charactersData}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          updateCurrentPage={updateCurrentPage}
          handleOnRowClick={handleOnRowClick}
        />
      </div>
    </div>
  );
};
export default Characters;
