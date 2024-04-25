import React from "react";
import CartSummary2 from "./cartSummary2";
import CartProduct2 from "./cartProducts2";
import style from "../styles/cartstyles.module.css"


const Orderdetail = () => {
    
  return (
     <div className={style.cart2} >
    <h3 >Order Details</h3>
      <div >
      <div className={style.cart_item}>
        <CartProduct2 />
      </div>
      <div className={style.cart_summary}>
        <CartSummary2 />
      </div>
    </div>
    </div>
    
  );
};

export {Orderdetail};
