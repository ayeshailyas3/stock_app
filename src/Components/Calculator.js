import React, { useContext } from "react";
import { CalculatorContext } from "../Context/CalculatorContext";
import { StockContext } from "../Context/StockContext";

const Calculator = () => {
  const {
    sum,
    addSum,
    metersList,
    addNumToList,
    removeNumFromList,
    clearAll,
  } = useContext(CalculatorContext);

  const {
    addDatatoStock,
    totalStockA,
    setTotalStockA,
    totalStockB,
    setTotalStockB,
    addDatatoStockB,
  } = useContext(StockContext);

  const listValues = metersList.map((listItem) => {
    return (
      <li
        className="list-group-item"
        key={listItem.id}
        onClick={() => {
          removeNumFromList(listItem);
        }}
      >
        {listItem.num}
      </li>
    );
  });

  function alert(message) {
    document.getElementById("alert-msg").innerHTML = message; // set message text
    if (document.getElementById("alert").classList.contains("d-none"))
      document.getElementById("alert").classList.remove("d-none"); // Display alert-box
  }

  const closeAlert = () => {
    document.getElementById("alert").classList.add("d-none"); // hide alert-box
    document.getElementById("alert-msg").innerHTML = ""; // reset message
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("addButton").click();
    }
  };

  const handleButtonPress = () => {
    if (document.getElementById("number").value === "") {
      alert("Please Enter A Number");
      return;
    }
    const num = document.getElementById("number").value;
    addSum(num);
    addNumToList(num);
    document.getElementById("number").value = null;
  };

  const clearStuff = () => {
    clearAll();
    document.getElementById("date").value = "";
    document.getElementById("pageNumber").value = "";
    document.getElementById("incoming").checked = false;
  };

  const addToStockClickHandle = () => {
    if (sum === 0) {
      return;
    }
    if (window.confirm("Are you sure you want to add this data to Stock")) {
      // TODO add data to Stock
      const personName = document.getElementById("personName").value;
      const date = document.getElementById("date").value;
      const pageNum = document.getElementById("pageNumber").value;
      const type = document.getElementById("incoming").checked
        ? "Incoming"
        : "Outgoing";

      //console.log(date, pageNum, type)

      let pName = "";
      if (personName === "") {
        pName = "--";
      } else {
        pName = personName;
      }

      let stock = totalStockA;
      if (type === "Incoming") {
        stock = stock + sum;
        setTotalStockA(stock);
      } else {
        stock = stock - sum;
        setTotalStockA(stock);
      }
      // Stock A
      addDatatoStock(metersList, sum, pageNum, type, date, pName, stock);
      clearStuff();
      alert("Successfully Added ! ");
    }
  };

  const addToStockBClickHandle = () => {
    if (sum === 0) {
      return;
    }
    if (window.confirm("Are you sure you want to add this data to Stock")) {
      // TODO add data to Stock
      const personName = document.getElementById("personName").value;
      const date = document.getElementById("date").value;
      const pageNum = document.getElementById("pageNumber").value;
      const type = document.getElementById("incoming").checked
        ? "Incoming"
        : "Outgoing";

      //console.log(date, pageNum, type)

      let pName = "";
      if (personName === "") {
        pName = "--";
      } else {
        pName = personName;
      }

      let stock = totalStockB;
      if (type === "Incoming") {
        stock = stock + sum;
        setTotalStockB(stock);
      } else {
        stock = stock - sum;
        setTotalStockB(stock);
      }
      // Stock A
      addDatatoStockB(metersList, sum, pageNum, type, date, pName, stock);
      clearStuff();
      alert("Successfully Added ! ");
    }
  };

  return (
    <div className="tilebg">
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="form-group ">
              <label className="margtopmore">Meters:</label>
              <input
                type="number"
                className="form-control inpt"
                placeholder="Enter number"
                id="number"
                onKeyUp={handleEnterPress}
              />
              <div
                className="alert alert-danger clearfix d-none margtop"
                role="alert"
                id="alert"
              >
                <span id="alert-msg"></span>
                <button
                  type="button"
                  className="btn btn-sm btn-danger float-right"
                  onClick={closeAlert}
                >
                  X
                </button>
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleButtonPress}
              id="addButton"
            >
              ADD
            </button>
            <div className="card margtop width50">
              <div className="card-header">SUM</div>
              <div className="card-body">
                <h1>{sum}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="margtopmore">Page Number:</label>
                <input
                  type="number"
                  className="form-control inpt"
                  placeholder="Enter page number"
                  id="pageNumber"
                />
              </div>

              <div className="col">
                <label className="margtopmore">Name:</label>
                <input
                  type="text"
                  className="form-control w-60"
                  placeholder="Enter name"
                  id="personName"
                />
              </div>
            </div>
            <div className="form-check-inline margtop">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  id="incoming"
                />
                Incoming
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  id="outgoing"
                />
                Outgoing
              </label>
            </div>
            <br />
            <label className="margtop">Date:</label> <br />
            <input type="date" id="date" className=""></input>
            <br />
            <button
              className="btn btn-primary margtop"
              onClick={addToStockClickHandle}
              id="addListToStock"
            >
              ADD TO STOCK A !
            </button>
            <button
              className="btn btn-primary margtop ml-4"
              onClick={addToStockBClickHandle}
              id="addListToStock"
            >
              ADD TO STOCK B !
            </button>
          </div>

          <div className="col">
            <h2 className="margtop">List of meters added</h2>

            <ul className="list-group list-group-flush margtop">
              {listValues}
            </ul>

            <button className="btn btn-success margtop" onClick={clearStuff}>
              Clear ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
