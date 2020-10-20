import React from "react";
import { Link } from "react-router-dom";

const prices = {
  espresso_price: 120,
  cappuccino_price: 140,
  tea_price: 90,
  beer_price: 140,
  redWine_price: 200,
  whiteWine_price: 180,
  tequila_price: 120,
  whiskey_price: 120,
  cola_price: 120,
  wather_price: 80,
};

function Table({ table, index, clearTable }) {
  const servedDrinks = () => {
    const arr = [];
    for (const prop in table) {
      table[prop] > 0 && arr.push(`${prop} * ${table[prop]}`);
    }
    return arr;
  };

  const sum = () => {
    const allList = [];
    const name = Object.values(table);
    const price = Object.values(prices);

    for (let i = 0; i < name.length; i++) {
      allList.push(name[i] * price[i]);
    }
    return allList.reduce((a, b) => a + b);
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
        <ul>
          {servedDrinks().map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="sum">{sum()}</div>
      <Link to={"/drinks/" + index} className="btn btn-warning add">
        Order a drink
      </Link>
    </div>
  );
}

export default Table;
