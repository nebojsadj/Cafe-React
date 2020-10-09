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
            <div className="col-6 offset-3">
              <button
                onClick={() =>
                  setTable({
                    ...table,
                    espresso: table.espresso + 1,
                  })
                }
                className="btn btn-primary form-control mt-2"
              >
                {`Espresso ${espresso}`}
              </button>
              <br />
              <button
                onClick={() =>
                  setTable({
                    ...table,
                    cappuccino: table.cappuccino + 1,
                  })
                }
                className="btn btn-primary form-control mt-2"
              >
                {`Cappuccino ${cappuccino}`}
              </button>
              <br />
              <button
                onClick={() =>
                  setTable({
                    ...table,
                    tea: table.tea + 1,
                  })
                }
                className="btn btn-primary form-control mt-2"
              >
                {`Tea ${tea}`}
              </button>
              <br />
              <button
                onClick={serve}
                className="btn btn-success form-control mt-4"
              >
                Submit
              </button>
              <br />
              <button
                onClick={() =>
                  setTable({ ...table, espresso: 0, cappuccino: 0, tea: 0 })
                }
                className="btn btn-warning form-control mt-4"
              >
                Clear
              </button>
              <br />
              <Link to="/" className="btn btn-info form-control mt-3">
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
