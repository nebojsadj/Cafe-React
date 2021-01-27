import React from "react";
import { Link } from "react-router-dom";
import { drinkPrices } from "../redux/initState";
import { useDispatch } from "react-redux";
import { clean_table } from "../redux/actions";
import { Col } from "react-bootstrap";

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
    <Col
      md={{ span: 12, offset: 0 }}
      xs={{ span: 10, offset: 1 }}
      className="tab mx-auto mb-5"
    >
      <button
        onClick={() => dispatch(clean_table(index))}
        className="btn btn-danger btn-sm mt-2"
      >
        Clear table
      </button>
      <h3 className="text-dark mt-2">{`Table ${index + 1}`}</h3>
      <div className="holder">
        <ul>
          {Object.entries(table).map(
            (el, i) => el[1] > 0 && <li key={i}>{`${el[0]} * ${el[1]}`}</li>
          )}
        </ul>
      </div>
      <div className="sum bg-dark text-light">{sum()}</div>
      <Link to={"/drinks/" + index} className="btn btn-danger add">
        Order a drink
      </Link>
    </Col>
  );
}

export default Table;
