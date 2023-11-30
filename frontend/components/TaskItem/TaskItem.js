import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { TaskItemStyles } from './TaskItemStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { PetsData } from '../../data/PetsData';
import { getTypeColor } from '../../services/utils';
import { petsApi } from '../../api';


export default function TaskItem({ task, pressHandler }) {

    const [pet, setPet] = useState({})

    useEffect(() => {
        getPet();
    }, [])

    const getPet = async () => {
        try {
            const petRes = await petsApi.getPet(task.petId)
            setPet(petRes)
        } catch (error) {
            console.log("Error Message: " + error.message)
        }
    }

    return (
        <TouchableOpacity
            onPress={() => pressHandler(task)} style={globalStyles.shadow} >
            <View style={TaskItemStyles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name={task.done ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color={colors.secondary} />
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