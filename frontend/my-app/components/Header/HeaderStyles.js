import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({

    container: {
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

    backButton: {
        height: 35,
        width: 35,
        position: "absolute",
        left: 10,
        borderRadius: 20
    }
});