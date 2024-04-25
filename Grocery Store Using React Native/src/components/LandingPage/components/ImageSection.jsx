
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../styles/ImageSection';

// Importing promotional images from local
const largeImage = require("../../../../assets/Images/slider-image-1.jpg");
const topImage = require("../../../../assets/Images/ad-banner-1.jpg");
const bottomImage = require("../../../../assets/Images/ad-banner-2.jpg");

const ImageSection = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        const newIndex = (currentIndex + 1) % 3; // Use modulo to loop back to the first image
        setCurrentIndex(newIndex);
        swiperRef.current.scrollBy(1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

 
  return (
      
      <View style={styles.container2}>
        {/* <StatusBar backgroundColor="#6a51ae" barStyle="light-content" /> */}
        <Swiper
            ref={swiperRef}
            onIndexChanged={(index) => setCurrentIndex(index)}
            style={styles.swiper}
            scrollEnabled={false}
            // pagingEnabled={true}
          >
     
        <View style={styles.slide}>
        <View style={styles.leftImage}>
        <Image source={largeImage} style={styles.largeImage} />
          <View style={styles.imageOverlay}>
            <View style={styles.imageOverlay2}>
            <View>
            <Text style={styles.overlayPara}>
              Exclusive Offer 
            </Text>
            </View>
              <View style={styles.highlights}>
                <Text style={styles.highlight}>15%</Text></View>
            </View>
            <Text style={styles.overlayHeading}>
              Best Online Deals,{'\n'}Free Stuff
            </Text>
            <Text style={styles.overlayPar}>Only on this Week...{'\n'}Don't miss</Text>
            <Text style={styles.overlayPar}>
              Starts from <Text style={styles.price}>$5.99</Text>
            </Text>
            <TouchableOpacity style={styles.greenButton}>
              <Text style={styles.buttonText}>Get Best Deals -&gt;</Text>
            </TouchableOpacity>
          </View> 
          </View>
          </View>

        <View style={styles.slide}>
      <View style={styles.rightTopImage}>
          <Image source={topImage} style={styles.smallImage} />
           <View style={styles.topImage}>
            <Text style={styles.overlayTitle}>
              10% Cashback on {'\n'}Personal Care
            </Text>
            <Text style={styles.overlayText}>
              Max Cashback: $12{'\n'}Code: <Text style={styles.code}>CARE12</Text>
            </Text>
            <TouchableOpacity style={styles.shopButton1}>
              <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
          </View> 
        </View> 
        </View>
       
        <View style={styles.slide}>
         <View style={styles.rightBottomImage}>
          <Image source={bottomImage} style={styles.smallImage} />
         <View style={styles.bottomImage}>
            <Text style={styles.overlayTitle}>
              Say yes to {'\n'}season's fresh
            </Text>
            <Text style={styles.overlayText}>
              Refresh your day {'\n'}the fruity way
            </Text>
            <TouchableOpacity style={styles.shopButton2}>
              <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View> 
        </View>
      </Swiper>
     

    </View>
    
  );
};


export default ImageSection;