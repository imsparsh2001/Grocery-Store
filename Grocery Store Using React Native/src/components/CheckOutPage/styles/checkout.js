import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    chkout:{
        backgroundColor:'white',
        paddingLeft:'2%',
        paddingTop:'1%',
        height:'100%'
    },
    subheading:{
        fontWeight:'bold',
        fontSize:25,
    },
    delsections:{
      height:'auto',
      marginTop:20
    },
    inputfield:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:10,
        margin:5,
        height:45,
        padding:10
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      },
      popupBody: {
        backgroundColor: 'white',
        padding: 20,
        position: 'relative',
        borderRadius: 8,
        width: 360,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        zIndex: 3,
      },
      payment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      paymentIcon: {
        height: 24,
        width: 24,
      },
      paymentText: {
        fontSize: 20,
        marginLeft: 5,
      },
      boxbor: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        marginVertical: 5,
        width:'96%',
        marginRight:10, 
        borderRadius:10
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: 10,
      },
      label: {
        fontWeight: 'bold',
      },
      labelText:{
        color:'grey',
        fontSize:14,
        marginLeft:10
      },
      hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
      },
  
      cardnum: {
        marginVertical: 10,
      },
      carddetails: {
        // marginTop: 10,
      },
      nameoncard: {
        marginBottom: 10,
      },
      expiry: {
        marginBottom: 10,
      },
      cvv: {
        marginBottom: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 5,
        borderRadius:10,
      },
      pay:{
        marginLeft:5,
        color:'white'
      },
      Inputlabel: {
        paddingLeft:5,
        fontWeight: '400',
      },
      //delivery page styles

      mainContainer1: {
        width: "96%",
      },
      headerSection1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      iconTextStyle1: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      addButton1: {
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "green",
      },
      addressTypeContainer1: {
        color: "white",
      },
      addressTypeContent1: {
        color: "white",
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 15,
        width: "70%",
        margin: "2%",
        marginLeft: "15%",
        paddingBottom: "5%",
      },
      addressTypeHeader1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      radioButton1: {
        marginLeft: 0,
        width: 50,
      },
      // instruction page styles 

      container2: {
        marginTop: 50,
        color: "white",
      },
      header2: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        gap: 2,
        marginVertical: 10,
      },
      title2: {
        fontSize: 20,
      },
      subTitle2: {
        fontSize: 15,
        paddingBottom: 25,
        marginLeft: 3,
        marginBottom: 3,
      },
      input2: {
        paddingLeft: 10,
        borderWidth: 1,
        width: "96%",
        borderColor: "#BEBEBE",
        borderRadius: 10,
      },
      infoText2: {
        fontSize: 9.5,
        paddingBottom: 5,
        paddingLeft: 3,
        color: "grey",
      },
      buttonContainer2: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 10,
      },
      prevButton2: {
        backgroundColor: "lightgray",
        padding: 10,
        margin: 5,
        borderRadius: 5,
      },
      nextButton2: {
        backgroundColor: "green",
        padding: 10,
        margin: 5,
        borderRadius: 5,
      },
      buttonText2: {
        textAlign: "center",
        fontWeight: "500",
      },


})