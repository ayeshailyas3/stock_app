import React, { useContext } from "react";

import { StockContext } from "../Context/StockContext";

export const StockB = () => {
  const { StockB } = useContext(StockContext);
  const retval =
    StockB.length === 0 ? (
      <h1>No Data Found</h1>
    ) : (
      StockB.map((item) => {
        const data =
          item.type === "Incoming" ? (
            <tr className="table-info">
              <td>{item.stockBafterUpdate}</td>
              <td>{item.sum}</td>
              <td>{item.pageNum}</td>
              <td>{item.date}</td>
              <td>{item.pName}</td>
              <td>{item.name}</td>
              <td className="mr-4">{item.type}</td>
            </tr>
          ) : (
            <tr className="table-danger">
              <td>{item.stockBafterUpdate}</td>
              <td>{item.sum}</td>
              <td>{item.pageNum}</td>
              <td>{item.date}</td>
              <td>{item.pName}</td>
              <td>{item.name}</td>
              <td className="mr-4">{item.type}</td>
            </tr>
          );

        return data;
      })
    );
  return (
    <table className="table table-hover ">
      <thead className="thead-dark">
        <tr>
          <th> Total Stock</th>
          <th>In/Out</th>
          <th>Page#</th>
          <th>Date</th>
          <th>Name</th>
          <th>*</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>{retval}</tbody>
    </table>
  );
};

//console.log( 15 + 16 + 19)

// const x = 15+16+19
// cosnole.log(x)
