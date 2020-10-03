import React from "react";
import Table from "./Table";

function Tables({ state, sendId, clearTable }) {
  let tables = state.map((table, index) => (
    <div className="col-6" key={index}>
      <Table
        table={table}
        index={index}
        sendId={sendId}
        clearTable={clearTable}
      />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">{tables}</div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
