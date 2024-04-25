import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CreditCard } from "lucide-react-native";
import { RadioButton } from "react-native-paper";
import styles from "../styles/checkout";

const Payment = ({ isOpen, handleClose,addresses, selectedType, navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const clickHandler = () => {
    if (!selectedPayment) {
      alert("Select a payment method");
    } else if (addresses.length === 0) {
      alert("Select an address");
    } else {
      navigation.navigate("orderConfirmation", {
        addresses,
        selectedPayment,
        selectedType,
      });
    }
  };

  const handlePaymentSelect = (value) => {
    setSelectedPayment(value);
  };

  const handlePrev = () => {
    handleClose();
  };

  return (
    <ScrollView style={styles.pay}>
        <View style={styles.payment}>
          <CreditCard
            name="payment"
            color="grey"
            size={25}
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentText}>Payment Methods</Text>
        </View>
        <View>
          <View style={styles.boxbor}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="paypall"
                status={selectedPayment === "paypall" ? "checked" : "unchecked"}
                onPress={() => handlePaymentSelect("paypall")}
                color="green"
              />
              <Text style={styles.label}>Payment with Paypal</Text>
            </View>
            <Text style={styles.labelText}>
              You will be directed to PayPal's website to complete your payment
              securely
            </Text>
          </View>
          <View style={styles.boxbor}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="creditcard"
                status={
                  selectedPayment === "creditcard" ? "checked" : "unchecked"
                }
                onPress={() => handlePaymentSelect("creditcard")}
                color="green"
              />
              <Text style={styles.label}>Credit / Debit card</Text>
            </View>
            <Text style={styles.labelText}>
              Safe money transfer using bank account. We support Mastercard ,
              Visa,Discover and Stripe
            </Text>
            <View>
              <View style={styles.cardnum}>
                <Text style={styles.Inputlabel}>Card Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="1234 4567 6789 4321"
                  keyboardType="numeric"
                  maxLength={19}
                  name=""
                />
              </View>
              <View style={styles.carddetails}>
                <View style={styles.nameoncard}>
                  <Text style={styles.Inputlabel}>Name on card</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Name on Card"
                  />
                </View>
                <View style={styles.expiry}>
                  <Text style={styles.Inputlabel}>Expiry date</Text>
                  <TextInput style={styles.input} placeholder="MM/YYYY" />
                </View>
                <View style={styles.cvv}>
                  <Text style={styles.Inputlabel}>CVV code</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="•••"
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boxbor}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="Payoneer"
                status={
                  selectedPayment === "Payoneer" ? "checked" : "unchecked"
                }
                onPress={() => handlePaymentSelect("Payoneer")}
                color="green"
              />
              <Text style={styles.label}>Payment with Payoneer</Text>
            </View>
            <Text style={styles.labelText}>
              You will be directed to Payoneer website to complete your payment
              securely
            </Text>
          </View>
          <View style={styles.boxbor}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="COD"
                status={selectedPayment === "COD" ? "checked" : "unchecked"}
                onPress={() => handlePaymentSelect("COD")}
                color="green"
              />
              <Text style={styles.label}>Cash on delivery</Text>
            </View>
            <Text style={styles.labelText}>Pay with cash when your order is delivered</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight:10
          }}
        >
          <TouchableOpacity
            onPress={handlePrev}
            style={{
              backgroundColor: "lightgray",
              padding: 10,
              margin: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center", color:'#333', fontWeight:'500' }}>Prev</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: 'green', padding: 10, margin: 5, borderRadius: 5 }}
            onPress={clickHandler}
          >
            <Text style={{ textAlign: 'center', color:'#fff', fontWeight:'500' }}>Next</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};
export { Payment };
