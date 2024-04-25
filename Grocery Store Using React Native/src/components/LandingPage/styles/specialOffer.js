import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container3: {
    backgroundColor: "white",
    marginTop: 30,
    width: "95%",
    marginLeft: "2.5%",
    marginBottom: "2.5%",
  },
  firstLine: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  secondLine: {
    color: "grey",
    marginBottom: 5,
  },
  viewlink: {
    color: "green",
  },
  specialoffers: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginTop:10,
  },
  percentage: {
    width: 30,
    backgroundColor: "rgb(116, 175, 253)",
    color: "white",
    fontSize: 14,
    borderRadius: 5,
    marginBottom: 2,
  },
  itemImg: {
    width: "50%", // Adjust the width to take up the space of two columns with some gap
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgb(235, 232, 232)",
    borderRightWidth: 1, // Vertical line between items
    borderBottomWidth: 1, // Horizontal line after each row
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  // customProgress: {
  //     height: 30,
  //     borderColor: 'red'
  // },
  offerPrice: {
    width:"100%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign:"center",
  },
  name: {
    width:"100%",
    fontSize: 14,
    textAlign:"center",
  },
  availableView: {    
    width:"100%",
    textAlign:"center",
    flexDirection: "row",
    marginTop: 4,
  },
  available: {
    textAlign:"center",
    color: "grey",
    fontSize: 14,
  },
  availableQuantity: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  ratingText: {
    color: "grey",
    paddingLeft: 2,
  },
  stock: {
    width:"100%",
    textAlign:"center",
    color: "rgb(5, 170, 5)",
    fontWeight: "600",
  },
});
