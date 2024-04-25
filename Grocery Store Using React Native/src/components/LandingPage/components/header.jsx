import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CustomModal from './Modal'; // Make sure to adjust the path if necessary
import styles from '../styles/header';

const Header = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        
      <TouchableOpacity>
          <Image
            source={require('../../../../assets/Images/logo.png')} // Adjust the path to your image
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <View style={styles.hr}/>

      <TextInput
          style={styles.searchBar}
          placeholder="Search for Products"
          placeholderTextColor="#888"
        />

      <TouchableOpacity onPress={openModal} style={styles.locationButton}>
            <Image
              source={require('../../../../assets/Images/location.png')} // Adjust the path to your image
              style={styles.locationImage}
            />
          </TouchableOpacity>
        <CustomModal isOpen={isModalOpen} setModalOpen={setModalOpen} handleClose={closeModal} />
      </View>
      
    </View>
  );
};


  


export default Header;