import React from "react";
import Table from "./Table";

function Tables({ tables, clearTable }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            {tables.map((table, index) => (
              <div className="col-4" key={index}>
                <Table table={table} index={index} clearTable={clearTable} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
