import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { TodoItemStyles } from './TodoItemStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

export default function TodoItem({ item }) {

    return (
        <TouchableOpacity >
            <View style={TodoItemStyles.container}{...globalStyles.shadow}>
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color={colors.secondary} />
                <View>
                    <Text style={TodoItemStyles.text}>{item.text}</Text>
                    <Text>{item.type}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )



}