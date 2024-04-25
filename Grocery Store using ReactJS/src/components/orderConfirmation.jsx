import React from 'react'
import '../styles/index.css'; 
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderConfirmation = () => {
  const location = useLocation();
  const addressType = new URLSearchParams(location.search).get('addressType');
  const firstName = new URLSearchParams(location.search).get('firstName');
  const address1 = new URLSearchParams(location.search).get('addressLine1');
  const email = new URLSearchParams(location.search).get('email');
  // const address2 = new URLSearchParams(location.search).get('addressLine2');

  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch the existing array from localStorage
    const storedOrderData = JSON.parse(localStorage.getItem('OrderData')) || [];
 
    // Generate a new token
    const num = Math.round(10000 * Math.random());
    const orderid = `#BM${num}`;
    setToken(orderid);
 
    // Append the new token to the existing array
    const newOrderData = [...storedOrderData, orderid];
    // setTokenArray(newOrderData);
 
    // Store the updated array in localStorage
    localStorage.setItem('OrderData', JSON.stringify(newOrderData));
 
    console.log('Generated Token:', orderid);
    console.log('Updated Array:', newOrderData);
  }, []);

  
  return (
    <div className="OrderConfirm">
        <h1>Checkout</h1>
        <div className="mainbox">
        <span><i className="fa-icon fa-regular fa-circle-check" style={{color: "#1f3951"}}></i></span>
        <div className="firstbox">
                <p className='order-text'>Order {token}</p>
                <h2>Thank you {firstName}</h2>
        </div>
        <div className='clear'></div>
        <div className='orderUpdates' style={{border: "2px solid lightgray", borderRadius: "5px", paddingLeft: "10px", marginTop: "1%"}}>
            <h2>Order Updates</h2>
            <p className="text-style">You will receive order and shipping updates via email</p>

        </div>
        <div className="blank-space">
        </div>
        <div className="table-content">
            <div className="inside-content">
            <p className='info-q'><strong>Contact</strong></p>
            <p>{email}</p>
            </div>
            <div className="inside-content">
            <p className='info-q'><strong>Address</strong></p>
            <div className="paras-for-add">
            <p>{address1} </p> 
            {/* <p> {address2} </p> */}
            </div>
            </div>
            <div className="inside-content">
            <p className='info-q'> <strong>Payment</strong></p>
            <p>Check Payments</p>
            </div>

            {/* <button onClick={pushValueIntoArray}>Submit</button> */}

        </div>
    </div>
    </div>
  )
}

export default OrderConfirmation
