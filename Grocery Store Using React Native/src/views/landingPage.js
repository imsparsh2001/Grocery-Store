// LandingPage.js
import React from 'react';
import { ScrollView, View } from 'react-native';
import ImageSection from '../components/LandingPage/components/ImageSection';
import Header from '../components/LandingPage/components/header';
import PopularCategories from '../components/LandingPage/components/PopularCategories';
import Footer from '../components/LandingPage/components/footer';
import SignUp from '../components/LandingPage/components/signup';
import SpecialOffer from '../components/LandingPage/components/specialOffer';
import Navbar from '../components/LandingPage/components/navbar';

const LandingPage = ({ navigation }) => {
  return (
    <View>
      {/* <Header/> */}
    <ScrollView>
        {/* <Header navigation={navigation}/>                                                            */}
        <ImageSection/>
        <PopularCategories navigation={navigation}/>
        <SpecialOffer/>
        <SignUp/>
        <Footer/>
        
    </ScrollView>
    {/* <Navbar/> */}
    </View>
  );
};

export default LandingPage;
