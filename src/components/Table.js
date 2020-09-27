import React from "react";
import { Link, useHistory } from "react-router-dom";

function Table({ table, index, clearTable }) {
  const history = useHistory();

  let sum =
    table.espresso * table.espressoPrice +
    table.cappuccino * table.cappuccinoPrice +
    table.tea * table.teaPrice;

  const clear = () => {
    clearTable(table);
    setTimeout(function () {
      history.push("/");
    }, 2400);
  };
  return (
    <div className="tab">
      <Link
        to="/cleaning"
        onClick={clear}
        className="btn btn-danger btn-sm mt-2"
      >
        Clear table
      </Link>
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
