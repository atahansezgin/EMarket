import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#fff",
    padding:responsiveHeight(16)
  },
  total: {
    color: "#000",
    fontSize: 18, fontWeight: "bold"
  }
});