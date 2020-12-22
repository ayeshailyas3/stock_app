import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { StockA } from "./StockA";
import { StockB } from "./StockB";

const Stocks = () => {
  return (
    <div className="tilebg margtop">
      <div className="container ">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Link
              to="/stocks/stockA"
              type="button"
              className="btn btn-dark con bts"
            >
              Stock A
            </Link>
          </div>

          <div className="col d-flex justify-content-center ">
            <Link
              to="/stocks/stockB"
              type="button"
              className="btn btn-dark con bts"
            >
              Stock B
            </Link>
          </div>
        </div>
        <div className="mt-4"></div>
        <Switch>
          <Route path="/stocks/stockA" component={StockA}></Route>
          <Route path="/stocks/stockB" component={StockB}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Stocks;
