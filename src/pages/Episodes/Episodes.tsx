import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "./query";
import Loader from "../../components/Loader";
import { ButtonStyle, TitleStyle } from "../../styled";
import { useNavigate } from "react-router";
import { EpisodeType } from "../../state";
import Card from "../../components/Card";

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
    },
  });

  useEffect(() => {
    if (data?.episodes?.results.length) {
      setTotalPages(data.episodes.info.pages);
      setEpisodesData((prev) => [...prev, ...data?.episodes?.results] as []);
    }
  }, [data]);

  const updateCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleOnRowClick = (selectedCharacterId: number) => {
    navigate(`/episodes/${selectedCharacterId}`);
  };

  const renderEpisodes = () => {
    return episodesData.map((episode: EpisodeType, index: number) => (
      <Card
        data={{ title: episode.name, id: episode.id, description: episode.air_date }}
        key={index}
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
        <TitleStyle>Episodes</TitleStyle>
      </div>
      <div className="row" style={{ opacity: loading ? 0.5 : 1 }}>
        {renderEpisodes()}
      </div>
      {loading ? <Loader /> : null}
      {totalPages ? renderShowAll() : null}
    </div>
  );
};
export default Episodes;
