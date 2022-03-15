import React from 'react';
import './saleDetails.css'
import gora from '../images/saleImg.svg'


const SaleDetails = () => {

    const showModal = () => {
        let modalCard = document.querySelector('.modal-card')
        modalCard.classList.add('show')
    }

    const hightModal = () => {
        let modalCard = document.querySelector('.modal-card')
        modalCard.classList.remove('show')
    }


    return (
        <div className='sale'>
            <h1>Объекты в продаже</h1>
            <div className="sale_all">
                <div className="sale_items">
                    <div className="sale_item">
                        <div className="sale-cards"
                             onMouseOut={() => {
                            hightModal()
                        }} onMouseOver={() => {
                            showModal()
                        }}>
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Akjol Village</h3>
                                <p>Роскошный город на окраине Города</p>
                                <span>Премиум</span>
                            </div>
                            <div className="modal-card">
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
                        <div className="sale-cards">
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Oscon Ordo</h3>
                                <p>Живи в гармонии</p>
                                <span>Премиум</span>
                            </div>
                            {/*<div className="modal-card">*/}
                            {/*    <h3>Akjol Village</h3>*/}
                            {/*    <div>*/}
                            {/*        <p>1 ком 35m2 ____________ 16700$</p>*/}
                            {/*        <p>2 ком 48m2 ____________ 22000$</p>*/}
                            {/*        <p>3 ком 60m2 ____________ 35000$</p>*/}
                            {/*        <p>4 ком 96m2 _______ 49000$ 96m2</p>*/}
                            {/*    </div>*/}
                            {/*    <button>Смотреть</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="sale_items2">
                    <div className="sale_item">
                        <div className="sale-cards">
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Birimdik</h3>
                                <p>Живи в гармонии</p>
                                <span>Премиум</span>
                            </div>
                            {/*<div className="modal-card">*/}
                            {/*    <h3>Akjol Village</h3>*/}
                            {/*    <div>*/}
                            {/*        <p>1 ком 35m2 ____________ 16700$</p>*/}
                            {/*        <p>2 ком 48m2 ____________ 22000$</p>*/}
                            {/*        <p>3 ком 60m2 ____________ 35000$</p>*/}
                            {/*        <p>4 ком 96m2 _______ 49000$ 96m2</p>*/}
                            {/*    </div>*/}
                            {/*    <button>Смотреть</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="sale_item">
                        <div className="sale-cards">
                            <div className="left-card">
                                <img src={gora}/>
                            </div>
                            <div className="right-card">
                                <h3>Oscon Ordo</h3>
                                <p>Живи в гармонии</p>
                                <span>Премиум</span>
                            </div>
                            {/*<div className="modal-card">*/}
                            {/*    <h3>Akjol Village</h3>*/}
                            {/*    <div>*/}
                            {/*        <p>1 ком 35m2 ____________ 16700$</p>*/}
                            {/*        <p>2 ком 48m2 ____________ 22000$</p>*/}
                            {/*        <p>3 ком 60m2 ____________ 35000$</p>*/}
                            {/*        <p>4 ком 96m2 _______ 49000$ 96m2</p>*/}
                            {/*    </div>*/}
                            {/*    <button>Смотреть</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleDetails;

