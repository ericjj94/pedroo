import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "./query";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader";
import { LocationType } from "../../state";
import { TitleStyle } from "../../styled";
import { useNavigate } from "react-router";
import { formatTimestamp } from "../../utils/formatTimestamp";
import Error from "../../components/Error";

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS, {
    variables: {
      page: currentPage,
    },
  });

  useEffect(() => {
    if (data?.locations?.results.length) {
      const updatedResults = data?.locations?.results.map((item: LocationType) => ({
        ...item,
        id: item.id,
        created: formatTimestamp(item.created),
      }));
      setLocationData((prev) => [...prev, ...updatedResults] as []);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  const onErrorButtonClick = () => {
    setPage(0);
    setCurrentPage(1);
  };

  if (error) {
    return <Error onButtonClick={onErrorButtonClick} />;
  }

  const updateCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleOnRowClick = (selectedCharacterId: number) => {
    navigate(`/locations/${selectedCharacterId}`);
  };

  return (
    <div className="container">
      <div className="row">
        <TitleStyle>Locations</TitleStyle>
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
          setRowsPerPage={setRowsPerPage}
          rowsPerPage={rowsPerPage}
          updateCurrentPage={updateCurrentPage}
          handleOnRowClick={handleOnRowClick}
        />
      </div>
    </div>
  );
};
export default Locations;
