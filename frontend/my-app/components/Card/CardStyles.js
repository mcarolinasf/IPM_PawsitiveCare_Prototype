import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const CardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 146,
    width: 115,
    margin: 5,
    marginBottom: 65,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: colors.secondary,
    height: 146,
    width: 115,
    margin: 5,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "center"

  },
  text: {
    padding: 5,
    backgroundColor: colors.white
  },
  selectedText: {
    padding: 5,
    backgroundColor: colors.secondary
  },
  image: {
    height: 120,
    width: 115,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: colors.white,
    borderRadius: 25

  }

});
