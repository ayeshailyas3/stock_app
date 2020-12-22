import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FactoryContext } from "../Context/FactoryContext";

export const AddNewFactory = () => {
  const { addFactory } = useContext(FactoryContext);
  const history = useHistory();

  const handleClick = () => {
    const name = document.getElementById("name").value;
    addFactory(name, 0);
    history.push("/account/FactoryAccounts");
  };

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="card">
          <div className="card-body text-center">
            <div>
              {" "}
              <img
                src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                className="img-lg rounded-circle mb-4"
                alt="profile image"
              />
            </div>
            <h3>New Factory</h3>
            <div className="form-group margtopmore">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Factory Name"
                id="name"
              />
            </div>
            <button className="btn btn-dark" onClick={handleClick}>
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
