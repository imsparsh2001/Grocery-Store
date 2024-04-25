import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";

import styles from "../styles/signup";

export default function SignUp() {
  const [email, setEmail] = useState("");

  const validateEmail = () => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      Alert.alert("Email Registered", "Your subscription is successful.");
    } else {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/Images/pattern.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.text1}>$30 discount for your first order</Text>
        <Text style={styles.text2}>
          Get top deals, latest trends, and more.
        </Text>
        <Text style={styles.text3}>
          Join our email subscription now to get updates on promotions and
          coupons.
        </Text>
        <View style={styles.emailInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity style={styles.button} onPress={validateEmail}>
            <Text style={styles.text4}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Image source={require("../../../../assets/Images/girl-email.png")} />
      </ImageBackground>
    </View>
  );
}
