import React from "react";
import Table from "./Table";

function Tables({ tables, clearTable }) {
  // const sum = () => {
  //   for (const key in tables) {
  //     if (tables.hasOwnProperty(key) > 0) {
  //       const element = tables[key];
  //       console.log(element);
  //     }
  //   }
  // };

  // sum();
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
