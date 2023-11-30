import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { TaskItemStyles } from './TaskItemStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { PetsData } from '../../data/PetsData';
import { getTypeColor } from '../../services/utils';
import { petsApi, tasksApi } from '../../api';
import { ConfirmationModal } from '../Modal/ConfirmationModal';


export default function TaskItem({ task, pressHandler, deleteHandler }) {

    const [pet, setPet] = useState({})
    const [menuModalVisible, setMenuModalVisible] = useState(false);

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
    const handleMenuPopUp = () => {
        setMenuModalVisible(!menuModalVisible);
    };

    

    return (
        <TouchableOpacity
            onPress={() => pressHandler(task)} style={globalStyles.shadow} onLongPress={() => setMenuModalVisible(true)}>
            <View style={!task.done ? TaskItemStyles.container : { ...TaskItemStyles.container, opacity: 0.5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name={task.done ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color={colors.secondary} />
                    <View>
                        <Text style={!task.done ? TaskItemStyles.text : { ...TaskItemStyles.text, textDecorationLine: 'line-through' }}>{task.text}</Text>
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

            <ConfirmationModal
                visible={menuModalVisible}
                onClose={handleMenuPopUp}
                handleModal={handleMenuPopUp}
                title={"Warning"}
                text={"Are you sure you want to delete this?"}
                deleteFunction={deleteHandler}
                selected={task.idT}
            />

        </TouchableOpacity >
    )



}