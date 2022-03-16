import React, {useState} from 'react';
import './saleDetails.css'
import gora from '../images/saleImg.svg'





const SaleDetails = () => {
    const [show, setShow] = useState('')
    const [show2, setShow2] = useState('')
    const [show3, setShow3] = useState('')
    const [show4, setShow4] = useState('')

    const showModal1 = () => {
        setShow('show')
    }
    const showModal2 = () => {
        setShow2('show')
    }
    const showModal3 = () => {
        setShow3('show')
    }
    const showModal4 = () => {
        setShow4('show')
    }
    const hightModal1 = () => {
        setShow('')
    }
    const hightModal2 = () => {
        setShow2('')
    }
    const hightModal3 = () => {
        setShow3('')
    }
    const hightModal4 = () => {
        setShow4('')
    }

    return (
        <div className='sale'>
            <h1>Объекты в продаже</h1>
            <div className="sale_all">
                <div className="sale_items">
                    <div className="sale_item">
                        <div className="sale-cards"
                             onMouseOut={() => {
                                 hightModal1()
                             }} onMouseOver={() => {
                            showModal1()
                        }}>
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Akjol Village</h3>
                                <p>Роскошный город на окраине Города</p>
                                <span>Премиум</span>
                            </div>
                            <div className={`modal-card ${show}`}>
                                <h3>Akjol Village</h3>
                                <div>
                                    <p>1 ком 35m2 ____________ 16700$</p>
                                    <p>2 ком 48m2 ____________ 22000$</p>
                                    <p>3 ком 60m2 ____________ 35000$</p>
                                    <p>4 ком 96m2 _______ 49000$ 96m2</p>
                                </div>
                                <button>Смотреть</button>
                            </div>
                        </div>
                    </div>

                    <div className="sale_item">
                        <div className="sale-cards" onMouseOut={() => {
                            hightModal2()
                        }} onMouseOver={() => {
                            showModal2()
                        }}>
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Oscon Ordo</h3>
                                <p>Живи в гармонии</p>
                                <span>Премиум</span>
                            </div>
                            <div className={`modal-card ${show2}`}>
                                <h3>Akjol Village</h3>
                                <div>
                                    <p>1 ком 35m2 ____________ 16700$</p>
                                    <p>2 ком 48m2 ____________ 22000$</p>
                                    <p>3 ком 60m2 ____________ 35000$</p>
                                    <p>4 ком 96m2 _______ 49000$ 96m2</p>
                                </div>
                                <button>Смотреть</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sale_items2">
                    <div className="sale_item">
                        <div className="sale-cards" onMouseOut={() => {
                            hightModal3()
                        }} onMouseOver={() => {
                            showModal3()
                        }}>
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Birimdik</h3>
                                <p>Живи в гармонии</p>
                                <span>Премиум</span>
                            </div>
                            <div className={`modal-card ${show3}`}>
                                <h3>Akjol Village</h3>
                                <div>
                                    <p>1 ком 35m2 ____________ 16700$</p>
                                    <p>2 ком 48m2 ____________ 22000$</p>
                                    <p>3 ком 60m2 ____________ 35000$</p>
                                    <p>4 ком 96m2 _______ 49000$ 96m2</p>
                                </div>
                                <button>Смотреть</button>
                            </div>
                        </div>
                    </div>
                    <div className="sale_item">
                        <div className="sale-cards" onMouseOut={() => {
                            hightModal4()
                        }} onMouseOver={() => {
                            showModal4()
                        }}>
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Oscon Ordo</h3>
                                <p>Живи в гармонии</p>
                                <span>Премиум</span>
                            </div>
                            <div className={`modal-card ${show4}`}>
                                <h3>Akjol Village</h3>
                                <div>
                                    <p>1 ком 35m2 ____________ 16700$</p>
                                    <p>2 ком 48m2 ____________ 22000$</p>
                                    <p>3 ком 60m2 ____________ 35000$</p>
                                    <p>4 ком 96m2 _______ 49000$ 96m2</p>
                                </div>
                                <button>Смотреть</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleDetails;

