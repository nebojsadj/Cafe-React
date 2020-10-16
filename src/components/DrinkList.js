import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

function DrinkList(props) {
  const [drinks, setDrinks] = useState({
    espresso: 0,
    cappuccino: 0,
    tea: 0,
    beer: 0,
    redWine: 0,
    whiteWine: 0,
    tequila: 0,
    whiskey: 0,
    cola: 0,
    wather: 0,
  });

  const serve = () => {
    const tableId = parseInt(props.match.params.id);
    props.serveTable(tableId, drinks);
    props.history.push("/");
  };

  const tableDrinks = () => {
    const arr = [];
    let i = 0;
    for (const prop in drinks) {
      arr.push(
        <tr key={i++}>
          <td>{`${prop} ${drinks[prop]}`}</td>
          <td>
            <button
              disabled={drinks[prop] === 0}
              onClick={() => setDrinks({ ...drinks, [prop]: drinks[prop] - 1 })}
              className="btn btn-info btn-sm"
            >
              -
            </button>
          </td>
          <td>
            <button
              onClick={() => setDrinks({ ...drinks, [prop]: drinks[prop] + 1 })}
              className="btn btn-info btn-sm"
            >
              +
            </button>
          </td>
        </tr>
      );
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
                <tbody>{tableDrinks()}</tbody>
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
