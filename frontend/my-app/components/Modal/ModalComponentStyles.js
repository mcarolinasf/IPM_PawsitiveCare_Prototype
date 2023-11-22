import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const ModalComponentStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black color for the overlay
  },

  container: {
    marginHorizontal: 20,
    marginVertical: "58%",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 2 },
  },

  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.grey,
    paddingBottom: 10,
  },

  title: {
    fontWeight: "bold",
  },

  modalContent: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },

  actionButton: {
    backgroundColor: colors.primary,
  },

  action: {
    marginVertical: 5,
    display: "flex",
    alignItems: "center",
    paddingVertical: 5,
  },

  actionSelect: {
    backgroundColor: colors.white,
  },

  actionText: {},

  rowContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    paddingBottom: 30,
  },
  confAction: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  newTrainingModalImage: {
    flex: 2,
    borderRadius: 15,
  },

  filtersView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },

  textInputsView: {
    width: "100%",
  },

  petsScrollView: {
    marginVertical: 50,
    width: "100%",
    paddingBottom: 0,
  },

  petsView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 65,
    height: 155,
  },
});
