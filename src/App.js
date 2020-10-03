import React, { useState } from "react";
import Header from "./components/Header";
import Tables from "./components/Tables";
import DrinkList from "./components/DrinkList";
import { Route } from "react-router-dom";
import Cleaning from "./components/Cleaning";

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      espresso: 0,
      espressoPrice: 120,
      cappuccino: 0,
      cappuccinoPrice: 140,
      tea: 0,
      teaPrice: 90,
    },
    {
      id: 2,
      espresso: 0,
      espressoPrice: 120,
      cappuccino: 0,
      cappuccinoPrice: 140,
      tea: 0,
      teaPrice: 90,
    },
    {
      id: 3,
      espresso: 0,
      espressoPrice: 120,
      cappuccino: 0,
      cappuccinoPrice: 140,
      tea: 0,
      teaPrice: 90,
    },
    {
      id: 4,
      espresso: 0,
      espressoPrice: 120,
      cappuccino: 0,
      cappuccinoPrice: 140,
      tea: 0,
      teaPrice: 90,
    },
  ]);

  const serveTable = (table, tabId) => {
    let index = state.map((el) => el.id).indexOf(parseInt(tabId));
    let filtered = state.filter((el) => el.id === parseInt(tabId))[0];
    console.log(filtered);
    console.log(table);
    state[index] = {
      ...filtered,
      espresso: filtered.espresso + table.espresso,
      cappuccino: filtered.cappuccino + table.cappuccino,
      tea: filtered.tea + table.tea,
    };
    setState(state);
  };

  const clearTable = (table) => {
    let index = state.map((el) => el.id).indexOf(table.id);
    state[index] = { ...state[index], espresso: 0, cappuccino: 0, tea: 0 };
    setState(state);
    console.log(state[index]);
  };

  return (
    <div>
      <Header />
      <Route path="/" exact>
        <Tables state={state} clearTable={clearTable} />
      </Route>
      <Route path="/drinks/:id">
        <DrinkList serveTable={serveTable} />
      </Route>
      <Route path="/cleaning">
        <Cleaning />
      </Route>
    </div>
  );
}

export default App;
