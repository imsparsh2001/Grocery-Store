import React from 'react';
import '../styles/index.css';
import '../styles/mobile.css';

import style from "../styles/cartstyles.module.css"
import groceryData from '../grocery.json'; 
import { useDispatch, useSelector } from 'react-redux';
import ProductItem2 from './productItem2';



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


const CartProduct2 = () => {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(items);


    localStorage.setItem('cartItems', JSON.stringify(items));

  return (
    <div>
    
    <div className={style.container2}>
      <div >
        {/* alert */}
        
          <ul className={style.product_list}>
            {
              Object.keys(items).map((key) => {
                let item = findItemById(key);
                return <ProductItem2 key={key} item={item} />
              })
            }
        </ul>
        <br/>
    
      </div>
    </div>
  </div>
  );
};

export default CartProduct2;
