import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const screenWidth = Dimensions.get("window").width;

export const BodySTyles = StyleSheet.create({


    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },


    image: {
        borderRadius: 10,
        height: screenWidth * 0.4,
        width: screenWidth * 0.45,


    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }




})