import React from "react";
import { ScrollView, View } from "react-native";
import Cart from "../components/CartPage/components/cart";
import Header from "../components/LandingPage/components/header";
import Navbar from "../components/LandingPage/components/navbar";

const CartPage = ({navigation}) => {
  return (
    <ScrollView>
    <View>
      <Cart navigation={navigation}/>
    </View>
    </ScrollView>
  );
};

export default CartPage;
