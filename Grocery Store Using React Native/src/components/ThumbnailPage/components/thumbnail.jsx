import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DataTable } from 'react-native-paper';
import styles from '../styles/thumbnail'
import { Navigation } from './navigation';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../state/cart/cartSlice";

export default function Thumbnail({ navigation}) {
    const route = useRoute(); //route object
    const { selectedProduct } = route.params || {}; //extracting the params property
    const [hoveredIndex, setHoveredIndex] = useState(null); //state to track the hovered image index in thumbnailContainer
    const [selectedImage, setSelectedImage] = useState(null); //state to track the current selected image
    const [selectedQuantity, setSelectedQuantity] = useState(1);  
      
      //this function navigate to the checkout page
      navigateToCheckout = () => {
        navigation.navigate('checkout');
      }

      //sets the selected image when a thumbnail photo present in thumbnailContainer is pressed
    const handleThumbnailPress = (source) => {
        setSelectedImage(source);
      };

      //sets the hovered index when a thumbnail photo is pressed in
    const handlePressIn = (index) => {
        setHoveredIndex(index);
    };
    
    //clears the hovered index when a thumbnail photo is pressed out
    const handlePressOut = () => {
        setHoveredIndex(null);
    };

    const incrementQuantity = () => {
      setSelectedQuantity(selectedQuantity + 1);
    };
  
    const decrementQuantity = () => {
      if (selectedQuantity > 1) {
        setSelectedQuantity(selectedQuantity - 1);
      }
    };

    // this function is for the images in thumbnailContainer where onPress
    //  the handlePressIn and handleThumbnailPress is called
    const renderThumbnail = (source, index) => (
        <TouchableOpacity
        key={index}
        onPressIn={() => handlePressIn(index)}
        onPressOut={handlePressOut}
        onPress={() => handleThumbnailPress(source.uri)}
        activeOpacity={0.7}
        style={[
            styles.thumbnailPhoto,
            hoveredIndex === index && styles.hoverEffect,
        ]}
        >
        <Image style={styles.thumbnailImage} source={source} />
        </TouchableOpacity>
  );

  // This function dispatches the addItem action to the Redux store with the provided id. 
  // It then navigates to the 'cart' screen.
  const addToCart = (id, quantity) => {
    dispatch(addItem({ id, quantity }));
    navigation.navigate('cart');
  };

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  //For printing stars this component is called, that takes a rating prop as i/p
  const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
  
    return (
      <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
        {[...Array(filledStars)].map((_, index) => (
          <Icon key={index} name="star" size={20} color="gold" />
        ))}
        {halfStar && <Icon name="star-half-o" size={20} color="gold" />}
      </View>
    );
  };

  return (
    <ScrollView>
    <View style={styles.container1}>
        <StatusBar style="auto" />
        {/* View for main image, thumbnail photos and information about the images */}
        <View style={styles.column}>
        <Image style={styles.image} source={{ uri: selectedImage || selectedProduct.img[0] }} />
        <View style={styles.thumbnailContainer}>
            {selectedProduct.img.map((image, index) => (
                 renderThumbnail({ uri: image }, index)
            ))}
            </View>
        <View style={{alignText: 'left'}}>
            <Text style={styles.company}>{selectedProduct.category}</Text>
            <Text style={styles.productName}>{selectedProduct.name}</Text>
            <View style={{flexDirection: 'row', gap: 5, marginTop: 5}}>
                <StarRating rating={selectedProduct.rating} />
                <Text style={styles.review}>(30 reviews)</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 5, marginTop: 10 }}>
                <Text style={styles.exactPrice}>$32</Text>
                <Text style={[styles.strikethrough, styles.price ]}>$35</Text>
                <Text style={styles.discount}>26% off</Text>
            </View>
        </View>
        <View><Text style={styles.line}></Text></View>
        <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={styles.quantity}>250g</Text>
            <Text style={styles.quantity}>500g</Text>
            <Text style={styles.quantity}>1kg</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={decrementQuantity}>
              <Text style={styles.button}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.button, {color:'#333'}]}>{selectedQuantity}</Text>
            <TouchableOpacity onPress={incrementQuantity}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity  onPress={() => addToCart(selectedProduct.id, selectedQuantity)}>
        {/* <View  style={{flexDirection: 'row', gap: 5}} > */}
            <View style={styles.addButton}> 
            <Text><Icon name="shopping-bag" size={20} color='white'/></Text>
            <Text style={styles.btnText}>Add To Cart</Text></View>
        {/* </View> */}
        </TouchableOpacity>
        <View><Text style={styles.line}></Text></View>
        {/* table to show product details */}
        <View>
            <DataTable >
                <DataTable.Header></DataTable.Header>
                <DataTable.Row > 
                    <DataTable.Cell style={styles.tableContent}>Product Code: </DataTable.Cell> 
                    <DataTable.Cell style={styles.tableContent}>{selectedProduct.productCode}</DataTable.Cell> 
                </DataTable.Row> 
                <DataTable.Row > 
                    <DataTable.Cell style={styles.tableContent}>Availibility: </DataTable.Cell> 
                    <DataTable.Cell style={styles.tableContent}>{selectedProduct.availability}</DataTable.Cell> 
                </DataTable.Row> 
                <DataTable.Row > 
                    <DataTable.Cell style={styles.tableContent}>Type: </DataTable.Cell> 
                    <DataTable.Cell style={styles.tableContent}>{selectedProduct.type}</DataTable.Cell> 
                </DataTable.Row> 
                <DataTable.Row >
                    <DataTable.Cell style={styles.tableContent}>Shipping: </DataTable.Cell> 
                    <DataTable.Cell >
                    <Text style={styles.tableContent}>{selectedProduct.shipping}</Text>
                    </DataTable.Cell>
                </DataTable.Row> 
            </DataTable>
            
        </View>
    </View>
    <Navigation/>
    </View>
    </ScrollView>

  );
}