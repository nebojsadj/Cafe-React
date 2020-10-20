import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useEffect } from "react";

function DrinkList(props) {
  const [drinks, setDrinks] = useState(null);
  useEffect(() => {
    setDrinks(props.tables[parseInt(props.match.params.id)]);
  }, [props.match.params.id]);

  const serve = () => {
    const tableId = parseInt(props.match.params.id);
    props.serveTable(tableId, drinks);
    props.history.push("/");
  };

  const tableDrinks = () => {
    const arr = [];
    for (const key in drinks) {
      arr.push({ key, value: parseInt(drinks[key]) });
    }
    return arr;
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
                  {tableDrinks().map((el, i) => (
                    <tr key={i}>
                      <td>{`${el.key} ${el.value}`}</td>
                      <td>
                        <button
                          disabled={el.value === 0}
                          onClick={() =>
                            setDrinks({ ...drinks, [el.key]: [el.value - 1] })
                          }
                          className="btn btn-info btn-sm"
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            setDrinks({ ...drinks, [el.key]: [el.value + 1] })
                          }
                          className="btn btn-info btn-sm"
                        >
                          +
                        </button>
                      </td>
                    </tr>
                  ))}
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
