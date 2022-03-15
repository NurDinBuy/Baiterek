import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

import logo from '../images/logoBaiterek.svg'
import phoneSVG from '../images/saleImg.svg'
import str from '../images/strlk.svg'

const Header = () => {

    return (
        <div className="header">

            <div className="logo">
                <Link  className="link" to="/" ><img src={logo}/></Link>
            </div>

            <div className="links">
                <Link  className="link" >Проекты</Link>
                <Link className="link" to="/stocks">Акции</Link>
                <Link className="link" >Способы покупки <img className='str' src={str}/></Link>
                <Link className="link" >Новости</Link>
            </div>
            <div className="phone">
                <img src={phoneSVG}/>
                444
            </div>
        </div>
    );
};

export default Header;
