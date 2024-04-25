import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/navbar"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navbar = () => {
  const navigation = useNavigation();
  const clickHandler = (screenName) => {
    navigation.navigate(screenName);
  };

  const getData = async() => {
    try {
      return await AsyncStorage.getItem('isLoggedIn')
    } catch(e) {
      console.error("Error while reading the Data: ", e)
    }
  }

  const clickHandlerAdmin = async () => {
    try {
      const isLoggedInString = await getData();
      const isLoggedIn = JSON.parse(isLoggedInString);
      // console.log('navbar isLoggedIn:', isLoggedIn);
  
      if (isLoggedIn === true) {
        // User is logged in, navigate to 'orderData'
        // console.log('navbar if loop isLoggedIn:', isLoggedIn);
        Alert.alert("Already LoggedIn", "You are already logged in");
        navigation.navigate('orderData');
      } else {
        // User is not logged in, navigate to 'Admin'
        // console.log('navbar else loop isLoggedIn:', isLoggedIn);
        navigation.navigate('Admin');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };  
  
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View style={styles.navcontainer}>
      <TouchableOpacity style={styles.button} onPress={()=>clickHandler('lan')}>
      <Icon name="home" size={30} color={"black"} />
          {/* <Text style={styles.text}>Home</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>clickHandler('Product')}>
        <Icon name="product-hunt" size={30} color={"black"} />
          {/* <Text style={styles.text}>Products</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>clickHandler('cart')}>
        <Icon name="cart-plus" size={30} color={"black"} />
          {/* <Text style={styles.text}>Cart</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>clickHandlerAdmin()}>
        <Icon name="user" size={30} color={"black"} />
          {/* <Text style={styles.text}>CheckOut</Text> */}
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

export default Navbar;