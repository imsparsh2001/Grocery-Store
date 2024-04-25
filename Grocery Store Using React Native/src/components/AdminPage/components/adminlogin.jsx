import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CheckBox } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import styles from "../styles/adminlogin";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Admin() {
  const navigation = useNavigation();

  const [check, setCheck] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  let isLoggedIn = false;
  const eyeIconColor = showPassword ? "rgb(6, 212, 6)" : "red";

  //Function to be called everytime the screen opens
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const storedData = await getData("userData");

          if (storedData) {
            const userInfo = JSON.parse(storedData);

            setEmailInput(userInfo.username || "");
            setPasswordInput(userInfo.password || "");
            setCheck(userInfo.remember || false);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [])
  );

  // Function to read Data from Async Storage
  const getData = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error("Error while reading the Data: ", e);
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //Function to handle click on Signin button
  function AdminLogin() {
    if (emailInput === "admin@admin.in" && passwordInput === "admin") {
      if (check === true) {
        userData = {
          username: "admin@admin.in",
          password: "admin",
          remember: check,
        };
        isLoggedIn = true;
        storeData("isLoggedIn", isLoggedIn);
        storeData("userData", userData);
        // console.log('AdminPage isLoggedIn: ', isLoggedIn);
        navigation.navigate("orderData");
      } else {
        userData = {
          username: "",
          password: "",
          remember: check,
        };
        // setEmailInput("");
        // setPasswordInput("");
        // setCheck(false);
        storeData("isLoggedIn", true);
        storeData("userData", userData);
        navigation.navigate("orderData");
      }
    } else if (emailInput === "" || passwordInput === "") {
      Alert.alert("Enter credentials", "Enter the required credentials first");
    } else {
      Alert.alert("Invalid Credentials", "Invalid email or password");
    }
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{ backgroundColor: "#fff", height: "100%" }}
    >
      <View>
        <Image
          source={require("../../../../assets/Images/Picture1.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.heading1}>Sign In</Text>
        <Text style={styles.heading2}>
          Welcome back to FreshCart! Enter your email to get started.
        </Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={emailInput}
          autoFocus
          onChangeText={(text) => setEmailInput(text)}
          style={styles.emailInput}
        />
        <TextInput
          placeholder="••••••"
          value={passwordInput}
          secureTextEntry={showPassword}
          onChangeText={(text) => setPasswordInput(text)}
          style={styles.passwordInput}
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={30}
          color={eyeIconColor}
          style={styles.eyeIcon}
          onPress={toggleShowPassword}
        />
        <CheckBox
          title="Remember You? 🧐"
          checked={check}
          checkedTitle={`Remembered 😉`}
          onPress={() => setCheck(!check)}
          checkedColor={"rgb(6, 212, 6)"}
          containerStyle={{
            width: "50%",
            backgroundColor: "#fff",
            marginLeft: 0,
            padding: 10,
            paddingLeft: 0,
          }}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={AdminLogin}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
