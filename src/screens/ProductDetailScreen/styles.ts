import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  image: {
    height: 300
  },
  name: {
    fontWeight: "700",
    fontSize: 20,
    marginVertical: 16,
    color: "#000000"
  },
  description: {
    color: "#000000"
  },
  bottom: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  price: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000000"
  },
  button: {
    backgroundColor: "#2A59FE",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  buttonLabel: {
    color: "#FFFFFF"
  }
});