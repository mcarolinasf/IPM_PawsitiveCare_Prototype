import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, TouchableOpacity } from 'react-native'

export const goBackButton = () => {

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <TouchableOpacity onPress={handleGoBack}>
            
        </TouchableOpacity>
    )
}
