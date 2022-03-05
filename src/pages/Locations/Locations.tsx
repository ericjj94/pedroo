import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Row, Col } from "reactstrap";
import { GET_ALL_LOCATIONS } from "./query";
import DataTable from "../../components/Table/Table";
import { NameStyle } from "../../styled";

const Locations = () => {
  const [locationData, setLocationData] = useState([]);
  const [page, setPage] = useState(0);

  const handleRedirection = (props: any) => {
    console.log("props", props);
  };

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props: any) => {
        return (
          <NameStyle
            onClick={() => {
              handleRedirection(props);
            }}
          >
            {props.value}
          </NameStyle>
        );
      },
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Dimension",
      accessor: "dimension",
    },
    {
      Header: "Action",
    },
  ];

  const { loading, error, data } = useQuery(GET_ALL_LOCATIONS, {
    variables: {
      page: page + 1,
    },
  });

  useEffect(() => {
    if (data?.locations?.results.length) {
      setLocationData((prev) => [...prev, ...data.locations.results] as []);
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
          <h2>Locations</h2>
        </Row>
      </Col>
      <Col sm={12}>
        <DataTable columns={columns} data={locationData} page={page} handlePageChange={handlePageChange} />
      </Col>
    </Col>
  );
};
export default Locations;
