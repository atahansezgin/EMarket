import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/dimension";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: responsiveHeight(40),
    backgroundColor: "#d1d1d1",
    borderRadius: 14
  },
  input: {
    flex: 1,
    color: "#000",
    paddingVertical: 0,
  }
})