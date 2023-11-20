import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { MenuCardStyles } from './MenuCardStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';




export default function MenuCard({ iconName, title, navigateTo, subtitile, stateHandeler, navigation }) {


    const pressHandler = () => {
        navigation.navigate(navigateTo)
    }

    /*  const stateHandeler = () => {
 
     } */

    // If navigateTo do pressHandler else do fucntion?

    return (
        <TouchableOpacity onPress={() => navigateTo ? pressHandler() : stateHandeler()} style={globalStyles.shadow}>
            <View style={MenuCardStyles.container}>
                <View style={MenuCardStyles.circle}>
                    <FontAwesome5 name={iconName} size={23} color={colors.primary} />
                </View>

                <Text style={MenuCardStyles.title}> {title}</Text>
                {subtitile &&
                    <Text style={{ ...globalStyles.secondaryText, fontSize: 11 }}>{subtitile}</Text>
                }

            </View>
        </TouchableOpacity>
    )


}