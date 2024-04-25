// thumbnailPage.js
import React from 'react';
import { View } from 'react-native';
import { Checkout } from '../components/CheckOutPage/components/checkout';
import Navbar from '../components/LandingPage/components/navbar';
import Header from '../components/LandingPage/components/header';

const CheckoutPage = ({navigation}) => {
  return (
    <View>
      {/* <Header/> */}
      <Checkout navigation={navigation} />
      {/* <Navbar/> */}
    </View>
  );
};

export default CheckoutPage;
