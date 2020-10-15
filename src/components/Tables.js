import React from "react";
import Table from "./Table";

function Tables({ state, prices, clearTable }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {state.map((table, index) => (
              <div className="col-6" key={index}>
                <Table
                  table={table}
                  prices={prices}
                  index={index}
                  clearTable={clearTable}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
