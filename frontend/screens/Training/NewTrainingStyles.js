import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

export const NewTrainingStyles = StyleSheet.create({
  filtersView: {
    flexDirection: "row",
    width: 210,
    marginTop: 20,
    marginBottom: 10,
  },

  scrollView: {
    height: Dimensions.get("window").height,
    marginTop: 10,
  },

  view: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imageContainer: {
    marginBottom: 20,
  },

  image: {
    borderRadius: 25,
    height: 220,
    width: 160,
  },

  noPlansText: {
    color: colors.secondary,
  },
});
