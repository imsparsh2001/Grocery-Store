import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/thumbnail'

const InfoComp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.segment} id="product_detail">
        <Text style={styles.heading}>Nutrient Value & Benefits</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur rerum in beatae earum, dignissimos
          optio repellat repudiandae suscipit eligendi ad, mollitia omnis placeat blanditiis voluptas, itaque quisquam
          sed illo porro! Voluptas tenetur minus ea inventore repellat dolorem, cumque libero quibusdam? Minima,
          laborum. Molestiae repellat repudiandae facilis voluptatum nemo quia.
        </Text>

        <Text style={styles.heading}>Storage Tips</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab error quod aspernatur, adipisci ducimus
          cupiditate rem officia esse maxime iusto placeat nam sapiente dignissimos iste vero reprehenderit doloremque
          voluptatem?
        </Text>

        <Text style={styles.heading}>Unit</Text>
        <Text style={styles.paragraph}>3 units</Text>

        <Text style={styles.heading}>Seller</Text>
        <Text style={styles.paragraph}>DMart Pvt. LTD</Text>

        <Text style={styles.heading}>Disclaimer</Text>
        <Text style={styles.paragraph}>
          Images shown are a representation and may vary from the actual product. Every effort is made to maintain
          accuracy of information displayed.
        </Text>
      </View>
    </ScrollView>
  );
};



export {InfoComp};