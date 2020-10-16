import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

function DrinkList(props) {
  const [drinks, setDrinks] = useState({
    espresso: 0,
    cappuccino: 0,
    tea: 0,
  });

  const { espresso, cappuccino, tea } = drinks;

  const serve = () => {
    const tableId = parseInt(props.match.params.id);
    props.serveTable(tableId, drinks);
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
                          setDrinks({ ...drinks, espresso: espresso - 1 })
                        }
                        className="btn btn-info btn-sm"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          setDrinks({ ...drinks, espresso: espresso + 1 })
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
                          setDrinks({ ...drinks, cappuccino: cappuccino - 1 })
                        }
                        className="btn btn-info btn-sm"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          setDrinks({ ...drinks, cappuccino: cappuccino + 1 })
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
                        onClick={() => setDrinks({ ...drinks, tea: tea - 1 })}
                        className="btn btn-info btn-sm"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => setDrinks({ ...drinks, tea: tea + 1 })}
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
