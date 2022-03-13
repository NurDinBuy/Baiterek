import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StockDetails from "../stocks-details";

const StockRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/details" component={StockDetails}></Route>
      </div>
    </Router>
  );
};

export default StockRouter;
