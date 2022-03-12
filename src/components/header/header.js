import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/stocks">Акции</Link>
    </div>
  );
};

export default Header;
