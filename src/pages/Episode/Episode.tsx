import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { CharacterType } from "../../state";
import { SmallMainSectionStyled, TitleStyle } from "../../styled";
import { GET_EPISODE_BY_ID } from "./query";

const Episode = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      id: Number(params.id),
    },
  });

  if (loading) {
    return <Loader />;
  }

  const handleClick = (selecetedCharacterId: number) => {
    navigate(`/characters/${selecetedCharacterId}`);
  };

  const renderCharacters = () => {
    return data.episode.characters.map((item: CharacterType, index: number) => (
      <Card
        image={item.image}
        data={{ title: item.name, id: item.id, description: item.status }}
        onClick={handleClick}
      />
    ));
  };

  if (data && Object.keys(data.episode)) {
    return (
      <div className="container mt-3">
        <div className="row">
          <SmallMainSectionStyled className="col-md-3">
            <div className="row">
              <TitleStyle>{data.episode.name}</TitleStyle>
            </div>
            <div className="row">
              <p>Air Date: {data.episode.air_date}</p>
              <p>Episode: {data.episode.episode}</p>
            </div>
          </SmallMainSectionStyled>
          <SmallMainSectionStyled className="col-md-9">
            <div className="row">
              <p>
                The following characters were part of the episode <b>{data.episode.name}</b>
              </p>
            </div>
            <div className="row">{renderCharacters()}</div>
          </SmallMainSectionStyled>
        </div>
      </div>
    );
  }
  return null;
};
export default Episode;
