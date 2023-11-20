import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { AddPetStyles } from '../../screens/AddPet/AddPetStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors'


export const PetPicker = ({ url, handleModal }) => {


    const handlePress = () => {
        handleModal(true)
    }


    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={AddPetStyles.container}{...globalStyles.shadow} >
                <Image
                    style={AddPetStyles.image}
                    source={{
                        uri: url
                    }}
                />
                { !url &&
                    <View style={AddPetStyles.icon}>
                        <FontAwesome5 name="plus" size={24} color={colors.primary} />
                    </View>
                }
                
            </View>
        </TouchableOpacity>
    );
}