import React from "react";
import { Link } from "react-router-dom";

function Table({ table, index, clearTable }) {
  const drinkPrices = {
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

  const suma = () => {
    const allList = [];
    let all;
    if (typeof table === "object") {
      const names = Object.values(table);
      const prices = Object.values(drinkPrices);

      for (let i = 0; i < names.length; i++) {
        allList.push(names[i] * prices[i]);
      }
    }
    if (allList.length > 0) {
      all = allList.reduce((a, b) => a + b);
    }
    return all;
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
      <div className="sum">{suma()}</div>
      <Link to={"/drinks/" + index} className="btn btn-warning add">
        Order a drink
      </Link>
    </div>
  );
}

export default Table;
