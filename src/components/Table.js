import React from "react";
import { Link } from "react-router-dom";

function Table({ table, index, clearTable }) {
  const {
    espresso,
    cappuccino,
    tea,
    espressoPrice,
    cappuccinoPrice,
    teaPrice,
    id,
  } = table;

  const sum =
    espresso * espressoPrice + cappuccino * cappuccinoPrice + tea * teaPrice;

  return (
    <div className="tab">
      <button
        onClick={() => clearTable(index)}
        className="btn btn-danger btn-sm mt-2"
      >
        Clear table
      </button>
      <h3 className="mt-2">{`Table ${index + 1}`}</h3>
      <div className="holder">
        <ul>
          <li>{espresso > 0 && `Espresso * ${espresso}`}</li>
          <li>{cappuccino > 0 && `Cappuccino * ${cappuccino}`}</li>
          <li>{tea > 0 && `Tea * ${tea}`}</li>
        </ul>
      </div>
      <div className="sum">{sum}</div>
      <Link to={"/drinks/" + id} className="btn btn-warning add">
        Order a drink
      </Link>
    </div>
  );
}

export default Table;
