import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import styles from '../styles/thumbnail'

const DetailComp = () => {
  return (
    <View style={{margin:'auto',width:'100%',padding:'auto',height:'90%'}} >
      <ScrollView style={styles.segment} id="product_information">
        <Text style={styles.heading}>Details</Text>
        <View style={styles.tableContainer}>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={[styles.label,styles.bold]}>Attribute</Text>
            <Text style={[styles.label,styles.bold]}>Value</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>Weight</Text>
            <Text>1000 Grams</Text>
        </View>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={styles.label}>Ingredient Type</Text>
            <Text>Vegetarian</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>Brand</Text>
            <Text>Dmart</Text>
        </View>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={[styles.label]}>Item Package Quantity</Text>
            <Text>1</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>Form</Text>
            <Text>larry the Bird</Text>
    
        </View>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={styles.label}>Manufacturer</Text>
            <Text>Dmart</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>Net Quantity </Text>
            <Text>340.0 Gram</Text>
        </View>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={[styles.label]}>Product Dimensions</Text>
            <Text>9.6 &times; 7.49 &times; 18.49 cm</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>ASIN</Text>
            <Text>SB0025UJ75W</Text>
        </View>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={styles.label}>Best Sellers Rank</Text>
            <Text>#2 in Fruits</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>Date First Available</Text>
            <Text>30 April 2022</Text>
        </View>
        <View style={[styles.row, styles.evenRow]}>
            <Text style={styles.label}>Item Weight</Text>
            <Text>500g</Text>
        </View>
        <View style={[styles.row, styles.oddRow]}>
            <Text style={styles.label}>Generic Name</Text>
            <Text>Banana Robusta</Text>
        </View>

</View>
      </ScrollView>
      <View style={styles.clear}></View>
    </View>
  );
};



export { DetailComp };
