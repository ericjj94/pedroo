import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Row, Col } from "reactstrap";
import { GET_ALL_CHARACTERS } from "./query";
import DataTable from "../../components/Table/Table";

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Species",
    accessor: "species",
  },
  {
    accessor: "origin.name",
    Header: "Origin",
  },
  {
    accessor: "location.name",
    Header: "Location",
  },
];

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: page + 1,
    },
    // skip: page % 2 !== 0,
  });

  useEffect(() => {
    if (data?.characters?.results.length) {
      setCharactersData((prev) => [...prev, ...data.characters.results] as []);
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
          <h2>Characters</h2>
        </Row>
      </Col>
      <Col sm={12}>
        <DataTable columns={columns} data={charactersData} page={page} handlePageChange={handlePageChange} />
      </Col>
    </Col>
  );
};
export default Characters;
