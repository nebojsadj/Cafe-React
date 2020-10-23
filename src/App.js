import React, { Fragment } from "react";
import { numberOfTables, initState } from "./components/redux/initState";
import Header from "./components/Header";
import Tables from "./components/Tables";
import DrinkList from "./components/DrinkList";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { load_tables } from "./components/redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    numberOfTables(3);
    dispatch(load_tables(initState.tables));
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Route path="/" exact>
        <Tables />
      </Route>
      <Route path="/drinks/:id">
        <DrinkList />
      </Route>
    </Fragment>
  );
}

export default App;
