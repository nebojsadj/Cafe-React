import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Tables from "./components/Tables";
import DrinkList from "./components/DrinkList";
import { initState } from "./components/initState";
import { Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [tables, setTables] = useState([]);

  const howManyTables = (numb) => {
    const numberOfTables = [];
    for (let i = 0; i < numb; i++) {
      numberOfTables.push(initState);
    }
    setTables(numberOfTables);
  };

  useEffect(() => {
    howManyTables(6);
  }, []);

  const serveTable = (id, drinks) => {
    tables.splice(id, 1, drinks);
    setTables(tables);
  };

  const clearTable = (index) => {
    tables.splice(index, 1, initState);
    setTables([...tables]);
  };

  return (
    <Fragment>
      <Header />
      <Route path="/" exact>
        <Tables tables={tables} clearTable={clearTable} />
      </Route>
      <Route path="/drinks/:id">
        <DrinkList tables={tables} serveTable={serveTable} />
      </Route>
    </Fragment>
  );
}

export default App;
