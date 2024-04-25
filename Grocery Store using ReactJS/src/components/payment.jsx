

import React from 'react'
import { MdPayment } from "react-icons/md";
import  "../styles/checkout.css"
import { useNavigate } from 'react-router-dom';

const Payment = ({ isOpen, handleClose,selectedType,address}) => {
    let navigate = useNavigate();

    const orderClick = () => {
        if (address && address.firstName && address.addressLine1 && address.Email){
        navigate(`/orderConfirmation?addressType=${selectedType}&firstName=${address.firstName}&addressLine1=${address.addressLine1}&email=${address.Email}`);
        }
        else{
            alert('You should have an address')
        }
    }
    if (!isOpen) return null;
 
  return (<div>
    
        <div className='payment'>
            <MdPayment style={{height:"auto"}}/>
            <h3>Payment Methods</h3>
        </div>
        <div>
            <div className=' boxbor paypal'>
                <input type="radio" id="paypall" name="payment" value="paypall"/>
                <label htmlFor="paypall"><b>Payment with Paypal</b></label> 
                <p>You will be directed to paypal website to complete your payment securely</p>
            </div>
            <div className=' boxbor card'>
                <input type="radio" id="creditcard" name="payment" value="creditcard"/>
                <label htmlFor="creditcard"><b>Credit / Debit card</b></label> 
                <p>Safe money transfer using bank account. We support Mastercard , Visa,Discover and Stripe</p>
                <div className='cardnum'>
                <h5 style={{margin:"0%"}}>Card Number</h5>
                <input type='text' placeholder='1234 4567 6789 4321' name=""></input>
                </div>
                <div className='carddetails'>
                <div className='nameoncard'>
                    <h5 name="">Name on card</h5>
                    <input type="text"  placeholder='Enter your first name'/>
                </div>
                <div className='expiry'>
                    <h5 name="">Expiry date</h5>
                    <input type="date" placeholder='Select Date' />
                </div>
                <div className='cvv'>
                    <h5 name="">CVV code</h5>
                    <input type="text" placeholder='...' />
                </div>
                </div>
            </div>
            <div className='boxbor Payoneer'>
                <input type="radio" id="Payoneer" name="payment" value="Payoneer"/>
                <label htmlFor="Payoneer"><b>Payment with Payoneer</b></label> 
                <p>You will be directed to Payoneer website to complete your payment securely</p>
            </div>
            <div className='boxbor COD'>
                <input type="radio" id="COD" name="payment" value="COD"/>
                <label htmlFor="COD"><b>Cash on Delivary</b></label> 
                <p>Pay with cash when your order is delivered</p>
            </div>
        </div>
        <div className='btncls'>
        <button className='pre' onClick={handleClose}>Prev</button>
        <button className='placeorder' onClick={orderClick}>Place Order</button>
    </div>
    <hr/>
    </div>
  )
}
export {Payment}