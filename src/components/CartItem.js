import React, { useContext } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Provider } from '../context';
import { menu } from '../data';
function CartItem() {
    const {
        modalId,
        cartItem,
        cartItems,
        addCartTotalItem,
        decreaseCartTotalItem,
        deleteCartItem,
        clearCart,

    } = useContext(Provider);

    const handleAdd = (id) => {
        console.log(id + ' id revealed');
        addCartTotalItem(id)
    }
    const handleDecrease = (index) => {
        console.log(index + ' index revealed')
        decreaseCartTotalItem(index)
    }

    const handleClick = () => console.log("testing click....")

    return (
        <div className="cart-container">
            <div className="cart">

                <h1 style={{ color: "#f2a22c" }}>Cart Items</h1>
                {modalId && cartItems.map((item, index) => {
                    const currentItemId = item.id;
                    return console.log(cartItems) || (
                        <section className="cart-item" key={item.id}>
                            <img className="cart-item-img" src={item.img} alt="" />
                            <div className="cart-titles">
                                <h3>{item.title}</h3>
                                <div className="subtitle">
                                    <p >{item.subTitle} </p>
                                </div>
                                <button style={{
                                    background: "none",
                                    border: "none",
                                    color: "#f2a22c"
                                }} onClick={() => {
                                    deleteCartItem(currentItemId);
                                    console.log(currentItemId + " item deleted")
                                }
                                }
                                >
                                    delete</button>
                            </div>
                            <div className="amount">
                                <div onClick={() => handleAdd(item.id)}>
                                    <AiOutlineArrowUp />
                                </div>
                                {item.amount}
                                <AiOutlineArrowDown onClick={() => handleDecrease(item.id)} />
                            </div>

                        </section>
                    )
                })}

            </div>
            <div onClick={() => clearCart()} className="clear-cart">
                <h3>clear cart</h3>
            </div>

        </div>
    );
}

export default CartItem;