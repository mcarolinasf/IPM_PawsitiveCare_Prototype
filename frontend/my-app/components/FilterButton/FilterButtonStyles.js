import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const FilterButtonStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderRadius: 11,
    width: 100,
    height: 35,
  },

  text: {
    //fontFamily: 'poppins',
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
});
