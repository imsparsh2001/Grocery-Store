import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "white",
    height:350
  },
  slide:{
    marginLeft: 3,
  },
  largeImage: {
    width: "95%",
    height: 300,
    margin: 10,
    borderRadius: 10,
  },
  smallImage: {
    width: "95%",
    height: 300,
    margin: "2%",
    borderRadius: 10,
  },
  leftImage: {
    position: "relative",
  },
  imageOverlay: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  rightTopImage: {
    position: "relative",
  },
  rightBottomImage: {
    position: "relative",
  },
  topImage: {
    position: "absolute",
    top: 55,
    left: 40,
  },
  bottomImage: {
    position: "absolute",
    top: 55,
    left: 40,
  },
  overlayPara: {
    fontSize: 15,
    color: "darkgrey",
  },
  imageOverlay2: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    marginBottom: 15,
  },
  highlights: {
    backgroundColor: "red",
    borderRadius: 5,
    marginLeft: 2,
  },
  highlight: {
    color: "white",
    padding: 2,
  },
  overlayHeading: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
  },
  overlayPar: {
    color: "rgb(105,105,105)",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  price: {
    color: "maroon",
  },
  greenButton: {
    backgroundColor: "#00cc00",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    border: "none",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  overlayTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 15,
  },
  overlayText: {
    color: "rgb(105,105,105)",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 15,
  },
  code: {
    color: "black",
    fontWeight: "900",
  },
  shopButton1: {
    width: "35%",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    border: "none",
    marginTop: 10,
  },
  shopButton2: {
    width: "42%",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    border: "none",
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
 
  
  
 
});

export default styles;
