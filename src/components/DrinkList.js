import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

function DrinkList(props) {
  const [table, setTable] = useState({
    id: parseInt(props.match.params.id),
    espresso: 0,
    espressoPrice: 120,
    cappuccino: 0,
    cappuccinoPrice: 140,
    tea: 0,
    teaPrice: 90,
  });

  const { espresso, cappuccino, tea } = table;
  const serve = () => {
    props.serveTable(table);
    props.history.push("/");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <h2 className="text-center">Drink list</h2>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>Drinks</th>
                    <th>less</th>
                    <th>more</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`Espresso ${espresso}`}</td>
                    <td>
                      <button
                        disabled={espresso === 0}
                        onClick={() =>
                          setTable({ ...table, espresso: espresso - 1 })
                        }
                        className="btn btn-info btn-sm"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          setTable({ ...table, espresso: espresso + 1 })
                        }
                        className="btn btn-info btn-sm"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>{`Cappuccino ${cappuccino}`}</td>
                    <td>
                      <button
                        disabled={cappuccino === 0}
                        onClick={() =>
                          setTable({ ...table, cappuccino: cappuccino - 1 })
                        }
                        className="btn btn-info btn-sm"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          setTable({ ...table, cappuccino: cappuccino + 1 })
                        }
                        className="btn btn-info btn-sm"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>{`Tea ${tea}`}</td>
                    <td>
                      <button
                        disabled={tea === 0}
                        onClick={() => setTable({ ...table, tea: tea - 1 })}
                        className="btn btn-info btn-sm"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => setTable({ ...table, tea: tea + 1 })}
                        className="btn btn-info btn-sm"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={serve}
                className="btn btn-primary float-right mt-5 mr-5"
              >
                Confirm
              </button>
              <br />
              <Link to="/" className="btn btn-warning float-left mt-4 ml-5">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DrinkList);
