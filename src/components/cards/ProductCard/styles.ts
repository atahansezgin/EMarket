import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "constants/dimension";

export const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(170),
    height: responsiveHeight(302),
    padding: responsiveHeight(5),
  },
  favorite_button: {
    position: "absolute",
    top: responsiveHeight(13),
    right: responsiveWidth(13)
  },
  image: {
    width: responsiveWidth(150),
    height: responsiveWidth(150)
  },
  price: {
    color: "#2A59FE",
    marginVertical: responsiveHeight(12),
  },
  name: {
    color: "#000000",
    fontWeight: "500",
    marginVertical: responsiveHeight(12),
  },
  button: {
    backgroundColor: "#2A59FE",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: responsiveHeight(5),
  },
  buttonLabel: {
    color: "#FFFFFF"
  }
});