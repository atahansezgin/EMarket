import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "constants/dimension";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A59FE",
    borderRadius: 4,
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(16),
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    color: "#fff",
    fontSize: 16
  }
})