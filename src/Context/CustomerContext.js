import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CustomerContext = createContext();

export const CustomerContextProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  const [customer, setCustomer] = useState(null);

  const [tempCustomerforEditing, setTemp] = useState(null);

  const [transactions, setTransactions] = useState([]);
  const [customerTransaction, setCustomerTransaction] = useState([]);

  const addTransacation = (customerID, date, totalBill, paid) => {
    setTransactions([
      ...transactions,
      {
        customerID,
        date,
        totalBill,
        paid,
      },
    ]);

    var objTest;

    const abc = customers.forEach((item) => {
      if (item.id == customerID) objTest = item;
    });

    console.log(objTest);

    const difference = totalBill - paid;
    objTest.totalBal = objTest.totalBal + difference;

    DeleteCustomer(objTest.id);
    setCustomers((item) => {
      return [...item, objTest];
    });
  };

  const addCustomer = (totalBal, name) => {
    const obj = {
      id: uuid(),
      totalBal,
      name,
    };
    setCustomers([...customers, obj]);
    //customers.sort((a, b) => a.name.localeCompare(b.name));
  };

  const DeleteCustomer = (id) => {
    setCustomers(customers.filter((item) => item.id !== id));
  };
  const selectCustomer = (id) => {
    const obj = customers.forEach((item) => {
      if (id == item.id)
        setCustomer((objj) => {
          return item;
        });
    });
    setCustomerTransaction((item) => {
      return [];
    });
    const custTra = transactions.forEach((item) => {
      if (id === item.customerID)
        setCustomerTransaction((current) => {
          return [...current, item];
        });
    });
  };

  return (
    <CustomerContext.Provider
      value={{
        customer,
        customers,
        addCustomer,
        selectCustomer,
        addTransacation,
        setCustomerTransaction,
        transactions,
        customerTransaction,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};
