import React, { useState } from 'react';
import { View,Text} from 'react-native';
import { InfoComp } from './information';
import { DetailComp } from './details';
import { ReviewComp } from './review';
import { SellerComp } from './sellerinfo';


function Navigation() {
  const [activeComponent, setActiveComponent] = useState('info');

  const handleTabClick = (component) => {
    setActiveComponent(component);
  };

  return (
<View style={{ width: '100%', height: '50%', paddingBottom: '0', marginBottom: '0',marginTop:30}}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 35, width: 'auto' ,borderBottomWidth: 0.5, borderBottomColor: 'black'}}>
    <Text style={{ color: activeComponent === 'info' ? 'green' : 'black', borderBottomWidth: activeComponent === 'info' ? 2 : 0, borderBottomColor: 'green' }} onPress={() => handleTabClick('info')}>Product Details</Text>
    <Text style={{ color: activeComponent === 'details' ? 'green' : 'black', borderBottomWidth: activeComponent === 'details' ? 2 : 0, borderBottomColor: 'green' }} onPress={() => handleTabClick('details')}>Information</Text>
    <Text  style={{ color: activeComponent === 'review' ? 'green' : 'black', borderBottomWidth: activeComponent === 'review' ? 2 : 0, borderBottomColor: 'green' }} onPress={() => handleTabClick('review')}>Reviews</Text>
    <Text style={{ color: activeComponent === 'sellerinfo' ? 'green' : 'black', borderBottomWidth: activeComponent === 'sellerinfo' ? 2 : 0, borderBottomColor: 'green' }} onPress={() => handleTabClick('sellerinfo')}>Seller Info</Text>
  </View>

  {activeComponent === 'info' && <InfoComp />}
  {activeComponent === 'details' && <DetailComp />}
  {activeComponent === 'review' && <ReviewComp />}
  {activeComponent === 'sellerinfo' && <SellerComp />}
</View>
  );
}

export { Navigation };
