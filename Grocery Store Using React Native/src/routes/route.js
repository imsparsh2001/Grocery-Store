import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from '../state/store';
import { Provider } from 'react-redux';

import Header from '../components/LandingPage/components/header';
import Navbar from '../components/LandingPage/components/navbar';

import LandingPage from "../views/landingPage";
import ThumbnailPage from "../views/thumbnailPage";
import ProductListPage from "../views/ProductListPage";
import CheckoutPage from "../views/checkoutPage";
import CartPage from "../views/cartPage";
import OrderConfirmationPage from "../views/orderConfirmationPage";
import AdminPage from "../views/adminPage";
import OrderDataPage from "../views/orderDataPage";

const Stack = createStackNavigator(); //creates a stack navigator
export default function Route() {
  return (
    // Wraps the entire application with redux provider, providing the redux store to all components
    <Provider store={store}> 
    {/* sets the navigation context for the entire app */}
    <NavigationContainer>
      <Header/>
    <Stack.Navigator>
      {/* Multiple screens */}
      <Stack.Screen name="lan" component={LandingPage} options={{ headerShown: false }} />
      <Stack.Screen name="Thumbnail" component={ThumbnailPage} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductListPage} options={{ headerShown: false }} />
      <Stack.Screen name="checkout" component={CheckoutPage} options={{ headerShown: false }} />
      <Stack.Screen name="cart" component={CartPage} options={{ headerShown: false }} />
      <Stack.Screen name="orderConfirmation" component={OrderConfirmationPage} options={{ headerShown: false }} />
      <Stack.Screen name="Admin" component={AdminPage} options={{ headerShown: false }} />
      <Stack.Screen name="orderData" component={OrderDataPage} options={{ headerShown: false }} />
    </Stack.Navigator>
   <Navbar/>
  </NavigationContainer>
  </Provider>
  );
}
