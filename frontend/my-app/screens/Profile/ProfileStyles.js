import { StyleSheet, Dimensions } from "react-native";
import colors from '../../styles/colors';

const screenWidth = Dimensions.get("window").width;

export const ProfileStyles = StyleSheet.create({

    image: {
        height: screenWidth * 0.6,
        width: screenWidth,
        borderRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },

    infoContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal:10,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'justify',
    },

    info: {
        marginLeft: 10,
        marginTop: 2,
    },

    buttonContainer: {
        marginTop: 40,
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },

})