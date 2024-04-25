import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MapPin } from "lucide-react-native";
import { LocationOverlay } from "./locationoverlay";
import { RadioButton } from "react-native-paper";
import { Instructions } from "./instructions";
import styles from "../styles/checkout";

function Delivery({ navigation }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

 
  const handleSaveAddress = (updatedAddresses) => {
    if (selectedType) {
      const updatedAddressesWithDefaultsHandled = updatedAddresses.map(
        (address) => {
          if (address.selectedType === selectedType && address.isDefault) {
            return {
              ...address,
              isDefault: false,
            };
          }
          return address;
        }
      );

      setAddresses(updatedAddressesWithDefaultsHandled);
    } else {
      setAddresses(updatedAddresses);
    }
  };

  const renderAddressType = (type) => {
    const typeAddresses = addresses.filter(
      (address) => address.selectedType === type
    );

    if (typeAddresses.length === 0) {
      return null;
    }

    const renderAddressDetails = (address) => (
      <View
        key={`${type}-${address.firstName}-${address.lastName}`}
        style={{ marginLeft: "10%" }}
      >
        <Text style={{ fontWeight: "500" }}>
          {` ${address.firstName}`} {` ${address.lastName}`}
        </Text>
        <Text style={{marginLeft:3}}>
          {`${address.addressLine1},`}{` ${address.addressLine2},`}{` ${address.city},`}{` ${address.state} - `}{`${address.zipCode}`}
        </Text>
        {address.isDefault && (
          <Text style={{ color: "red" }}>Default Address</Text>
        )}
      </View>
    );

    return (
      <View style={styles.addressTypeContainer1}>
      <View style={styles.addressTypeContent1}>
        <View
          key={type}
          style={styles.addressTypeHeader1}
        >
          <RadioButton.Item
            value={type}
            status={selectedType === type ? "checked" : "unchecked"}
            onPress={() => handleTypeChange(type)}
            color="green"
            style={styles.radioButton1}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {`${type.charAt(0).toUpperCase() + type.slice(1)} Address`}
          </Text>
        </View>
        {typeAddresses.map((address, index) =>
          renderAddressDetails(address)
        )}
      </View>
    </View>
  );
};
return (
  <View style={styles.mainContainer1}>
    <View style={styles.headerSection1}>
      <View style={styles.iconTextStyle1}>
        <Text>
          <MapPin size={20} color="grey" />
        </Text>
        <Text style={{ fontSize: 20, marginRight: 20 }}>
          {" "}
          Delivery Address
        </Text>
      </View>

      <TouchableOpacity style={styles.addButton1} onPress={handleOpen}>
        <Text style={{ textAlign: "center" }}>Add delivery address</Text>
      </TouchableOpacity>
    </View>

    <LocationOverlay
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      handleClose={handleClose}
      onSaveAddress={handleSaveAddress}
      addresses={addresses}
      selectedType={selectedType}
    />


  {renderAddressType("home")}
  {renderAddressType("office")}
  {renderAddressType("other")}
  <Instructions
    selectedType={selectedType}
    addresses={addresses}
    navigation={navigation}
  />
</View>
);
};
export { Delivery };
