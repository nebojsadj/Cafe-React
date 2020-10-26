import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { to_serve } from "./redux/actions";

function DrinkList(props) {
  const tables = useSelector((state) => state.tables.tables);
  const dispatch = useDispatch();
  const [drinks, setDrinks] = useState({});
  const index = props.match.params.id;

  useEffect(() => {
    setDrinks(tables[index]);
  }, [index, tables]);

  const serve = () => {
    dispatch(to_serve(index, drinks));
    props.history.push("/");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <h2 className="text-center">Drink list</h2>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>Drinks</th>
                    <th>less</th>
                    <th>more</th>
                  </tr>
                </thead>
                <tbody>
                  {drinks &&
                    Object.entries(drinks).map((el, index) => (
                      <tr key={index}>
                        <td>{`${el[0]} ${el[1]}`}</td>
                        <td>
                          <button
                            disabled={el[1] === 0}
                            onClick={() =>
                              setDrinks({ ...drinks, [el[0]]: [el[1]] - 1 })
                            }
                            className="btn btn-info btn-sm"
                          >
                            -
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              setDrinks({
                                ...drinks,
                                [el[0]]: parseInt([el[1]]) + 1,
                              })
                            }
                            className="btn btn-info btn-sm"
                          >
                            +
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <button
                onClick={serve}
                className="btn btn-primary float-right mt-5 mr-5"
              >
                Confirm
              </button>
              <br />
              <Link to="/" className="btn btn-warning float-left mt-4 ml-5">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DrinkList);
