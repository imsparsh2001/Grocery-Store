import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(239, 239, 252)",
    width: "100%",
    padding: 10,
    paddingTop: 30,
    lineHeight: 1.7,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewFlex: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container2: {
    width: "100%",
    marginBottom: 10,
    fontSize: 14,
    paddingLeft: 20,
  },
  container3: {
    width: "50%",
    marginBottom: 10,
    fontSize: 14,
    paddingLeft: 20,
  },
  category: {
    width: "50%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  socialTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  social: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  appLink:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  icon: {
    padding: 2,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "coin",
    width: 25,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    padding: 2,
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  customhr:{
    borderTopWidth:1,
    width:"100%",
    borderColor:"grey"
  },
});
