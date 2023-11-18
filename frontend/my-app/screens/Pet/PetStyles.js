import { StyleSheet, Dimensions } from "react-native";
import colors from '../../styles/colors';


const screenWidth = Dimensions.get("window").width;

export const PetStyles = StyleSheet.create({


    image: {
        height: screenWidth * 0.6,
        width: screenWidth,
        borderRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },




})