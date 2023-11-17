import {StyleSheet } from "react-native";
import colors from "./colors";

export const globalStyles = StyleSheet.create({

    container: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 20,
    },

    titleText: {
        //fontFamily: 'poppins',
        fontSize: 30,
        color: colors.text,
        fontWeight: "bold",
    },

    subtitleText: {
        //fontFamily: 'poppins',
        fontSize: 20,
        color: colors.text,
    },

    text: {
        //fontFamily: 'poppins',
        fontSize: 16,
        color: colors.text,
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },

    button: {

    },

    goBackButton: {

    },

    shadow: {

    }


})