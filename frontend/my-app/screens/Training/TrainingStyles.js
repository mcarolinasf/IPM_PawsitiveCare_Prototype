import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const screenWidth = Dimensions.get("window").width;
const contentWidth = screenWidth * 0.9;

export const TrainingStyles = StyleSheet.create({
  filterButtonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: contentWidth,
  },
});
