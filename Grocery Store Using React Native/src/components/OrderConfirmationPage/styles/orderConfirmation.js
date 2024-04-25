import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    OrderConfirm: {
        backgroundColor: 'white',
        paddingLeft: 20,
        margin: '2% auto',
        paddingRight: 20, 
        height: '100%'
      },
      header: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
      },
      orderUpdatesHeader:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:2
      },
      mainbox: {
        marginTop: 20,
      },
      oneContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically in the center
        padding: 10,
      },
      iconContainer: {
        marginRight: 10,
      },
      textContainer: {
        flexDirection: 'column'
      },
      faIcon: {
        width: '5%',
      },
      orderText: {
        fontSize:16,
        fontWeight:'bold',
        fontSize: 15,
      },
      orderUpdates: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 5
      },
      textStyle: {
        color: 'gray',
      },
      sContainer:{
        marginTop: '1%',
        marginBottom: '3%',
        overflow: 'hidden',
      },
      shadowContainer: {
        marginTop: 5,
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: 'rgba(149, 157, 165, 0.2)',
        shadowOffset: { width: 5, height: 8 },
        shadowRadius: 24,
        shadowOpacity: 0.6,
      },
      blankSpace: {
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
      },
      tableContent:{
        borderWidth: 1,
        // borderBottomWidth:0,
        borderColor: "lightgrey",
        marginBottom: 50,
        borderRadius:5,
      },
      insideContent: {
        // borderBottomWidth: 1,
        borderColor: "lightgrey",
        padding: 12,
        flexDirection: 'row',
      },
      infoQ: {
        paddingRight: '6%',
      },
    });