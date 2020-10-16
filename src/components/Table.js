import React from "react";
import { Link } from "react-router-dom";

function Table({ table, index, clearTable }) {
  const {
    espresso,
    cappuccino,
    tea,
    beer,
    redWine,
    whiteWine,
    tequila,
    whiskey,
    cola,
    wather,
  } = table;

  const prices = {
    espresso_$: 120,
    cappuccino_$: 140,
    tea_$: 90,
    beer_$: 140,
    redWine_$: 200,
    whiteWine_$: 180,
    tequila_$: 120,
    whiskey_$: 120,
    cola_$: 120,
    wather_$: 80,
  };

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
        {espresso * prices.espresso_$ +
          cappuccino * prices.cappuccino_$ +
          tea * prices.tea_$ +
          beer * prices.beer_$ +
          redWine * prices.redWine_$ +
          whiteWine * prices.whiteWine_$ +
          tequila * prices.tequila_$ +
          whiskey * prices.whiskey_$ +
          cola * prices.cola_$ +
          wather * prices.wather_$ || 0}
      </div>
      <Link to={"/drinks/" + index} className="btn btn-warning add">
        Order a drink
      </Link>
    </div>
  );
}

export default Table;
