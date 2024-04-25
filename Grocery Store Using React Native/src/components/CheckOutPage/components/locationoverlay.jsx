import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, } from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";
import styles from "../styles/checkout";

const LocationOverlay = ({
  isModalOpen,
  handleClose,
  onSaveAddress,
  addresses,
}) => {
  if (!isModalOpen) return null;

  const [emailError, setEmailError] = useState("");
  const [newAddressData, setNewAddressData] = useState({
    selectedType: "home",
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false,
  });

  const handleChange = (key, value) => {
    setNewAddressData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    if (key === "email") {
      validateEmail(value);
    }
  };

  const handleCheckboxChange = (isChecked) => {
    setNewAddressData((prevData) => ({
      ...prevData,
      isDefault: isChecked,
    }));

    if (isChecked) {
      const updatedAddresses = addresses.map((address) => ({
        ...address,
        isDefault:
          address.selectedType === newAddressData.selectedType
            ? isChecked
            : false,
      }));
      onSaveAddress(updatedAddresses);
    } else {
      onSaveAddress(addresses);
    }
  };
  const validateEmail = (text) => {
    // Check if the entered email is valid
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (emailRegex.test(text)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email Format. Please enter a Valid Email");
    }
  };
  const handleSave = () => {
    if (
      !newAddressData.firstName ||
      !newAddressData.lastName ||
      !newAddressData.email ||
      !newAddressData.addressLine1 ||
      !newAddressData.city ||
      !newAddressData.state ||
      !newAddressData.zipCode
    ) {
      alert("Please fill fields.");
      return;
    }
    if (emailError) {
      alert("Invalid Email Format. Please enter a Valid Email");
      return;
    }

    const existingAddressIndex = addresses.findIndex(
      (address) => address.selectedType === newAddressData.selectedType
    );

    if (existingAddressIndex !== -1) {
      const updatedAddresses = [...addresses];
      updatedAddresses[existingAddressIndex] = { ...newAddressData };
      onSaveAddress(updatedAddresses);
    } else {
      onSaveAddress([...addresses, { ...newAddressData }]);
    }

    handleClose();
  };
  return (
    <Modal transparent animationType="slide" visible={isModalOpen}>
      
      <View style={styles.modalOverlay}>
        <View style={styles.popupBody}>
          <View>
            <Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                New Shipping Address
              </Text>
            </Text>
            <Text style={{ fontSize: 14, color: "grey" }}>
              Add a new shipping address for your order delivery
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton.Android
                  value="home"
                  status={
                    newAddressData.selectedType === "home"
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => handleChange("selectedType", "home")}
                  color={"green"}
                />
                <Text style={{ fontWeight: "600" }}>Home</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton.Android
                  value="office"
                  status={
                    newAddressData.selectedType === "office"
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => handleChange("selectedType", "office")}
                  color="green"
                />
                <Text style={{ fontWeight: "600" }}>Office</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton.Android
                  value="other"
                  status={
                    newAddressData.selectedType === "other"
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => handleChange("selectedType", "other")}
                  color={"green"}
                />
                <Text style={{ fontWeight: "600" }}>Other</Text>
              </View>
            </View>

            <TextInput
              style={styles.inputfield}
              placeholder="First Name"
              onChangeText={(value) => handleChange("firstName", value)}
            />
            <TextInput
              style={styles.inputfield}
              placeholder="Last Name"
              onChangeText={(value) => handleChange("lastName", value)}
            />
             <View style={styles.textInput}>
                <TextInput
                  style={styles.inputfield}
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={(value) => handleChange("email", value)}
                  onBlur={() => validateEmail(newAddressData.email)}
                  value={newAddressData.email}
                />
                {emailError ? <Text style={{ color: "red" }}>*{emailError}</Text> : null}
             </View>
            <TextInput
              style={styles.inputfield}
              placeholder="Address Line 1"
              onChangeText={(value) => handleChange("addressLine1", value)}
            />
            <TextInput
              style={styles.inputfield}
              placeholder="Address Line 2"
              onChangeText={(value) => handleChange("addressLine2", value)}
            />
            <TextInput
              style={styles.inputfield}
              placeholder="City"
              onChangeText={(value) => handleChange("city", value)}
            />
            <TextInput
              style={styles.inputfield}
              placeholder="state"
              onChangeText={(value) => handleChange("state", value)}
            />

            <TextInput
              style={styles.inputfield}
              keyboardType="numeric"
              placeholder="Zip code"
              onChangeText={(value) => handleChange("zipCode", value)}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox.Android
                status={newAddressData.isDefault ? "checked" : "unchecked"}
                onPress={(isChecked) => handleCheckboxChange(isChecked)}
                color="green"
              />
              <Text style={{ fontSize: 16 }}>Set as default</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "lightgray",
                  padding: 10,
                  // margin: 15,
                  width: 70,
                  borderRadius:10,
                }}
                onPress={handleClose}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSave}
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  // margin: 25,
                  width: 70,
                  borderRadius:10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { LocationOverlay };
