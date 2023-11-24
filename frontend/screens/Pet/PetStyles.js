import { StyleSheet, Dimensions } from "react-native";
import colors from '../../styles/colors';


const screenWidth = Dimensions.get("window").width;

export const PetStyles = StyleSheet.create({


    container: {
        justifyContent: "center",
        alignItems: "center",
    },


    image: {
        borderRadius: 10,
        height: screenWidth * 0.6,
        width: screenWidth * 0.89,


    },

    chart: {
        marginVertical: 50,
        borderRadius: 20,
        height: screenWidth * 0.6,
        width: screenWidth * 0.89,
    }




})