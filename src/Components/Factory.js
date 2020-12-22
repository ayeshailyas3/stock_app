import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FactoryContext } from "../Context/FactoryContext";

export const Factory = () => {
  const { selectFactory, factory, factoryTransactions } = useContext(
    FactoryContext
  );

  const { id } = useParams();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    selectFactory(id);
    setLoaded(true);
  }, [id]);

  const ret = factoryTransactions.map((item) => {
    return (
      <tr>
        <td>{item.date}</td>
        <td>{item.paid}</td>
        <td>{parseInt(item.totalBill) - parseInt(item.paid)}</td>
      </tr>
    );
  });

  const table = (
    <table className="table table-striped ">
      <thead className="thead-dark">
        <tr>
          <th>Date</th>
          <th>Paid</th>
          <th>Remaining</th>
        </tr>
      </thead>
      <tbody>{ret}</tbody>
    </table>
  );

  const retval = isLoaded ? (
    <div className="container">
      <div className="card">
        <div className="card-body text-center">
          <div>
            {" "}
            <img
              src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
              className="img-lg rounded-circle mb-4"
              alt="profile image"
            />
            <h4>{factory.name}</h4>
            <h5 className="text-muted">Total Balance:</h5>
            <h4>{factory.totalBal}</h4>
          </div>
        </div>
      </div>
      {table}
    </div>
  ) : (
    <h1>Loading</h1>
  );

  return <div>{retval}</div>;
};
