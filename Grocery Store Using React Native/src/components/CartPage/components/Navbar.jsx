import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/cart';



const Navbar = () => {
  

  return (
    <View style={styles.navbar}>
      <View style={styles.nav_list}>
        <TouchableOpacity
          style={styles.nav_item}
        >
          <Text style={styles.nav_link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav_item}
        >
          <Text style={styles.nav_link}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav_item}>
          <Text style={styles.nav_link}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Navbar;
