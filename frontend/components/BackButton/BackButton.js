import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { BackButtonStyles } from './BackButtonStyles';

export const BackButton = ({navigation}) => {

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <TouchableOpacity onPress={handleGoBack} style={BackButtonStyles.container}>
            <MaterialCommunityIcons name='chevron-left' size={35} color={colors.grey}/>
        </TouchableOpacity>
    )
}


