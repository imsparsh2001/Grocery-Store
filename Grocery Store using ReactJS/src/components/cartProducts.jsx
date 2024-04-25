import React, { useState, useContext } from 'react';
import '../styles/index.css';
import '../styles/mobile.css';
import ProductItem from './productItem';
import style from "../styles/cartstyles.module.css"

import groceryData from '../grocery.json'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { updateCart } from '../state/cart/cartSlice'; 



function findItemById(id) {
  for (const category of groceryData) {
    for (const item of category.items) {
      if (item.id == id) {
        return item;
      }
    }
  }
  return null;  
}


const CartProduct = () => {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(items);
  const navigate = useNavigate();

  const handleUpdateCart = () => {
    
    dispatch(updateCart());

    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  return (
    <div>
    
    <div className={style.container}>
      <div >
        {/* alert */}
        <div className={style.alert} >
          You've got FREE delivery. Start <a href="#!" className={style.alert_link}>checkout now!</a>
        </div>
          <ul className={style.product_list}>
            {
              Object.keys(items).map((key) => {
                let item = findItemById(key);
                return <ProductItem key={key} item={item} />
              })
            }
        </ul>
        <br/>
        {/* buttons */}
        <div >
          <button onClick={() => navigate('/productList')}  className={`${style.btn} ${style.btn_continueShopping}`} >Continue Shopping</button>
          <button onClick={handleUpdateCart}  className={`${style.btn} ${style.btn_update} `} >Update Cart</button>
        </div>
      
      </div>
    </div>
  </div>
  );
};

export default CartProduct;
