
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ProductItem from './productItem';
import { useDispatch, useSelector } from 'react-redux';
import groceryData from '../../../../assets/grocery.json';
import styles from '../styles/cart';
import { updateSubtotal } from '../../../state/cart/cartSlice'; 





function findItemById(id) {
  for (const category of groceryData) {
    for (const item of category.items) {
      if (item.id == id) {
        return item;
      }
    }
  }
  return null;
}

const CartProduct = ({ navigation }) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let t = getSubtotal();
    // console.log('triggered' + t)
    setSubTotal(t);
  }, [items])

  const getSubtotal = () => {
    let subTotal = 0;
    Object.keys(items).forEach((key) => {
      let item = findItemById(key);
      subTotal += (item.price * items[key]);
    });
    return subTotal;
  }

  const handleUpdateCartClick = () => {
    let subtotal = getSubtotal();
    dispatch(updateSubtotal(subtotal));
  };

  const handleClick = () => {
    navigation.navigate("Product");
  };
  // console.log(items);

  return (
    <View style={styles.container}>
      {/* Alert */}
      <View style={styles.alertContainer}>
        <Text style={styles.alertText}>
          You've got FREE delivery. Start{' '}
          <Text style={styles.alertLink}>Checkout now!</Text>
        </Text>
      </View>

      {/* Product List */}
      <View style={styles.productList}>
        {Object.keys(items).map((key) => {
          let item = findItemById(key);
          return <ProductItem key={key} item={item} />;
        })}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.continueShoppingButton]}
          onPress={handleClick}
        >
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={handleUpdateCartClick}>
          <Text style={styles.buttonText}>Update Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 


export default CartProduct; 