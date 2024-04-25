import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import groceryData from '../../../../assets/grocery.json';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from '../styles/cart';

// import { useFocusEffect } from '@react-navigation/native';

function findItemById(id) {
  for (const category of groceryData) {
    for (const item of category.items) {
      if (item.id == id) {
        return item;
      }
    }
  }
  return null;  // Return null if the item with the given id is not found
}

const CartSummary = ({navigation}) => {

  const subtotalFromRedux = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(subtotalFromRedux);


  useEffect(() => {
    setSubTotal(subtotalFromRedux);
  }, [subtotalFromRedux]);
  

  const storeData = async(value) => {
    try {
      let price = await getData();
      let total = value + 3;
      // console.log("Price: ", price)
      price.push(total);
      await AsyncStorage.setItem('SubTotal', JSON.stringify(price));
      // console.log("Subtotal Storing Success ", price)
    } catch(e) {
      console.error("Error while storing the SubTotal: ", e)
    }
  }

  const getData = async() => {
    try {
      return JSON.parse(await AsyncStorage.getItem('SubTotal')) || [];      
    } catch(e) {
      console.error("Error while reading the Data: ", e)
    }
  }

  

  const handleCheckoutClick = () => {
    storeData(subTotal);
    navigation.navigate('checkout');
  };


  return (
 
    <View>
    <View style={styles.summary_container}>
      <View style={styles.summary_box}>
        <View style={styles.summary_content}>
          <Text style={styles.summary_heading}>Summary</Text>
          <View style={styles.summary_card}>
            <View style={styles.summary_list}>
              <View style={styles.summary_item}>
                <Text>Item Subtotal</Text>
                <Text>${subTotal}</Text>
              </View>
              <View style={styles.summary_item}>
                <Text>Service Fee</Text>
                <Text>$3.00</Text>
              </View>
              <View style={styles.summary_item}>
                <Text style={styles.bold_text}>Subtotal</Text>
                <Text style={styles.bold_text}>${subTotal + 3.00}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity  style={[styles.action_btn, styles.primary_action]} type='submit' onPress={handleCheckoutClick}>
            <Text style={styles.primary_text}>  Go to Checkout  <Text style={styles.bold_text}> ${subTotal + 3.00}</Text></Text>
          </TouchableOpacity>
          <Text style={styles.small_text}>
            <Text>By placing your order, you agree to be bound by the Freshcart </Text>
            <Text style={styles.small_text_span}>Terms of Service</Text>
            <Text> and </Text>
            <Text style={styles.small_text_span}>Privacy Policy.</Text>
          </Text>
          <View>
            <Text style={styles.promo_heading}>Add Promo or Gift Card</Text>
            <View>
              <Text style={styles.promo_email}>Email address</Text>
              <TextInput
                
                placeholder="Promo or Gift Card"
                style={styles.text_input}
              />
            </View>
            <TouchableOpacity style={[styles.action_btn, styles.secondary_action]}>
              <Text>Redeem</Text>
            </TouchableOpacity>
            <Text> <Text>Terms & Conditions apply</Text></Text>
          </View>
        </View>
      </View>
    </View>
  </View>
  );
};
 


export default CartSummary; 