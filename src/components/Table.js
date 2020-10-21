import React from "react";
import { Link } from "react-router-dom";
import { drinkPrices } from "./initState";

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
    const names = Object.values(table);
    const prices = Object.values(drinkPrices);
    for (let i = 0; i < names.length; i++) {
      allList.push(names[i] * prices[i]);
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
