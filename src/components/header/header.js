import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const logo = {
    textDecoration: "none",
    color: "black",

  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={logo}>
          Baiterek
        </Link>
      </div>
      <div className="links">
        <Link style={logo}>Проекты</Link>
        <Link to="/stocks" style={logo}>
          Акции
        </Link>
        <Link style={logo}>Способы покупки</Link>
        <Link style={logo}>Новости</Link>
      </div>
    </div>
  );
};

export default Header;
