import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const StockContext = createContext();

const StockContextProvider = (props) => {
  const [StockData, setStockData] = useState([]);
  const [StockB, setStockB] = useState([]);
  const [totalStockA, setTotalStockA] = useState(0);
  const [totalStockB, setTotalStockB] = useState(0);

  const addDatatoStockB = (
    metersList,
    sum,
    pageNum,
    type,
    date,
    pName,
    stockBafterUpdate
  ) => {
    const obj = {
      id: uuid(),
      pageNum: pageNum,
      type: type,
      list: metersList,
      date: date,
      sum: sum,
      pName: pName,
      stockBafterUpdate: stockBafterUpdate,
    };
    setStockB([...StockB, obj]);
  };

  const addDatatoStock = (
    metersList,
    sum,
    pageNum,
    type,
    date,
    pName,
    stockAfterUpdate
  ) => {
    const obj = {
      id: uuid(),
      pageNum: pageNum,
      type: type,
      list: metersList,
      date: date,
      sum: sum,
      pName: pName,
      stockAfterUpdate: stockAfterUpdate,
    };

    setStockData([...StockData, obj]);
  };

  return (
    <StockContext.Provider
      value={{
        StockData,
        StockB,
        addDatatoStock,
        addDatatoStockB,
        totalStockA,
        totalStockB,
        setTotalStockA,
        setTotalStockB,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockContextProvider;
