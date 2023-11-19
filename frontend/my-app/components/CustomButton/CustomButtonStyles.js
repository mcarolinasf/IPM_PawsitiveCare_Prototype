import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const CustomButtonStyles = StyleSheet.create({

    button: {
        borderRadius: 10,
        backgroundColor: colors.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        paddingHorizontal: 10

    },
    contents:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    buttonText: {
        textAlign: "center",
        color: colors.white,
        fontSize: 18
    }

})