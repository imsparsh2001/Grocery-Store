import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from '../styles/productList'
// import PriceSlider from './PriceSlider';
import { Star, ChevronRight } from 'lucide-react-native';
import { StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import MultiSlider

const MobileFilter = ({
  isOpen,
  handleClose,
  values,
  setValues,
  setModalOpen,
  handleCategoryClick,
  selectedStars,
  handleStars,
}) => {

  useEffect(() => {
  }, []); // You might have specific dependencies for your useEffect

  const formatPrice = (value) => {
    return `${value}`;
  };

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  if (!isOpen) return null;

  return (
    <Modal transparent animationType="slide" visible={isOpen}>
    <View style={styles.mobileFilterOverlay} >
      <View style={styles.leftCategories}>

      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>&times;</Text>
        </TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Categories</Text>

        <View style={styles.cat}>
          <TouchableOpacity style={styles.categoryName} onPress={() => {
          handleCategoryClick('Best Sellers'); // Update with the category you want to select
          setModalOpen(false);
        }} >
            <Text style={{fontSize:16}}>
              Best Sellers
            </Text>
            <ChevronRight color='grey'  style={{marginLeft:35,width:1,height:1}}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryName}>
            <Text style={{fontSize:16}} onPress={() => {
          handleCategoryClick('Veg Pizzas'); // Update with the category you want to select
          setModalOpen(false);
        }} >
             Veg Pizzas  
            </Text>
            <ChevronRight color='grey' style={{marginLeft:40,width:1,height:1}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryName} onPress={() => {
          handleCategoryClick('NonVeg Pizzas'); // Update with the category you want to select
          setModalOpen(false);
        }}>
            <Text style={{fontSize:16}}>
            NonVeg Pizzas
            </Text>
            <ChevronRight color='grey' style={{marginLeft:12,width:1,height:1}}/>
          </TouchableOpacity>


          <TouchableOpacity style={styles.categoryName} onPress={() => {
          handleCategoryClick('Side Dishes'); // Update with the category you want to select
          setModalOpen(false);
        }}>

          <Text style={{fontSize:16}}>
          Side Dishes 
            </Text>
            <ChevronRight color='grey' style={{marginLeft:35,width:1,height:1}}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryName} onPress={() => {
          handleCategoryClick('Desserts'); // Update with the category you want to select
          setModalOpen(false);
        }}>

          <Text style={{fontSize:16}}>
          Desserts
            </Text>
            <ChevronRight color='grey' style={{marginLeft:53,width:1,height:1}}/>
          </TouchableOpacity>
        </View>

        <View  style={styles.priceContainer}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Price Range</Text>
       <MultiSlider
        values={values}
        onValuesChange={handleChange}
        min={10}
        max={1000}
        step={1}
        sliderLength={200}
        snapped
        selectedStyle={{ backgroundColor: 'green' }}

      />
      <Text>Price Range: {formatPrice(values[0])} to {formatPrice(values[1])}</Text>
<View>
</View>
</View>
      <View style={styles.ratingFilter}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Rating</Text>
      <View style={{ flexDirection: 'row',alignItems:'center'   }}>
      <Checkbox.Android
        color="green"
        uncheckedColor="grey"
        status={selectedStars === 4 ? 'checked' : 'unchecked'}
        size={20}
        onPress={() => handleStars(4)}
      />
      <Text style={styles.RatingNumber}>4</Text>
      <Icon name="star" size={20} color='gold' />
       <Text style={styles.RatingNumber}>& Above</Text>
      </View>
      <View style={{ flexDirection: 'row',alignItems:'center'  }}>
      <Checkbox.Android
        color="green"
        uncheckedColor="grey"
        status={selectedStars === 3 ? 'checked' : 'unchecked'}
        size={20}
        onPress={() => handleStars(3)}
      />
      <Text style={styles.RatingNumber}>3</Text>
      <Icon name="star" size={20} color='gold' />
       <Text style={styles.RatingNumber}>& Above</Text>
      </View>
      <View style={{ flexDirection: 'row' ,alignItems:'center'  }}>
      <Checkbox.Android
        color="green"
        uncheckedColor="grey"
        status={selectedStars === 2 ? 'checked' : 'unchecked'}
        size={20}
        onPress={() => handleStars(2)}
      />
      <Text style={styles.RatingNumber}>2</Text>
      <Icon name="star" size={20} color='gold' />
       <Text style={styles.RatingNumber}>& Above</Text>
      </View>
      <View style={{ flexDirection: 'row',alignItems:'center'   }}>
      <Checkbox.Android
        color="green"
        uncheckedColor="grey"
        status={selectedStars === 1 ? 'checked' : 'unchecked'}
        size={20}
        onPress={() => handleStars(1)}
      />
       <Text style={styles.RatingNumber}>1</Text>
      <Icon name="star" size={20} color='gold' />
       <Text style={styles.RatingNumber}>& Above</Text>
      </View>
      </View>
      </View>

    </View>
    </Modal>
  );
};



export default MobileFilter;
