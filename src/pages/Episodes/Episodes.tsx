import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Row, Col } from "reactstrap";
import { GET_ALL_EPISODES } from "./query";
import DataTable from "../../components/Table/Table";
import { NameStyle } from "../../styled";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: (props: any) => {
      return <NameStyle>{props.value}</NameStyle>;
    },
  },
  {
    Header: "Episode",
    accessor: "episode",
  },
  {
    Header: "Air date",
    accessor: "air_date",
  },
];

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: page + 1,
    },
  });

  console.log("data", data?.episodes.results);

  useEffect(() => {
    if (data?.episodes?.results.length) {
      setEpisodesData((prev) => [...prev, ...data.episodes.results] as []);
    }
  }, [data]);

  if (loading) {
    return <div>isloading</div>;
  }

  const handlePageChange = (type: string) => {
    if (type === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <Col className="container">
      <Col sm={12}>
        <Row>
          <h2>Episodes</h2>
        </Row>
      </Col>
      <Col sm={12}></Col>
    </Col>
  );
};
export default Episodes;
