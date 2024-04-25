import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/mobile.css';
import style from "../styles/cartstyles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setItemQuantity } from '../state/cart/cartSlice'; 



const ProductItem2 = ({ item }) => {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(items[item.id]);
  console.log(item)
 

  
  useEffect(() => {
    dispatch(setItemQuantity({
      id: item.id,
      quantity: quantity
    }));
  }, [quantity]);

  
    return (
      <li className={style.product_item2}>
        <div className={style.product_image2}>
          <img src={item.img[0]} alt="Ecommerce" />
        </div>
        <div className={style.product_details}>
          <a className={style.product_title}>{item.name}</a>
          <span className={style.product_price}>{item.price}</span>
         
        </div>
        <div className={style.quantity2}>
         
          <p>{quantity}</p>
        
        </div>
        <div className={style.price}>
        <span className={style.price_value}>{`$${(quantity * item.price)}`}</span>
      </div>
      </li>
    );
  };
  
  export default ProductItem2;