// LandingPage.js
import React from 'react';
import {  View } from 'react-native';
import OrderConfirmation from '../components/OrderConfirmationPage/components/orderConfirmation';


const OrderConfirmationPage = ({route}) => {
  return (
    <View>
         <OrderConfirmation route={route}/>
    </View>
    
  );
};

export default OrderConfirmationPage;
