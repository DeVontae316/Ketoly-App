import React, { useContext } from 'react';
import { Provider } from '../context';

function CartTotal(props) {
    const { totalCartAmount } = useContext(Provider);
    return (
        <section className="cart-total">
            <div className="cart-total-amount">
                cart:{totalCartAmount} items
            </div>
        </section>
    );
}

export default CartTotal;