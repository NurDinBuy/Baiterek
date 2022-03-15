import React from 'react';
import bank1 from './images/банк2.jpg'
import bank2 from './images/банк2.jpg'
import bank3 from './images/банк2.jpg'
import bank4 from './images/банк2.jpg'
import './slider.css'
import right from '../slider/images/right.png'
import left from '../slider/images/left.png'

const Slider = () => {
    return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
                <img src={bank1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" >
                <img src={bank2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" >
                <img src={bank3} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item" >
                <img src={bank4} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"><img className="leftArrow" src={left} /></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><img className="rightArrow" src={right} /></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
};

export default Slider;