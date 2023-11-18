import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const screenWidth = Dimensions.get("window").width;
const inputsAndButtonWidth = screenWidth * 0.8;
const buttonWidth = screenWidth * 0.5;

export const LoginStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 170,
  },

  inputsView: {
    width: inputsAndButtonWidth,
    paddingTop: 100,
    marginBottom: 75,
  },

  button: {
    justifyContent: "center",
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.primary,
    width: buttonWidth,
    height: 54,
  },

  buttonText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 16,
  },

  noAccountYet: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
