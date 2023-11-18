import { StyleSheet } from "react-native";
import colors from '../../styles/colors';



export const MenuCardStyles = StyleSheet.create({

    container: {
        marginVertical: 25,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: colors.white,
        height: 100,
        width: 90,
        borderRadius: 20
    },
    circle: {
        borderRadius: 100,
        height: 40,
        width: 40,
        borderColor: colors.primary,
        borderWidth: 2,
        justifyContent: "space-evenly",
        alignItems: "center",

    },
})
