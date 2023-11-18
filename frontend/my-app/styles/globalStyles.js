import { StyleSheet } from "react-native";
import colors from "./colors";

export const globalStyles = StyleSheet.create({

    container: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 20,

    },

    header: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative'


    },
    image: {
        height: 35,
        width: 35,
        position: "absolute",
        right: 10,
        borderRadius: 20
    },

    titleText: {
        //fontFamily: 'poppins',
        fontSize: 30,
        padding: 30,
        color: colors.text,
        fontWeight: "bold",
        textAlign: 'center'
    },

    subtitleText: {
        //fontFamily: 'poppins',
        fontSize: 20,
        color: colors.text,
        paddingVertical: 5,
        fontWeight: "semibold",
    },

    text: {
        //fontFamily: 'poppins',
        fontSize: 16,
        color: colors.text,

    },
    secondaryText: {
        color: colors.secondary,
        textAlignVertical: 'center'

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
        shadowColor: "black",
        shadowOffset: {
            height: 3,
            width: 0,
        },
        shadowOpacity: 0.25,
        elevation: 4
    },

    divider: {
        backgroundColor: colors.secondary,
        opacity: 0.5,
        height: 1,
        marginVertical: 14,
        marginHorizontal: 4
    },




})