import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "./query";
import Loader from "../../components/Loader";
import { LocationType } from "../../state";
import { ButtonStyle, TitleStyle } from "../../styled";
import { useNavigate } from "react-router";
import { formatTimestamp } from "../../utils/formatTimestamp";
import Error from "../../components/Error";
import Card from "../../components/Card";

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);

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
      setTotalPages(data?.locations.info.pages);
      setLocationData((prev) => [...prev, ...updatedResults] as []);
    }
  }, [data]);

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

  const renderLocations = () => {
    return locationData.map((item: LocationType, index: number) => (
      <Card
        data={{
          title: item.name,
          description: item.type,
          id: item.id,
        }}
        onClick={handleOnRowClick}
      />
    ));
  };

  const renderShowAll = () => {
    if (currentPage <= totalPages) {
      return (
        <div className="row show-all">
          <ButtonStyle onClick={updateCurrentPage}>Show Next</ButtonStyle>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <div className="row">
        <TitleStyle>Locations</TitleStyle>
      </div>
      <div className="row" style={{ opacity: loading ? 0.5 : 1 }}>
        {renderLocations()}
      </div>
      {loading ? <Loader /> : null}
      {totalPages ? renderShowAll() : null}
    </div>
  );
};
export default Locations;
