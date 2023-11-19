import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { TaskItemStyles } from './TaskItemStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { PetsData } from '../../data/PetsData';
import { getTypeColor } from '../../services/utils';


export default function TaskItem({ task, pressHandler }) {

    const [pet, setPet] = useState({})

    useEffect(() => {
        getPet();
    }, [])

    const getPet = () => {
        setPet(PetsData[task.petId])
    }

    return (
        <TouchableOpacity
            onPress={() => pressHandler(task.id)} style={globalStyles.shadow} >
            <View style={TaskItemStyles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color={colors.secondary} />
                    <View>
                        <Text style={TaskItemStyles.text}>{task.text}</Text>
                        <View style={[TaskItemStyles.tags, { backgroundColor: getTypeColor(task.type) }]}>
                            <Text style={TaskItemStyles.tagType}>{task.type}</Text>
                        </View>
                    </View>
                </View>
                <View style={TaskItemStyles.trailing}>
                    <Text style={globalStyles.secondaryText} >{task.time}</Text>
                    <Image
                        style={TaskItemStyles.image}{...globalStyles.shadow}
                        source={{ uri: pet.photoUrl }}
                    />
                </View>
            </View>

        </TouchableOpacity >
    )



}