import React, {  useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/mobile.css';
import style from "../styles/cartstyles.module.css";
import { useSelector } from 'react-redux';
import groceryData from '../grocery.json';

function findItemById(id) {
  for (const category of groceryData) {
    for (const item of category.items) {
      if (item.id == id) {
        return item;
      }
    }
  }
  return null;  // Return null if the item with the given id is not found
}

const CartSummary2 = () => {

  const items = useSelector((state) => state.cart.items);
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    let t = getSubtotal();
    console.log('triggered' + t)
    setSubTotal(t);
  }, [items])

  const getSubtotal = () => {
    let subTotal = 0;
    Object.keys(items).forEach((key) => {
      let item = findItemById(key);
      subTotal += (item.price * items[key]);
    });
    return subTotal;
  }

  return (
    <div>
  
  <div >
    <hr/>
   
          <ul className={style.summary_list}>
            <li className={style.summary_item}>
              <div>Item Subtotal</div>
                  <span className={style.bold_text}>${subTotal}</span>
            </li>
            <li className={style.summary_item}>
              <div>Service Fee</div>
              <span className={style.bold_text}>$3.00</span>
            </li>
            <li className={style.summary_item}>
              <div className={style.bold_text}>Subtotal</div>
                  <span className={style.bold_text}>${subTotal + 3.00}</span>
            </li>
          </ul>
        </div>
      </div>
    

  );
};

export default CartSummary2;