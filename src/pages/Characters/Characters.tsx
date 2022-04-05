import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./query";
import { CharacterType } from "../../state";
import Loader from "../../components/Loader";
import { ButtonStyle, TitleStyle } from "../../styled";
import { useNavigate } from "react-router";
import Error from "../../components/Error";
import Card from "../../components/Card";

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage,
    },
  });

  const updateCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (data?.characters?.results.length) {
      const updatedData = data?.characters?.results.map((item: CharacterType) => {
        return {
          ...item,
          location: item?.location?.name,
          origin: item?.origin?.name,
        };
      });
      setTotalPages(data.characters.info.pages);
      setCharactersData((prev) => [...prev, ...updatedData] as []);
    }
  }, [data]);

  const onErrorButtonClick = () => {
    setCurrentPage(1);
  };

  if (error) {
    return <Error onButtonClick={onErrorButtonClick} />;
  }

  const handleOnRowClick = (selectedCharacterId: number) => {
    navigate(`/characters/${selectedCharacterId}`);
  };

  const renderCharacters = () => {
    return charactersData.map((item: CharacterType, index: number) => (
      <Card
        key={index}
        data={{ title: item.name, description: item.status, id: item.id }}
        image={item.image}
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
        <TitleStyle>Characters</TitleStyle>
      </div>
      <div className="row" style={{ opacity: loading ? 0.5 : 1 }}>
        {renderCharacters()}
      </div>
      {loading ? <Loader /> : null}
      {totalPages ? renderShowAll() : null}
    </div>
  );
};
export default Characters;
