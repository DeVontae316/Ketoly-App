import React, { useState, useEffect, useReducer } from 'react'
import Menu from './components/Menu';
import { menu } from './data';
import cartReducer from './reducer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Modal from './components/Modal'
import Nav from './components/Nav';
import Slider from './components/slider';
import { Provider } from './context';
import CartItem from './components/CartItem';
import About from './components/About';
import TotalCartPrice from './components/TotalCartPrice';

function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(menu);
  const [cartItem, setCartItem] = useState([]);
  const [modalId, setModalId] = useState();
  const [modalImage, setModalImage] = useState();
  const [modalPrice, setModalPrice] = useState();
  const [modalDescription, setModalDescription] = useState();

  const initialState = {
    cartItems: [],
    totalCartAmount: 0,
    totalPrice: 0,
  }
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItemToCart = (id) => {
    dispatch({ type: 'ADD_CART_ITEM', payload: id })
  }
  const addCartTotal = (id) => {
    dispatch({ type: 'ADD_CART_TOTAL', payload: id });
  }
  const addCartTotalItem = (id) => {
    dispatch({ type: 'ADD_CART_TOTAL_ITEM', payload: id });
  }
  const CartTotalPrice = () => {
    dispatch({ type: 'CART_TOTAL_PRICE' });
  }
  const decreaseCartTotalItem = (index) => {
    dispatch({ type: 'DECREASE_CART_TOTAL_ITEM', payload: index })
  }
  const deleteCartItem = (index) => {
    dispatch({ type: 'DELETE_CART_ITEM', payload: index })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  useEffect(() => {
    if (modal) document.body.classList.add("nutrition-facts");

    return () => document.body.classList.remove("nutrition-facts");
  }, [modal])
  return (

    <>
      <Provider.Provider value={{
        menu,
        data,
        setData,
        modal,
        setModal,
        modalImage,
        setModalImage,
        modalDescription,
        setModalDescription,
        modalPrice,
        setModalPrice,
        modalId,
        setModalId,
        cartItem,
        setCartItem,
        ...state,
        addCartTotal,
        addCartTotalItem,
        addItemToCart,
        decreaseCartTotalItem,
        CartTotalPrice,
        deleteCartItem,
        clearCart,


      }}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Slider} />

            <Route path="/menu"  >
              <Modal />
              <Menu />
            </Route>

            <Route path="/cart" component={CartItem}>
              <CartItem />
              <TotalCartPrice />
            </Route>
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Provider.Provider>

    </>

    /* <>
      <Provider.Provider value={{ modal, setModal, sidebar, setSidebar }}>
        <Modal getClassName={modal} />
        <div className="btn-container popup">
          <button onClick={handleModal}>open modal</button>
        </div>
        <button onClick={() => setSidebar(true)}>click</button>
        <Sidebar />
      </Provider.Provider>
    </> */
  )
}

export default App
