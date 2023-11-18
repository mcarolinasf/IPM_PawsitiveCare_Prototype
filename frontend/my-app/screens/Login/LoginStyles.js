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

  inputsLabel: {
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 3,
  },

  textInputs: {
    fontSize: 16,
    color: colors.secondary,
    borderRadius: 12,
    backgroundColor: "#FBFBFB",
    height: 54,
    paddingHorizontal: 10,
    marginBottom: 15,
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
