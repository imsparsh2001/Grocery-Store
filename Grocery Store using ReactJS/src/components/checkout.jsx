import React from 'react'
import  "../styles/checkout.css"
import { Delivary } from './delivary';
import { Orderdetail } from './orderdetail';
import { Link } from 'react-router-dom';

function Checkout() {
  return (<div className='chkout'>
  <div  className='nav'>
    <ul>
        <li > <Link to="/">Home</Link> /</li>
        <li>Shop /</li>
        <li>Checkout /</li>
    </ul>
    </div>
    <div className='subheading'><h1>Checkout</h1>
    <p>Already have a account?Click here to <span style={{color:"green"}}>signin</span></p>
    </div>
    <div className='delsections'>
    <Delivary/>
    <Orderdetail/>
    </div>
    </div>
  );
}
export { Checkout };
