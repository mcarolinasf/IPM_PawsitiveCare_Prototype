import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";


const screenWidth = Dimensions.get("window").width;

export const NoteTackerStyles = StyleSheet.create({

    container: {

        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        margin: 5,
        marginVertical: 30,
        justifyContent: 'flex-start',
        height: screenWidth * 0.75
    },

    input: {
        //height: screenWidth * 0.65

    }
})