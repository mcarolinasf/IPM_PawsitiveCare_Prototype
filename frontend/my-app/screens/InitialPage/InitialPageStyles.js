import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const screenWidth = Dimensions.get("window").width;
const logoMeasures = screenWidth * 0.7;

export const InitialPageStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginVertical: 125,
    width: logoMeasures,
    height: logoMeasures,
  },

  button: {
    alignItems: "center",
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.primary,
    width: logoMeasures,
    padding: 10,
  },

  signIn: {
    color: colors.white,
    fontSize: 16,
  },

  signUp: {
    color: colors.primary,
    fontSize: 16,
  },

  noAccount: {
    fontSize: 12,
    color: colors.secondary,
    marginTop: 25,
    marginBottom: 5,
  },
});
