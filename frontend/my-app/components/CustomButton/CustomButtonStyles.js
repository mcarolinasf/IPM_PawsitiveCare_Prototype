import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const CustomButtonStyles = StyleSheet.create({

    button: {
        borderRadius: 10,
        backgroundColor: colors.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 2,
        marginHorizontal: 70
    },

    buttonText: {
        color: colors.white,
    }

})