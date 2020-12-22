import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CustomerAccount from "./CustomerAccount";
import FactoryAccount from "./FactoryAccount";

const Accounts = (props) => {
  return (
    <div className="bg">
      <div className="container ">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Link
              to="/account/CustomerAccounts"
              type="button"
              className="btn btn-dark con bts"
            >
              Customer Accounts
            </Link>
          </div>

          <div className="col d-flex justify-content-center ">
            <Link
              to="/account/FactoryAccounts"
              type="button"
              className="btn btn-dark con bts"
            >
              Factory Accounts
            </Link>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/account/CustomerAccounts" component={CustomerAccount} />
        <Route path="/account/FactoryAccounts" component={FactoryAccount} />
      </Switch>
    </div>
  );
};
export default Accounts;
