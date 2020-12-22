import React, { useContext } from "react";
import { FactoryContext } from "../Context/FactoryContext";
import { Link } from "react-router-dom";

const FactoryAccount = () => {
  const { factories } = useContext(FactoryContext);

  const retval =
    factories.length === 0 ? (
      <h1>No Data Found</h1>
    ) : (
      factories.map((item) => {
        const data =
          item.totalBal < 0 ? (
            <tr className="table-danger">
              <td>{item.name}</td>
              <td>{item.totalBal}</td>
              <td>
                <Link
                  to={`/Accounts/SingleFactory/${item.id}`}
                  className="btn btn-dark"
                >
                  View Details
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/Accounts/Transactions/${item.id}`,
                    state: { prevPath: window.location.pathname },
                  }}
                  className="btn btn-dark"
                >
                  Add Transaction
                </Link>
              </td>
            </tr>
          ) : (
            <tr className="table-info">
              <td>{item.name}</td>
              <td>{item.totalBal}</td>
              <td>
                <Link
                  to={`/Accounts/SingleFactory/${item.id}`}
                  className="btn btn-dark"
                >
                  View Details
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/Accounts/Transactions/${item.id}`,
                    state: { prevPath: window.location.pathname },
                  }}
                  className="btn btn-dark"
                >
                  Add Transaction
                </Link>
              </td>
            </tr>
          );
        return data;
      })
    );

  return (
    <div className="container con">
      <Link type="button" className="btn btn-dark mb-3" to="/Factories/AddNew">
        Add New Factory{" "}
      </Link>
      <table className="table table-hover ">
        <thead className="thead-dark">
          <tr>
            <th>Factory Name</th>
            <th>Total Balance</th>
            <th>*</th>
            <th>*</th>
          </tr>
        </thead>
        <tbody>{retval}</tbody>
      </table>
    </div>
  );
};

export default FactoryAccount;
