import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { MenuCardStyles } from './MenuCardStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';




export default function MenuCard({ iconName, title, navigateTo, navigation }) {


    const pressHandeler = () => {
        navigation.navigate(navigateTo)
    }

    return (
        <TouchableOpacity onPress={() => pressHandeler()} style={globalStyles.shadow}>
            <View style={MenuCardStyles.container}>
                <View style={MenuCardStyles.circle}>
                    <FontAwesome5 name={iconName} size={23} color={colors.primary} />
                </View>

                <Text style={MenuCardStyles.title}> {title}</Text>

            </View>
        </TouchableOpacity>
    )


}