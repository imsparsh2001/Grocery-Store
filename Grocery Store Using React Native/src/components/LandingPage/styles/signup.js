import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "fit-content",
    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  backgroundImage: {
    height: "fit-content",
    width: "100%",
    resizeMode: "cover",
    backgroundColor: "rgba(0, 30, 43, 1)",
    padding: 10,
    paddingBottom:0
  },
  text1: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    paddingTop: 10,
  },
  text3: {
    color: "silver",
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 10,
  },
  text4: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  emailInput: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "rgb(37, 218, 37)",
    borderRadius: 5,
    borderWidth: 0,
    padding: 5,
    marginLeft: 10,
  },
  textInput: {
    width: "50%",
    borderWidth: 1,
    padding: 5,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
