import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Table from "./Table";

function Tables() {
  const state = useSelector((state) => state.tables);
  const tables = useSelector((state) => state.tables.tables);

  useEffect(() => {}, [state]);

  return (
    <Container fluid>
      <Row>
        {tables.map((table, index) => (
          <Col key={index}>
            <Table table={table} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tables;
