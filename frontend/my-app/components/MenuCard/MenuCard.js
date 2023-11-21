import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { MenuCardStyles } from './MenuCardStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';




export default function MenuCard({ iconName, item, title, navigateTo, subtitle, setFunction, navigation, selected, pet }) {


    const handlePress = () => {
        navigateTo ? (pet ? navigation.navigate(navigateTo, { pet: pet }) : navigation.navigate(navigateTo))
            : setFunction(item.id)
    }



    return (
        <TouchableOpacity onPress={handlePress} style={globalStyles.shadow}>
            {/* Change container of selected */}
            <View style={selected ? ((item == selected) ? { ...MenuCardStyles.container, backgroundColor: colors.primary } : MenuCardStyles.container) : MenuCardStyles.container}>
                <View style={(item == selected) ? { ...MenuCardStyles.circle, backgroundColor: colors.white } : MenuCardStyles.circle}>
                    <FontAwesome5 name={iconName} size={23} color={colors.primary} />
                </View>

                <Text style={MenuCardStyles.title}> {title}</Text>
                {subtitle &&
                    <Text style={(item == selected) ? { ...globalStyles.secondaryText, fontSize: 11, color: colors.white } : { ...globalStyles.secondaryText, fontSize: 11 }}>{subtitle}</Text>
                }

            </View>
        </TouchableOpacity>
    )


}