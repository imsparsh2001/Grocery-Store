import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  column: {
    flex: 1, // Take up equal space in the row
    // marginLeft: 10,
  },
  navigationText: {
    marginLeft: 15,
    color: "green",
    fontSize: 14,
  },
  image: {
    width: 360,
    height: 360,
    resizeMode: "stretch",
    marginBottom: 15,
    borderRadius: 10, // Add margin for better visual separation between images
  },
  thumbnailContainer: {
    // width: "100%",
    // marginLeft: 17,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  thumbnailPhoto: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 5,
  },
  hoverEffect: {
    borderWidth: 2,
    borderColor: "green",
  },
  company: {
    // marginTop: 7,
    // marginBottom: 7,
    fontSize: 16,
    color: "green",
    fontWeight: "500",
  },
  productName: {
    fontSize: 25,
    color: "black",
    fontWeight: "500",
    // marginTop: 5
  },
  review: {
    fontSize: 20,
    color: "green",
  },
  exactPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "gray",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  discount: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
    // lineHeight: 'auto'
  },
  line: {
    width: "100%",
    borderBottomColor: "slategrey",
    borderBottomWidth: 1,
    // marginVertical: 10,
  },
  quantity: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  button: {
    width:30,
    textAlign:'center',
    fontSize: 16,
    fontWeight: "500",
    margin: 2,
    marginTop: 15,
    padding: 5,
    // paddingLeft: 9,
    // paddingRight: 9,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color:'grey'
  },
  addButton: {
    width:'40%',
    marginTop: 15,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgb(5, 170, 5)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tableContent: {
    fontSize: 14,
  },

  //aruna styles
  segment: {
    margin: "auto",
    width: "100%",
  },
  container: {
    padding: 10,
  },
  segment: {
    // marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  tableContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    paddingTop: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  evenRow: {
    backgroundColor: "white",
  },
  oddRow: {
    backgroundColor: "#BEBEBE",
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
