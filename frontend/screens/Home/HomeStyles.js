import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

export const HomeStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    height: 35,
    width: 35,
    position: "absolute",
    right: 10,
    borderRadius: 20,
  },
  button: {
    //position: 'absolute'
    backgroundColor: colors.white,
    borderRadius: 5,
    top: 60,
    height: 33,
    right: 0,
    marginHorizontal: 10,
  },

  tasksView: {
    marginBottom: 90,
    height: Dimensions.get("window").height - 90,
  },
});