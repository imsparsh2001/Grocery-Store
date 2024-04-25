
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setItemQuantity, removeItem } from '../../../state/cart/cartSlice'; 
import styles from '../styles/cart';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductItem = ({ item }) => {
  
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(items[item.id]);

  const removeItemFromCart = () => {
    dispatch(removeItem(item.id)); 
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    dispatch(setItemQuantity({
      id: item.id,
      quantity: quantity
    }));
  }, [quantity]);


  return (
    <View style={styles.productItem} key={item.id}>
    <View style={styles.productImage}>
      <Image source={{ uri: item.img[0] }} style={styles.image} />
    </View>
    <View style={styles.productDetails}>
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={styles.productActions}>
        <TouchableOpacity style={styles.removeContainer} onPress={removeItemFromCart}>
          <Icon name="trash" style={styles.deleteIcon} />
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.quantity}>
      <TouchableOpacity style={styles.quantityBtn} onPress={decreaseQuantity}>
        <Text>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.quantityInput}
        value={quantity.toString()}
        readOnly
        keyboardType="numeric"
        maxLength={10}
      />
      <TouchableOpacity style={styles.quantityBtn} onPress={increaseQuantity}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.price}>
      <Text style={styles.priceValue}>{`$${quantity * item.price}`}</Text>
    </View>
  </View>
    
  );
};



export default ProductItem;