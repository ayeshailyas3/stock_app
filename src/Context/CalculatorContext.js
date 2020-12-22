import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CalculatorContext = createContext();

const CalculatorContextProvider = (props) => {
  const [sum, setSum] = useState(0);

  const addSum = (num) => {
    setSum(parseFloat(sum) + parseFloat(num));
    //console.log(sum);
  };
  const minusSum = (num) => {
    setSum(parseFloat(sum) - parseFloat(num));
    console.log(sum);
  };

  const [metersList, setMeterList] = useState([]);
  const addNumToList = (num) => {
    setMeterList([...metersList, { num, id: uuid() }]);
  };

  //  const [savedData, setSavedData] = useState([]);

  const removeNumFromList = (num) => {
    setMeterList(metersList.filter((meterList) => meterList.id !== num.id));
    minusSum(num.num);
  };

  const clearAll = () => {
    setSum(0);
    setMeterList([]);
  };

  return (
    <CalculatorContext.Provider
      value={{
        sum,
        addSum,
        metersList,
        addNumToList,
        removeNumFromList,
        clearAll,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
