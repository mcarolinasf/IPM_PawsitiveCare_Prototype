import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const NewButtonStyles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },

  button: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 140,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5,
  },

  buttonText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 13,
  },
});
