import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ShoppingBag } from "lucide-react-native";
import { Payment } from "./payment";
import styles from "../styles/checkout";

function Instructions({ addresses, selectedType, navigation }) {
  const [isVisible, setIsVisible] = useState(false);


  const handleNext = () => {
    setIsVisible(true);
  };

  const handlePrev = () => {
    navigation.navigate("cart");
  };

  return (
    <View style={styles.container2}>
      <View
       style={styles.header2}
      >
        <Text>
          <ShoppingBag size="20" color="grey" />
        </Text>
        <Text style={styles.title2}>
          {" "}
          Delivery Instructions
        </Text>
      </View>

      <Text
       style={styles.subTitle2}
      >
        Delivery instructions
      </Text>

      <TextInput
        multiline
        numberOfLines={4}
        maxLength={40}
        placeholder="Write delivery instructions"
        style={styles.input2}
      />

      <Text
       style={styles.infoText2}
      >
        Add delivery instructions on how you want your order to be shipped
        and/or Delivered
      </Text>
      <View
       style={styles.buttonContainer2}
      >
        <TouchableOpacity
           style={styles.prevButton2}
          onPress={handlePrev}
        >
          <Text
           style={styles.buttonText2}
          >
            Prev
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.nextButton2}
          onPress={handleNext}
        >
          <Text
           style={styles.buttonText2}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>

      {isVisible && (
        <Payment
          isOpen={isVisible}
          handleClose={() => setIsVisible(false)}
          selectedType={selectedType}
          addresses={addresses}
          navigation={navigation}
        />
      )}
    </View>
  );
}

export { Instructions };
