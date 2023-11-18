import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { TodoItemStyles } from './TodoItemStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

export default function TodoItem({ item, pressHandeler }) {


    const typeToColorMap = {
        Health: '#A1E1A4',
        Feeding: '#F0C49C',
        Training: '#DF909B'
    }

    const backgroundColor = typeToColorMap[item.type];

    return (
        <TouchableOpacity onPress={() => pressHandeler(item.key)}>
            <View style={TodoItemStyles.container}{...globalStyles.shadow}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color={colors.secondary} />
                    <View>
                        <Text style={TodoItemStyles.text}>{item.text}</Text>
                        <View style={[TodoItemStyles.tags, { backgroundColor }]}>
                            <Text style={TodoItemStyles.tagType}>{item.type}</Text>
                        </View>
                    </View>
                </View>
                <View style={TodoItemStyles.trailing}>
                    <Text style={globalStyles.secondaryText} >{item.time}</Text>
                    <Image
                        style={TodoItemStyles.image}
                        source={{ uri: item.animal.photoUrl }}
                    />

                </View>
            </View>

        </TouchableOpacity >
    )



}