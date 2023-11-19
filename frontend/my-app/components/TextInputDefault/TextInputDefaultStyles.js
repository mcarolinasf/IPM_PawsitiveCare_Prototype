import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const TextInputDefaultStyles = StyleSheet.create({
  inputsLabel: {
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 3,

  },

  textInputs: {

    fontSize: 16,
    color: colors.secondary,
    borderRadius: 12,
    backgroundColor: colors.white,
    height: 54,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
