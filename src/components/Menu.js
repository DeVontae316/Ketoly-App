import React, { useContext, useState } from 'react';
import { Provider } from '../context';
import { menu } from '../data';
import SearchBar from './SearchBar';




function Menu(props) {

    const {
        data,
        modal,
        setModal,
        setModalDescription,
        setModalPrice,
        setModalImage,
        setModalId,
        modalId,
        cartItems,

    } = useContext(Provider);

    const position = modal ? "menu-container-modal" : "menu-container";

    const handleNutrition = (index) => {
        setModalPrice(menu[index].price);
        setModalImage(menu[index].img);
        setModalDescription(menu[index].description);
        setModalId(menu[index].id);

        setModal(true);

    }


    return (
        <section className={position}>

            <div className="menu-title">
                <h2>Menu</h2>
                <SearchBar />
            </div>

            <div className="menu-items">
                {data.map((item, index) => {

                    return console.log(index + ' index') || (
                        <div key={item.id} className="menu-item">
                            <div className="img-menu-wrapper">
                                <img className="menu-img" src={item.img} alt="" />
                            </div>
                            <div className="titles-container">
                                <div className="title-price-container">
                                    <h2>{item.title}</h2>
                                    <p className="price">{item.price}</p>
                                </div>

                                <p className="description">{item.description}</p>
                                <button onClick={() => handleNutrition(index)} className="menu-btn" >nutrition facts</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Menu;