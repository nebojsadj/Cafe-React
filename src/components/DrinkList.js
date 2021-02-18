import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { to_serve } from "../redux/actions";
import { Col, Container, Row, Table, Button } from "react-bootstrap";

function DrinkList(props) {
  const tables = useSelector((state) => state.tables.tables);
  const dispatch = useDispatch();
  const [drinks, setDrinks] = useState({});
  const index = props.match.params.id;
  console.log("INDEX", index);

  useEffect(() => {
    setDrinks(tables[index]);
  }, [index, tables]);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-light mb-2 h2Drink">Drink list</h2>
      <Row>
        <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
          <h5 className="text-center text-light">{`Table ${
            parseInt(index) + 1
          }`}</h5>
          <Table striped bordered hover variant="dark" className="thtb">
            <thead>
              <tr>
                <th>Drinks</th>
                <th>less</th>
                <th>more</th>
              </tr>
            </thead>
            <tbody>
              {drinks &&
                Object.entries(drinks).map((el, index) => (
                  <tr key={index}>
                    <td>{`${el[0]} ${el[1]}`}</td>
                    <td>
                      <Button
                        disabled={el[1] === 0}
                        onClick={() =>
                          setDrinks({ ...drinks, [el[0]]: [el[1]] - 1 })
                        }
                        className="btn-sm"
                      >
                        -
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() =>
                          setDrinks({
                            ...drinks,
                            [el[0]]: parseInt([el[1]]) + 1,
                          })
                        }
                        className="btn-sm"
                      >
                        +
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Link
            to="/"
            onClick={() => dispatch(to_serve(index, drinks))}
            className="btn btn-primary float-right mt-4 mr-5 mb-5"
          >
            Confirm
          </Link>
          <br />
          <Link to="/" className="btn btn-warning float-left ml-5 mb-5">
            Back
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(DrinkList);
