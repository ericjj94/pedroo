import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router";
import Card from "../../components/Card";
import { CharacterType } from "../../state";
import { TitleStyle } from "../../styled";
import { GET_EPISODE_BY_ID } from "./query";

const Episode = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      id: Number(params.id),
    },
  });

  const handleClick = (selecetedCharacterId: number) => {
    navigate(`/characters/${selecetedCharacterId}`);
  };

  const renderCharacters = () => {
    return data.episode.characters.map((item: CharacterType, index: number) => (
      <Card image={item.image} data={{ title: item.name, id: item.id }} onClick={handleClick} />
    ));
  };

  console.log("data", data);
  if (data && Object.keys(data.episode)) {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3" style={{ backgroundColor: "#F8F9FA", paddingTop: "1rem", paddingLeft: "1rem" }}>
            <div className="row">
              <TitleStyle>{data.episode.name}</TitleStyle>
            </div>
            <div className="row">
              <p>Air Date: {data.episode.air_date}</p>
              <p>Episode: {data.episode.episode}</p>
            </div>
          </div>
          <div className="col-md-9" style={{ backgroundColor: "#F8F9FA", paddingTop: "1rem", paddingLeft: "1rem" }}>
            <div className="row">
              <p>
                The following characters were part of the episode <b>{data.episode.name}</b>
              </p>
            </div>
            <div className="row">{renderCharacters()}</div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default Episode;
