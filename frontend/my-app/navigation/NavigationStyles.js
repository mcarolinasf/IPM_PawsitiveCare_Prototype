import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export const NavigationStyle = StyleSheet.create({

    container:{
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: colors.white,
        borderRadius: 15,
        height: 60,
    },

    

    /* tab: {
        alignItems: "center",
        justifyContent: "center",
        top: Platform.OS === 'ios' ? 10 : 0
    },

    text: {
        fontSize: 12,
        color: focused ? Colors.secondary : "#748c94"
    },

    icon: {
        width: 25,
        height: 25,
        tintColor: focused ? Colors.secondary : "#748c94"
    } */

})