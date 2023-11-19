import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const screenWidth = Dimensions.get("window").width;

export const AddPetStyles = StyleSheet.create({


    container: {
        justifyContent: "center",
        alignItems: "center",

    },

    image: {
        borderColor: colors.primary,
        backgroundColor: colors.white,
        borderWidth: 2,
        height: screenWidth * 0.5,
        width: screenWidth * 0.5,
        borderRadius: 100,


    },
    icon: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        borderRadius: 100,
        height: 40,
        width: 40,



    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }


})