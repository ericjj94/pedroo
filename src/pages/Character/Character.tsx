import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { EpisodeType } from "../../state";
import { ProfileImage, TitleStyle, ButtonStyle } from "../../styled";
import { GET_CHARACTER } from "./query";

const size = 20;

const Character = () => {
  const [showAll, setShowAll] = useState(false);
  const [characterEpisodes, setCharacterEpisodes] = useState([]);
  const params = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: Number(params.id),
    },
  });

  useEffect(() => {
    if (data?.character?.episode && data?.character?.episode.length) {
      const slicedArr = data?.character.episode.slice(0, size);
      setCharacterEpisodes(slicedArr);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  const renderEpisodes = () => {
    return characterEpisodes.map((item: EpisodeType, index: number) => (
      <Card key={index} title={item.name} description={`The episode was aired on ${item.air_date}`} />
    ));
  };

  const handleShowAll = () => {
    setShowAll(true);
    setCharacterEpisodes(data.character.episode);
  };

  if (data?.character) {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3" style={{ backgroundColor: "#F8F9FA", paddingTop: "1rem", paddingLeft: "1rem" }}>
            <div className="row">
              <ProfileImage src={data.character.image} alt="profile"></ProfileImage>
            </div>
            <div className="row">
              <TitleStyle>{data.character.name}</TitleStyle>
              <p>{data.character.species}</p>
              <p>
                Lives in <b>{data.character.location.name}</b>
              </p>
              <p>{data.character.status}</p>
            </div>
          </div>
          <div className="col-md-9" style={{ backgroundColor: "#F8F9FA" }}>
            <div className="row">
              <p>
                {data.character.name} was a part of {data.character.episode.length} episodes. His information has been
                available since {` `} {new Date(data.character.created).toDateString()}. Following are the list of
                episodes {` `} {data.character.name} played a part.
              </p>
            </div>
            <div className="row">{renderEpisodes()}</div>
            {!showAll && data.character.episode.length > 20 ? (
              <div className="row">
                <ButtonStyle onClick={handleShowAll}>Show All</ButtonStyle>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default Character;
