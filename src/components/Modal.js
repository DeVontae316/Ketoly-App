import React, { useContext } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai';
import { Provider } from '../context'
import { useHistory, useParams } from 'react-router-dom';
import { menu } from '../data';



const Modal = () => {
  const {
    addItemToCart,
    modal,
    setModal,
    modalPrice,
    modalDescription,
    modalImage,
    modalId,
    setCartItem,
    cartItem,
    addCartTotal,
    CartTotalPrice
  } = useContext(Provider);

  const position = modal ? "modal-show" : "modal";
  const history = useHistory();


  const handleClose = () => {

    setModal(false);
  }
  const handleCart = () => {

    setModal(false);
    const item = modalId && menu.filter(e => e.id === modalId);
    if (item) setCartItem([...cartItem, { ...item[0] }])
    addItemToCart({ ...item[0] });
    addCartTotal(modalId);
    CartTotalPrice(modalId)
    /* history.push("/cart"); */
    console.log(modalId + ' id value');
    console.log("item below:")
    console.log(item);
  }

  return console.log(modal + ' value') || (
    <section className={position}>
      <div onClick={handleClose} style={{ marginTop: "5px", fontSize: "40px" }}>
        <AiFillCloseSquare />

      </div>
      <div className="modal-container">
        <div className="modal-image-container">
          <img className="modal-image" src={modalImage} alt="" />
        </div>

        <div className="modal-description-container">
          <p className="modal-description">{modalDescription}</p>
        </div>
        <div className="modal-price">
          <h3>{modalPrice}</h3>
        </div>
        <div onClick={handleCart} className="modal-cart">
          <h2>Add to cart</h2>
        </div>


      </div>
    </section>
  )
}

export default Modal
