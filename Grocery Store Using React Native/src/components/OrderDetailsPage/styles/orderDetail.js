import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  screen: {
    height:"100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  orderSearch: {
    width: "90%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
    marginTop: "5%",
  },
  orderSort: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2%",
  },
  orderPicker: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
  },
  logout: {
    color: "#fff",
    backgroundColor: "crimson",
    padding: "2%",
    borderRadius: 5,
    marginLeft: 45,
  },
  ScrollViewWidth: {  
    width:"100%",
  },
  orderView: {
    width: "100%",
    display: "flex",
    flex:1,
    justifyContent: "center",
    alignitems: "center",
    padding: 20,
    // paddingBottom:50
  },
  order: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  orderData: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderID: {
    fontWeight: "bold",
    fontSize: 16,
  },
  orderStatus: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 5,
  },
  orderDate: {
    fontSize: 14,
    color: "grey",
  },
  customhr: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "grey",
    marginTop: 3,
    marginBottom: 3,
  },
  orderPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
