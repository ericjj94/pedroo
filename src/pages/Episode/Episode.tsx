import { useNavigate, useParams } from "react-router";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import useOperations from "../../hooks/useOperations";
import { CharacterType } from "../../state";
import { MainSectionStyled, SmallButtonStyle, TitleStyle } from "../../styled";

const Episode = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [handlers, loading, data] = useOperations("episode", Number(params.id));

  if (loading) {
    return <Loader id="loading" />;
  }

  const handleClick = (selecetedCharacterId: number) => {
    navigate(`/characters/${selecetedCharacterId}`);
  };

  const renderCharacters = () => {
    return data.episode.characters.map((item: CharacterType, index: number) => (
      <Card
        key={index}
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
          <MainSectionStyled className="col-md-3">
            <div className="row">
              <TitleStyle>{data.episode.name}</TitleStyle>
            </div>
            <div className="row">
              <p id="air-date">Air Date: {data.episode.air_date}</p>
              <p id="episode">Episode: {data.episode.episode}</p>
            </div>
          </MainSectionStyled>
          <MainSectionStyled className="col-md-9">
            <div className="row" style={{ justifyContent: "flex-end", gap: "0.5rem" }}>
              <SmallButtonStyle
                onClick={() => {
                  handlers.edit(Number(params.id));
                }}
              >
                Edit
              </SmallButtonStyle>
              <SmallButtonStyle
                info="danger"
                onClick={() => {
                  handlers.delete(Number(params.id));
                }}
              >
                Delete
              </SmallButtonStyle>
            </div>
            <div className="row">
              <p>
                The following characters were part of the episode <b>{data.episode.name}</b>
              </p>
            </div>
            <div className="row">{renderCharacters()}</div>
          </MainSectionStyled>
        </div>
      </div>
    );
  }
  return null;
};
export default Episode;
