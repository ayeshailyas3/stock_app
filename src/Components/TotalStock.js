import React, { useContext } from "react";
import { StockContext } from "../Context/StockContext";

export const TotalStock = () => {
  const {
    totalStockA,
    totalStockB,
    setTotalStockA,
    setTotalStockB,
  } = useContext(StockContext);

  const changeStockA = () => {
    const val = document.getElementById("resetStockA").value;
    const num = parseInt(val);
    if (
      window.confirm(
        `Are you really sure you want to update Stock to ${val}? It will affect all the data that you enter`
      )
    ) {
      setTotalStockA(num);
    } else {
      document.getElementById("resetStockA").value = "";
      return;
    }
    document.getElementById("resetStockA").value = "";
  };

  const changeStockB = () => {
    const val = document.getElementById("resetStockB").value;
    const num = parseInt(val);
    if (
      window.confirm(
        `Are you really sure you want to update Stock to ${val}? It will affect all the data that you enter`
      )
    ) {
      setTotalStockB(num);
    } else {
      document.getElementById("resetStockB").value = "";
      return;
    }
    document.getElementById("resetStockB").value = "";
  };

  return (
    <div className="tilebg">
      <div className="container">
        <div className="row p-4">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card mt-5 ">
              <div className="card bg-primary text-white">
                <h1 className="text-center">Total Stock A:</h1>
                <h1 className="text-center">{totalStockA}</h1>
              </div>
              <input
                type="text"
                id="resetStockA"
                className="margtop form-control"
                placeholder="Enter a value to reset"
              ></input>
              <button className="btn-primary btn" onClick={changeStockA}>
                RESET!{" "}
              </button>
            </div>

            <div className="card mt-5 ">
              <div className="card bg-danger text-white">
                <h1 className="text-center">Total Stock B:</h1>
                <h1 className="text-center">{totalStockB}</h1>
              </div>
              <input
                id="resetStockB"
                type="text"
                className="margtop form-control"
                placeholder="Enter a value to reset"
              ></input>
              <button className="btn-danger btn" onClick={changeStockB}>
                RESET!{" "}
              </button>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
