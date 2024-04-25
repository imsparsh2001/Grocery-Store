import React from "react";
import CartSummary from "./cartSummary";
import Navbar from "./navbar";
import CartProduct from "./cartProducts";


import style from "../styles/cartstyles.module.css"

const Cart = () => {
    
  return (

  <div className={style.cart_body}>
      <Navbar/>
      <h1 className={style.cart_heading}>Shopping Cart</h1>
      <h4 className={style.cart_heading}>Shopping in 382480</h4>
  
      <div className={style.grid_container}>
      <div className={style.cart_item}>
        <CartProduct />
      </div>
      <div className={style.cart_summary}>
        <CartSummary />
      </div>
    </div>
    
    </div>

  
    
  );
};

export default Cart;