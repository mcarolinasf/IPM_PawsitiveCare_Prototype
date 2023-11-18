import React from 'react'
import { StyleSheet } from "react-native";
import colors from '../../styles/colors';


export const TodoItemStyles = StyleSheet.create({

    container: {
        padding: 20,
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: 'row'
    },
    text: {
        paddingHorizontal: 5
    }


});