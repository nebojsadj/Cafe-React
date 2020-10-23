import React from "react";
import { Link } from "react-router-dom";
import { drinkPrices } from "./redux/initState";
import { useDispatch } from "react-redux";
import { clean_table } from "./redux/actions";

function Table({ table, index }) {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(clean_table(index))}
        className="btn btn-danger btn-sm mt-2"
      >
        Clear table
      </button>
      <h3 className="mt-2">{`Table ${index + 1}`}</h3>
      <div className="holder">
        <ul>
          {Object.entries(table).map(
            (el, i) => el[1] > 0 && <li key={i}>{`${el[0]} * ${el[1]}`}</li>
          )}
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
