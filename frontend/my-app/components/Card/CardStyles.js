import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const CardStyles = StyleSheet.create({


    card: {
        backgroundColor: colors.white,
        height: 146,
        width: 115,
        margin: 5,
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "center"

    },
    text: {
        padding: 5,
    },
    image: {
        height: 120,
        width: 115,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

    }
})