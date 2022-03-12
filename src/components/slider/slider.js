import React, {useState, useEffect} from 'react';
import bank1 from './images/банк2.jpg'
import bank2 from './images/банк2.jpg'
import bank3 from './images/банк2.jpg'
import bank4 from './images/банк2.jpg'
import './slider.css'

const Slider = () => {
    const img = [
        <img className='img' key={bank1} src={bank1} />,
        <img className='img' key={bank2} src={bank2} />,
        <img className='img' key={bank3} src={bank3} />,
        <img className='img' key={bank4} src={bank4} />,
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 7000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                 key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                 key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                 key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )
};

export default Slider;