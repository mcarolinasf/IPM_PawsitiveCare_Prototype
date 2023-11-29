import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export const NavigationStyle = StyleSheet.create({

    container: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: colors.white,
        borderRadius: 15,
        height: 60,
    },

    pawIcon: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: colors.primary,
        position: "absolute",
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center'

    }

})