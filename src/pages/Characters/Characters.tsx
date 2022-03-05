import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./query";
import PaginationTable from "../../components/Table/Table";
import { CharacterType } from "../../state";

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: page + 1,
    },
    skip: page % 3 !== 0,
  });

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

  if (loading && page === 0) {
    return <div>isloading</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <h2>Characters</h2>
      </div>
      <div className="row">
        <PaginationTable
          columnData={[
            {
              id: "name",
              name: "Name",
              enableSort: true,
              align: "center",
            },
            {
              id: "gender",
              name: "Gender",
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
            {
              id: "Action",
              name: "Action",
              enableSort: true,
              align: "center",
            },
          ]}
          rows={charactersData}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default Characters;
