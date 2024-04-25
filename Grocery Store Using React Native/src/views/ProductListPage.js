import React from 'react';
import { ScrollView, View } from 'react-native';
import ProductList from '../components/ProductList/components/productList';

const ProductListPage = ({navigation}) => {
  return (
    <ScrollView>
    {/* <View> */}
      <ProductList navigation={navigation}/>
    {/* </View> */}
    </ScrollView>
  );
};

export default ProductListPage;