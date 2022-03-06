import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { EpisodeType, LocationType } from "../../state";
import { ProfileImage, TitleStyle, ButtonStyle, SmallMainSectionStyled } from "../../styled";
import { GET_LOCATION_BY_ID } from "./query";

const size = 20;

const Character = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const params = useParams();

  const { loading, error, data } = useQuery(GET_LOCATION_BY_ID, {
    variables: {
      id: Number(params.id),
    },
  });

  if (loading) {
    return <Loader />;
  }

  const handleCharactersClick = (selectedEpisodeId: number) => {
    navigate(`/characters/${selectedEpisodeId}`);
  };

  const renderResidents = () => {
    return data.location.residents.map((item: LocationType, index: number) => (
      <Card onClick={handleCharactersClick} key={index} image={item.image} data={{ title: item.name, id: item.id }} />
    ));
  };

  if (data?.location) {
    return (
      <div className="container mt-3">
        <div className="row">
          <SmallMainSectionStyled className="col-md-3">
            <div className="row">
              <TitleStyle>{data.location.name}</TitleStyle>
              <p>{data.location.species}</p>
              <p>
                Lives in <b>{data.location.name}</b>
              </p>
              <p>{data.location.status}</p>
            </div>
          </SmallMainSectionStyled>
          <SmallMainSectionStyled className="col-md-9">
            <div className="row">
              <p>
                {data.location.name} has {data.location.residents.length} residents. Following are the list of residents
                on {` `} {data.location.name}.
              </p>
            </div>
            <div className="row">{renderResidents()}</div>
          </SmallMainSectionStyled>
        </div>
      </div>
    );
  }
  return null;
};
export default Character;
