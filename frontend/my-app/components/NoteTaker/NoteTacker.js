import React, { useState } from 'react'

import { View, Text, TextInput } from 'react-native'
import { globalStyles } from "../../styles/globalStyles";
import { NoteTackerStyles } from './NoteTackerStyles';
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors'
import Divider from '../../components/Divider'
import { ModalComponent } from '../Modal/ModalComponent';



export default function NoteTacker({ selectedEntry, setFunction }) {

    const [menuModalVisible, setMenuModalVisible] = useState(false)

    const actions = [
        { name: 'Delete', action: 'do something' }
    ]

    const handleMenuPopUp = () => {
        setMenuModalVisible(!menuModalVisible);
    }

    const handleTextChange = (text) => {
        setFunction(text);
    };


    return (
        <View style={NoteTackerStyles.container}{...globalStyles.shadow}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                <Text style={globalStyles.secondaryText}>{selectedEntry.date}</Text>
                <Entypo name="dots-three-horizontal" size={24} color={colors.secondary} onPress={handleMenuPopUp} />
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 5 }}>
                <TextInput
                    style={NoteTackerStyles.input}
                    multiline={true}
                    onChangeText={handleTextChange}
                    value={selectedEntry.text}
                />
            </View>

            <ModalComponent
                visible={menuModalVisible}
                onClose={handleMenuPopUp}
                title={'Options'}
                actions={actions}

            />
        </View>

    )



}
