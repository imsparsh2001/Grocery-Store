import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import '../styles/mobile.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import style from "../styles/cartstyles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setItemQuantity, removeItem } from '../state/cart/cartSlice'; 

const ProductItem = ({ item }) => {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(items[item.id]);
  
  // console.log(item)

  const removeItemFromCart = () => {
    dispatch(removeItem(item.id)); 
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    dispatch(setItemQuantity({
      id: item.id,
      quantity: quantity
    }));
  }, [quantity]);

  
    return (
      <li key={item.id} className={style.product_item}>
        <div className={style.product_image}>
          <img src={item.img[0]} alt="Ecommerce" />
        </div>
        <div className={style.product_details}>
          <a className={style.product_title}>{item.name}</a>
          <span className={style.product_price}>${item.price}</span>
          <div className={style.product_actions}>
          <div className={style.remove_container}  onClick={removeItemFromCart}>
            <RiDeleteBin5Line  className={style.delete_icon} />
            <span className={style.remove_text}>Remove</span>
          </div>
        </div>
        </div>
        <div className={style.quantity}>
          <button className={style.quantity_btn} onClick={decreaseQuantity}>-</button>
          <input  type="text"  value={quantity} readOnly className={style.quantity_input} step={1} max={10}  />
          <button className={style.quantity_btn} onClick={increaseQuantity}>+</button>
        </div>
        <div className={style.price}>
        <span className={style.price_value}>{`$${(quantity * item.price)}`}</span>
      </div>
      </li>
    );
  };
  
  export default ProductItem;