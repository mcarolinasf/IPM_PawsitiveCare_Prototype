
import { StyleSheet } from "react-native";
import colors from '../../styles/colors';


export const TodoItemStyles = StyleSheet.create({

    container: {
        padding: 15,
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'


    },

    text: {
        paddingHorizontal: 10,

    },

    tags: {
        backgroundColor: '#DF909B',
        borderRadius: 3,
        marginHorizontal: 10,
        width: 60
    },

    tagType: {
        color: colors.white,
        fontSize: 12,
        textAlign: 'center'
    },

    trailing: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlignVertical: 'center'

    },
    image: {
        height: 35,
        width: 35,
        borderRadius: 20,
        marginRight: 2,
        marginLeft: 10

    }



});