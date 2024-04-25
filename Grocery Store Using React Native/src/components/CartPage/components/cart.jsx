
import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Navbar from './Navbar';
import CartSummary from './cartSummary';
import CartProduct from './cartProduct';
import styles from '../styles/cart';





const Cart = ({navigation}) => {
    
  return (
    <View style={styles.cart_body}>
        {/* <Navbar/>  */}
        <Text style={styles.cart_heading}>Shopping Cart</Text>
        <Text style={styles.cart_subHeading}>Shopping in 382480</Text>

        <View style={styles.grid_container}>
            <View style={styles.cart_item}>
                <CartProduct navigation={navigation}/>
            </View>
            <View style={styles.cart_summary}>
                <CartSummary navigation={navigation}/>
            </View>
        </View>
    </View>
  );
};
 


export default Cart; 