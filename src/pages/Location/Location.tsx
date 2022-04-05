import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import useOperations from "../../hooks/useOperations";
import { LocationType } from "../../state";
import { TitleStyle, ButtonStyle, MainSectionStyled, SmallButtonStyle } from "../../styled";
import { formatTimestamp } from "../../utils/formatTimestamp";

const size = 20;

const Location = () => {
  const navigate = useNavigate();

  const [showAll, setShowAll] = useState(false);
  const params = useParams();

  const [neighbours, setNeighbours] = useState([]);
  const [handlers, loading, data] = useOperations("location", Number(params.id));

  useEffect(() => {
    if (data?.location?.residents && data?.location?.residents.length) {
      const slicedArr = data?.location.residents.slice(0, size);
      setNeighbours(slicedArr);
    }
  }, [data]);

  if (loading) {
    return <Loader id="loading" />;
  }

  const handleCharactersClick = (selectedCharacterId: number) => {
    navigate(`/characters/${selectedCharacterId}`);
  };

  const handleShowAll = () => {
    setShowAll(true);
    setNeighbours(data.location.residents);
  };

  const renderResidents = () => {
    return neighbours.map((item: LocationType, index: number) => (
      <Card onClick={handleCharactersClick} key={index} image={item.image} data={{ title: item.name, id: item.id }} />
    ));
  };

  const renderShowAll = () => {
    if (!showAll && data.location.residents.length > 20) {
      return (
        <div className="row">
          <ButtonStyle onClick={handleShowAll}>Show All</ButtonStyle>
        </div>
      );
    }
    return null;
  };

  if (data?.location) {
    return (
      <div className="container mt-3">
        <div className="row">
          <MainSectionStyled className="col-md-3">
            <div className="row">
              <TitleStyle>{data.location.name}</TitleStyle>
              <p>The dimensions of this location are {data.location.dimension}</p>
              <p>
                This location is of type <b>{data.location.type}</b>
              </p>
              <p>
                This location has been available since <b>{formatTimestamp(data.location.created)}</b>
              </p>
            </div>
          </MainSectionStyled>
          <MainSectionStyled className="col-md-9">
            <div className="row" style={{ justifyContent: "flex-end", gap: "0.5rem" }}>
              <SmallButtonStyle
                onClick={() => {
                  handlers.edit(params.id);
                }}
              >
                Edit
              </SmallButtonStyle>
              <SmallButtonStyle
                info="danger"
                onClick={() => {
                  handlers.delete(params.id);
                }}
              >
                Delete
              </SmallButtonStyle>
            </div>
            <div className="row">
              <p>
                {data.location.name} has {data.location.residents.length} residents.
                {data.location.residents.length ? (
                  <span>
                    Following are the list of residents on {` `} {data.location.name}.{" "}
                  </span>
                ) : null}
              </p>
            </div>
            <div className="row">{renderResidents()}</div>
            {renderShowAll()}
          </MainSectionStyled>
        </div>
      </div>
    );
  }
  return null;
};
export default Location;
