import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "../styles/orderConfirmation";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";


export default function OrderConfirmation({ route }) {
  const { addresses, selectedPayment, selectedType } = route.params; //extracting values of addresses etc from route paramters

  const getAddress = () => {
    //finding the selectedType from the array of objects
    const selectedAddressType = addresses.find(
      (address) => address.selectedType === selectedType
    );

    if (selectedAddressType) {
      return selectedAddressType;
    } else {
      // Default to the first address if the type is not found
      return addresses.length > 0 ? addresses[0] : null;
    }
  };

  const selectedAddress = getAddress();

  //store the values of selectedType address firstname etc in variables
  const firstName = selectedAddress ? selectedAddress.firstName : "";
  const email = selectedAddress ? selectedAddress.email : "";
  const addressLine1 = selectedAddress ? selectedAddress.addressLine1 : "";
  const addressLine2 = selectedAddress ? selectedAddress.addressLine2 : "";
  const number = "#BM" + Math.round(Math.random() * 10000);
  
  //it is used to store id, paymentMethod, date of order when placed in async storage
  useEffect(()=>{
    const fetchData = async () => {
      try {
        await storeData("orderID" ,number);
        await storeData("PaymentMethod" ,selectedPayment);
        let dateTime = getCurrentDateTime();
        await storeData("DateTime" ,dateTime);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])

  //for storing it in the form of key-value pairs
  const storeData = async(key, value) => {
    try {
      let temp = await getData(key);
      // console.log(key," : ", temp)
      temp.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(temp));
      // console.log(key," Storing Success ", temp)
    } catch(e) {
      console.error("Error while storing the "+ key + " : ", e);
    }
  }

  //for retrieving the value from async storage
  const getData = async(key) => {
    try {
      return JSON.parse(await AsyncStorage.getItem(key)) || [];      
    } catch(e) {
      console.error("Error while reading the "+ key + " : ", e)
    }
  }

  //this gives us current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  };

  return (
    // View to display the information of user who placed the order
    <View style={styles.OrderConfirm}>
      <Text style={styles.header}>Checkout</Text>
      <View style={styles.mainbox}>
        <View style={styles.oneContainer}>
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={30} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.orderText}>Order {number} </Text>
            <Text style={styles.thankYouText}>Thank you {firstName}</Text>
          </View>
        </View>
        <View style={styles.orderUpdates}>
          <Text style={styles.orderUpdatesHeader}>Order Updates</Text>
          <Text style={styles.textStyle}>
            You will receive order and shipping updates via email
          </Text>
        </View>
        <View style={styles.sContainer}>
          <View style={styles.shadowContainer}>
            <View style={styles.blankSpace}></View>
          </View>
        </View>
        <View style={styles.tableContent}>
          <View style={[styles.insideContent ,{borderBottomWidth:1}]}>
            <Text style={styles.infoQ}>
              <Text style={{ fontWeight: "bold" }}>Contact</Text>
            </Text>
            <Text>{email}</Text>
          </View>
          <View style={[styles.insideContent ,{borderBottomWidth:1}]}>
            <Text style={styles.infoQ}>
              <Text style={{ fontWeight: "bold" }}>Address</Text>
            </Text>
            <View style={styles.parasForAdd}>
              <Text>{addressLine1 + ", " + addressLine2}</Text>
              {/* <Text>{address2}</Text> */}
            </View>
          </View>
          <View style={styles.insideContent}>
            <Text style={styles.infoQ}>
              <Text style={{ fontWeight: "bold" }}>Payment</Text>
            </Text>
            <Text>{selectedPayment}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  }