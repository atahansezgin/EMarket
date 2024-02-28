import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  filter_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: responsiveHeight(16)
  },
  filter_button: {
    marginLeft: "auto"
  }
});