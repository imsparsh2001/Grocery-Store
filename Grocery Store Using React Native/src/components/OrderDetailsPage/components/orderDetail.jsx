import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import styles from "../styles/orderDetail";

export default function OrderDetail() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [orders, setOrders] = useState([]);
  const [prices, setPriceData] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [DateTime, setDateTime] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  let isLoggedIn = false;

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          // Function to clear local Storage
          // clearAll();
          const orderIDData = await getData("orderID");
          const priceData = await getData("SubTotal");
          const paymentMethodData = await getData("PaymentMethod");
          const dateTimeData = await getData("DateTime");
          isLoggedIn = await getData("isLoggedIn");

          setOrders(orderIDData);
          setPriceData(priceData);
          setPaymentMethods(paymentMethodData);
          setDateTime(dateTimeData);

          // Initially, set filteredOrders to all orders
          setFilteredOrders(orderIDData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      // Update filteredOrders whenever searchQuery or sortOption changes
      filterAndSortOrders();
    }, [searchQuery, sortOption])
  );

  // Function to read Data from Async Storage
  const getData = async (key) => {
    try {
      return JSON.parse(await AsyncStorage.getItem(key)) || [];
    } catch (e) {
      console.error("Error while reading the Data: ", e);
      throw e;
    }
  };

  // Function to store Data in Async Storage
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error while storing the Data: ", e);
    }
  };

  // Function to clear Async Storage
  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error("Storage clear failed: ", e);
    }
    // console.log('Done.')
  };

  // Function to handle filtering and sorting
  const filterAndSortOrders = () => {
    // Filter orders based on searchQuery
    const filteredOrders = orders.filter((order) =>
      order.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filteredOrders based on sortOption
    let sortedOrders = [...filteredOrders];
    if (sortOption === "id") {
      sortedOrders = sortedOrders.sort((a, b) => a.localeCompare(b));
    } else if (sortOption === "total-increasing") {
      sortedOrders = sortedOrders.sort(
        (a, b) => prices[orders.indexOf(a)] - prices[orders.indexOf(b)]
      );
    } else if (sortOption === "total-decreasing") {
      sortedOrders = sortedOrders.sort(
        (a, b) => prices[orders.indexOf(b)] - prices[orders.indexOf(a)]
      );
    }

    // Update state with filtered and sorted orders
    setFilteredOrders(sortedOrders);
  };

  // Function to rendr the order Details
  const renderOrderDetails = () => {
    return (
      filteredOrders &&
      filteredOrders.map((order) => {
        const index = orders.indexOf(order);
        const price = prices[index];
        const paymentMethod = paymentMethods[index];
        const dateTime = DateTime[index];

        return (
          <View key={order} style={styles.order}>
            <View style={styles.orderData}>
              <Text style={styles.orderID}>Order : {order}</Text>
              <Text style={styles.orderStatus}>Processing</Text>
            </View>
            <Text style={styles.orderDate}>Date : {dateTime} </Text>
            <Text style={{ fontSize: 14 }}>Paid By {paymentMethod}</Text>
            <View style={styles.customhr}></View>
            <Text style={styles.orderPrice}>${price}</Text>
          </View>
        );
      })
    );
  };

  // Function to handle click event on SignOut button
  function clickHandler() {
    const userData = {
      username: "",
      password: "",
      remember: false,
    };
    // console.log("OrderDetail isLoggedIn: ", isLoggedIn);
    isLoggedIn = false;
    storeData("userData", userData);
    storeData("isLoggedIn", isLoggedIn);

    navigation.navigate("Admin");
  }

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Search By Order Id"
        onChangeText={(text) => setSearchQuery(text)}
        style={styles.orderSearch}
      />

      <View style={styles.orderSort}>
        <Picker
          selectedValue={sortOption}
          onValueChange={(itemValue) => setSortOption(itemValue)}
          mode="dropdown"
          style={styles.orderPicker}
        >
          <Picker.Item label="SortBy" value="" />
          <Picker.Item label="OrderID" value="id" />
          <Picker.Item label="Total-Increasing" value="total-increasing" />
          <Picker.Item label="Total-Decreasing" value="total-decreasing" />
        </Picker>

        <TouchableOpacity activeOpacity={0.5} onPress={clickHandler}>
          <Text style={styles.logout}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.customhr}></View>

      <ScrollView
        // showsVerticalScrollIndicator={false}
        style={styles.ScrollViewWidth}
      >
        <View style={styles.orderView}>{renderOrderDetails()}</View>
      </ScrollView>
    </View>
  );
}
