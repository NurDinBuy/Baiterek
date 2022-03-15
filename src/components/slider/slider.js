import React from 'react';
import bank1 from './images/банк2.jpg'
import bank2 from './images/банк2.jpg'
import bank3 from './images/банк2.jpg'
import bank4 from './images/банк2.jpg'
import './slider.css'
import right from '../images/right.svg'
import left from '../images/leftr.svg'

const Slider = () => {
    return (
        <div className="slider">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={bank1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={bank2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={bank3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={bank4} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                    <span><img className="leftArrow" src={left}/></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                    <span><img className="rightArrow" src={right}/></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
};

export default Slider;