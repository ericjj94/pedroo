import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "./query";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader";
import { LocationType } from "../../state";
import { TitleStyle } from "../../styled";

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS, {
    variables: {
      page: page + 1,
    },
    skip: page % 3 !== 0,
  });

  useEffect(() => {
    if (data?.locations?.results.length) {
      // TODO: change the any type to location specific
      const updatedResults = data?.locations?.results.map((item: LocationType) => ({
        ...item,
        created: new Date(item.created).toDateString(),
      }));
      setLocationData((prev) => [...prev, ...updatedResults] as []);
    }
  }, [data]);

  if (loading && page === 0) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row">
        <TitleStyle>Locations</TitleStyle>
      </div>
      <div className="row">
        <Table
          columnData={[
            {
              id: "name",
              name: "Name",
              enableSort: true,
              align: "center",
            },
            {
              id: "type",
              name: "Type",
              enableSort: true,
              align: "center",
            },
            {
              id: "dimension",
              name: "Dimension",
              enableSort: true,
              align: "center",
            },
            {
              id: "created",
              name: "Created",
              enableSort: true,
              align: "center",
            },
          ]}
          rows={locationData}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default Locations;
