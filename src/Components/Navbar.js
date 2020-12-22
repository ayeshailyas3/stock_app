import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Shahtaj Gold
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link class="nav-link" to="/account">
            Accounts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/stocks">
            Stocks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/total-stock">
            Total Stock
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
