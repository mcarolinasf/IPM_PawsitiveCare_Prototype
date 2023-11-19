import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const ModalComponentStyles = StyleSheet.create({

    container: {
        marginHorizontal: 40,
        marginVertical: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
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

    modalContent:{
        paddingVertical:20
    },

    actionButton:{
        backgroundColor:colors.primary
    }

 })