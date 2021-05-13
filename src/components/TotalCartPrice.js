import React, { useContext, useEffect } from 'react';
import { Provider } from '../context';

function TotalCartPrice() {
    const { totalPrice, cartItems, CartTotalPrice } = useContext(Provider);
    useEffect(() => {
        console.log("cart total hit")
        CartTotalPrice();
    }, [cartItems])

    return (
        <section className="total">
            <div className="total-container">
                <h2> total price:${totalPrice}.00</h2>


            </div>
        </section>
    );
}

export default TotalCartPrice;