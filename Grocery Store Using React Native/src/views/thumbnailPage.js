// thumbnailPage.js
import React from 'react';
import { ScrollView, View } from 'react-native';
import Thumbnail from '../components/ThumbnailPage/components/thumbnail';
import Footer from '../components/LandingPage/components/footer';

const ThumbnailPage = ({navigation}) => {
  return (
    <ScrollView>
      <Thumbnail navigation={navigation} />
      <Footer/>
    </ScrollView>
  );
};

export default ThumbnailPage;
