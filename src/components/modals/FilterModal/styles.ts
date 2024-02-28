import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(16)
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  field: {
    flex: 1,
    marginVertical: responsiveHeight(16)
  },
  title: {
    fontSize: 12,
    color: "gray",
    marginBottom: responsiveHeight(16)
  }
});