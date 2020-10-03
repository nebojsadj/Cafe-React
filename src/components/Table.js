import React from "react";
import { Link } from "react-router-dom";

function Table({ table, index, clearTable }) {
  let sum =
    table.espresso * table.espressoPrice +
    table.cappuccino * table.cappuccinoPrice +
    table.tea * table.teaPrice;

  return (
    <div className="tab">
      <button
        onClick={() => clearTable(table)}
        className="btn btn-danger btn-sm mt-2"
      >
        Clear table
      </button>
      <h3 className="mt-2">{`Table ${index + 1}`}</h3>
      <div className="holder">
        <ul>
          <li>{table.espresso > 0 && `Espresso * ${table.espresso}`}</li>
          <li>{table.cappuccino > 0 && `Cappuccino * ${table.cappuccino}`}</li>
          <li>{table.tea > 0 && `Tea * ${table.tea}`}</li>
        </ul>
      </div>
      <div className="sum">{sum}</div>
      <Link to={"/drinks/" + table.id} className="btn btn-warning add">
        Order a drink
      </Link>
    </div>
  );
}

export default Table;
