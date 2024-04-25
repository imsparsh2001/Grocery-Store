import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import styles from '../styles/PopularCategories';
// import groceryData from '../assets/grocery.json'; 

const groceryData = require('../../../../assets/grocery.json');

const PopularCategories = ({ navigation }) => {
  const handleClick = (category) => {
    navigation.navigate('Product',  { category: category.items[0].category });
  };

  return (<View style={ styles.popularCategories }>
        <Text style={styles.sectionTitle}>Shop Popular Categories</Text>
      <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}>
        <View style={styles.popularCategoriesList}>

          {groceryData.map((category, index) => (
            <TouchableOpacity
              style={styles.categoryItem}
              key={index}
              onPress={() => handleClick(category)}
            >
              <View style={styles.imgWrapper}>
                <Image source={{ uri: category.items[0].img[0] }} style={styles.image} />
              </View>
              <Text style={styles.categoryText}>{category.items[0].category}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </ScrollView>
      </View>

  );
};

export default PopularCategories;
