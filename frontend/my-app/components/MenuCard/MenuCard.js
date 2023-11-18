import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { MenuCardStyles } from './MenuCardStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';


export default function MenuCard() {

    return (
        <TouchableOpacity>
            <View style={MenuCardStyles.container}>
                <View style={MenuCardStyles.circle}>
                    <FontAwesome5 name="paw" size={23} color={colors.primary} />
                </View>

                <Text style={globalStyles.text}> Vet Ap.</Text>

            </View>
        </TouchableOpacity>
    )


}