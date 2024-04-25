import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    popularCategories: {
      padding:'2%',
      // paddingBottom:0,
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    popularCategoriesList: {
      flexDirection: 'row',
    },
    categoryItem:{
      alignItems: 'center',
      padding: 10
    },
    image: {
      width: '110%',
      height: '110%',
      borderRadius: 50,
    },
    imgWrapper: {
      borderRadius: 80,
      overflow: 'hidden',
      backgroundColor: '#eae5e5',
      alignItems: 'center',
      justifyContent: 'center',
      height: 110,
      width: 110,
    },
    categoryText: {
      color: '#000',
      textAlign: 'center',
      marginTop: 10,
    },
  });


export default styles;