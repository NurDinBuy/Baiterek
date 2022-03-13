import React from "react";
import "./stocks.css";
import { Link } from "react-router-dom";

const Stocks = () => {
  return (
    <div className="container">
      <div className="cards">
        <Link to="/details" className="card"></Link>
        {/* <div className="card"></div> */}
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Stocks;
