import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Tables from "./components/Tables";
import DrinkList from "./components/DrinkList";
import { Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [tables, setTables] = useState([]);

  const howManyTables = (numb) => {
    const numberOfTables = [];
    for (let i = 0; i < numb; i++) {
      numberOfTables.push(i);
    }
    setTables(numberOfTables);
  };

  useEffect(() => {
    howManyTables(10);
  }, []);

  const serveTable = (id, drinks) => {
    if (Number.isInteger(tables[id])) {
      tables.splice(id, 1, drinks);
    } else {
      const { espresso, cappuccino, tea } = drinks;

      tables[id] = {
        espresso: tables[id].espresso + espresso,
        cappuccino: tables[id].cappuccino + cappuccino,
        tea: tables[id].tea + tea,
      };
    }

    setTables(tables);
  };

  const clearTable = (index) => {
    tables.splice(index, 1, index);
    setTables([...tables]);
  };

  return (
    <Fragment>
      <Header />
      <Route path="/" exact>
        <Tables tables={tables} clearTable={clearTable} />
      </Route>
      <Route path="/drinks/:id">
        <DrinkList serveTable={serveTable} />
      </Route>
    </Fragment>
  );
}

export default App;
