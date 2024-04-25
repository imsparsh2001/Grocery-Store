import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
    cart_heading:{
        marginLeft: 20,
        fontSize: 28,
        fontWeight: '800',
        marginVertical:3,
    },

    cart_subHeading:{
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '800',
        color: 'grey',
        // marginVertical:3,
    },
    cart_body:{
       
        backgroundColor:"white",
        width:"100%"
    },
    alertContainer: {
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        color: '#721c24',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        borderRadius: 7,
        width: 330
      },
      alertLink: {
        color: '#721c24',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      button: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginRight: 30,
        marginLeft: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
      continueShoppingButton: {
        backgroundColor: 'rgb(4, 188, 4)',
        marginBottom: 10,
      },
      updateButton: {
        backgroundColor: '#343a40',
      },
      buttonText:{
        color: 'white',
        fontWeight: 'bold',
      },
      summary_container:{
    
        padding: 15,
    },
      summary_box: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
      },
      summary_content: {
        padding: 35,
      },
      summary_heading: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
      },
      summary_list: {
        marginVertical: 20,
      },
      summary_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderRadius: 10,
      },
      bold_text: {
        fontWeight: 'bold',
      },
      action_btn: {
      
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
      },
      primary_action: {
        color: 'white',
        backgroundColor: 'rgb(4, 188, 4)',
      },
      primary_text:{
        color: 'white',
        fontSize:16,
        fontWeight: 'bold',
      },
      small_text:{
        fontSize:13,
        marginBottom: 10,
        color:"darkgrey"
      },
      small_text_span:{
        color: 'lightgreen',
      },
      promo_heading:{
        fontSize:20,
        fontWeight:"800",
        marginBottom: 10,
      },
      promo_email:{
        color: 'grey',
        marginBottom: 10,
      },
      text_input: {
      
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5,
        
      },
      secondary_action:{
        borderWidth: 1.2,
        borderColor: 'black',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 90,
       
      },
      productItem: {
        borderTopWidth: 2,
        borderTopColor: '#ddd',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'space-between',
        
      },
      productImage: {
        
        borderRadius: 5,
        width:"25%"
        
      },
      image: {
        flex: 1,
        borderRadius: 5,
        resizeMode: 'stretch'
      },
      productDetails: {
        marginLeft: 10,
        width: '30%',
      },
      productTitle: {
        textDecorationLine: 'none',
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5,
      },
      productPrice: {
        color: '#666',
        fontSize: 14,
      },
      productActions: {
        marginTop: 8,
      },
      removeItem: {
        textDecorationLine: 'none',
        color: '#999',
      },
      removeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      deleteIcon:{
        marginRight:5
      },
      quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
        // marginLeft:-10,
      },
      quantityBtn: {
        padding: 4,
        width: 25,
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2,
      },
      quantityInput: {
        width: 25,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
      },
      price: {
        fontWeight: 'bold',
        width:"15%"
      },
      navbar: {
        backgroundColor:"white",
        color:"black",
        padding:10,
    },
    nav_list: {
        flexDirection:"row",
        listStyle:"none",
        justifyContent:"flex-start",
        padding:0
    },
    nav_item: {
        marginHorizontal:10
    },
    nav_link: {
        color:"black",
        textDecorationLine:"none",
        fontSize:16.
    },
  });


export default styles;