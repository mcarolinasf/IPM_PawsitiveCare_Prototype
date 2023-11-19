import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const ModalComponentStyles = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color for the overlay
    },

    container: {
        marginHorizontal: 35,
        marginVertical: '58%',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 10,
        paddingHorizontal:30,
        paddingVertical:20,
        shadowColor: colors.grey,
        shadowOffset: {width: 0, height: 2,},
    },

    actionContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:'100%',
    },

    titleContainer:{
        justifyContent:"center",
        alignItems: "center",
        width:'100%',
        borderBottomWidth:1,
        borderColor: colors.grey,
        paddingBottom:10
    },

    title :{
        fontWeight: 'bold',
    },

    modalContent:{
        paddingVertical:10,
        width: '100%',
    },

    actionButton:{
        backgroundColor:colors.primary
    },

    action: {
        marginVertical: 5,
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 5,
    },

    actionSelect: {
        backgroundColor: colors.white,
    },

    actionText: {
        
    }

 })