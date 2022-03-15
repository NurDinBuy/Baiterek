import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className="header">

            <div className="logo">
                <Link  className="link" to="/" >Baiterek</Link>
            </div>

            <div className="links">
                <Link  className="link" >Проекты</Link>
                <Link className="link" to="/stocks">Акции</Link>
                <Link className="link" >Способы покупки</Link>
                <Link className="link" >Новости</Link>
            </div>
        </div>
    );
};

export default Header;
