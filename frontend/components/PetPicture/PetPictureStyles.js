import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const PetPictureStyles = StyleSheet.create({

  container: {
    justifyContent: "center",
    alignItems: "center",
  },

    rectangle: {
        height: screenWidth * 0.3,
        width: screenWidth * 0.3,
        borderRadius: 10,
        overflow: "hidden"
      },

    

})