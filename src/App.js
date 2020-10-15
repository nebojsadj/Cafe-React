import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Tables from "./components/Tables";
import DrinkList from "./components/DrinkList";
import { Route } from "react-router-dom";

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      espresso: 0,
      cappuccino: 0,
      tea: 0,
    },
    {
      id: 2,
      espresso: 0,
      cappuccino: 0,
      tea: 0,
    },
    {
      id: 3,
      espresso: 0,
      cappuccino: 0,
      tea: 0,
    },
    {
      id: 4,
      espresso: 0,
      cappuccino: 0,
      tea: 0,
    },
  ]);

  const serveTable = (table) => {
    const index = state.map((el) => el.id).indexOf(table.id);
    const filtered = state.filter((el) => el.id === table.id)[0];
    const { espresso, cappuccino, tea } = filtered;

    state[index] = {
      ...filtered,
      espresso: espresso + table.espresso,
      cappuccino: cappuccino + table.cappuccino,
      tea: tea + table.tea,
    };
    setState([...state]);
  };

  const clearTable = (index) => {
    state[index] = { ...state[index], espresso: 0, cappuccino: 0, tea: 0 };
    setState([...state]);
  };

  return (
    <Fragment>
      <Header />
      <Route path="/" exact>
        <Tables state={state} clearTable={clearTable} />
      </Route>
      <Route path="/drinks/:id">
        <DrinkList serveTable={serveTable} />
      </Route>
    </Fragment>
  );
}

export default App;
