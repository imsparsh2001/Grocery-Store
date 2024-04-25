import React from 'react';
import { View,Text, ScrollView} from 'react-native';
import { Delivery } from './delivery';
import styles from '../styles/checkout';


function Checkout({navigation}) {
    return (<View  style={styles.chkout}>
      <View><Text  style={styles.subheading}>Checkout</Text>
      <Text>Already have a account?Click here to <Text style={{color:"green"}}>Signin</Text>.</Text>
      </View>
      <ScrollView style={styles.delsections}>
        <Delivery navigation={navigation}/>
      </ScrollView>
      </View>
    );
}

export { Checkout };
