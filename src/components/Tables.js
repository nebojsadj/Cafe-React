import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import Table from "./Table";

function Tables() {
  const state = useSelector((state) => state.tables);
  const tables = useSelector((state) => state.tables.tables);

  useEffect(() => {
 
  }, [state])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {tables.map((table, index) => (
              <div className="col-4" key={index}>
                <Table table={table} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
