import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const FactoryContext = createContext();

export const FactoryContextProvider = (props) => {
  const [factories, setFactories] = useState([]);
  const [factory, setFactory] = useState([]);

  const [allFactoryTransactions, setAllTransactions] = useState([]);
  const [factoryTransactions, setSingleTransactions] = useState([]);

  const addFactoryTransacation = (id, date, totalBill, paid) => {
    setAllTransactions([
      ...factoryTransactions,
      {
        id,
        date,
        totalBill,
        paid,
      },
    ]);

    var objTest;

    const abc = factories.forEach((item) => {
      if (item.id == id) objTest = item;
    });

    console.log(objTest);

    const difference = totalBill - paid;
    objTest.totalBal = objTest.totalBal + difference;

    delFactory(objTest.id);
    setFactories((item) => {
      return [...item, objTest];
    });
  };

  const addFactory = (name, totalBal) => {
    setFactories([
      ...factories,
      {
        id: uuid(),
        name,
        totalBal,
      },
    ]);
  };

  const delFactory = (id) => {
    setFactories(factories.filter((item) => item.id !== id));
  };

  const selectFactory = (id) => {
    const obj = factories.forEach((item) => {
      if (id == item.id)
        setFactory((obj) => {
          return item;
        });
    });
    setSingleTransactions((item) => {
      return [];
    });
    const custTra = allFactoryTransactions.forEach((item) => {
      if (id === item.id)
        setSingleTransactions((current) => {
          return [...current, item];
        });
    });
  };

  return (
    <FactoryContext.Provider
      value={{
        factories,
        factory,
        factoryTransactions,
        addFactoryTransacation,
        addFactory,
        selectFactory,
      }}
    >
      {props.children}
    </FactoryContext.Provider>
  );
};
