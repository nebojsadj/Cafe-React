import React from "react";
import { Link } from "react-router-dom";

function Table({ table, index, clearTable }) {
  const { espresso, cappuccino, tea } = table;

  const prices = {
    espresso_$: 120,
    cappuccino_$: 140,
    tea_$: 90,
  };

  const { espresso_$, cappuccino_$, tea_$ } = prices;

  const servedDrinks = () => {
    const arr = [];
    for (const prop in table) {
      table[prop] > 0 && arr.push(`${prop} * ${table[prop]}`);
    }
    const array = arr.map((el, i) => <li key={i}>{el}</li>);
    return array;
  };

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
        <ul>{servedDrinks()}</ul>
      </div>
      <div className="sum">
        {espresso * espresso_$ + cappuccino * cappuccino_$ + tea * tea_$ || 0}
      </div>
      <Link to={"/drinks/" + index} className="btn btn-warning add">
        Order a drink
      </Link>
    </div>
  );
}

export default Table;
