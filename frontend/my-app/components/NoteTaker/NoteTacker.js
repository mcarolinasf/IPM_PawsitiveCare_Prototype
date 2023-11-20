import React, { useState } from 'react'

import { View, Text, TextInput } from 'react-native'
import { globalStyles } from "../../styles/globalStyles";
import { NoteTackerStyles } from './NoteTackerStyles';
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors'
import Divider from '../../components/Divider'
import { ModalComponent } from '../Modal/ModalComponent';



export default function NoteTacker({ item }) {

    const [menuModalVisible, setMenuModalVisible] = useState(false)

    const actions = [
        { name: 'Edit', action: 'do something' },
        { name: 'Delete', action: 'do something' }
    ]

    const handleMenuPopUp = () => {
        setMenuModalVisible(!menuModalVisible);
    }


    return (
        <View style={NoteTackerStyles.container}{...globalStyles.shadow}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                {/* Add item data */}
                <Text style={globalStyles.secondaryText}>5 of October</Text>
                <Entypo name="dots-three-horizontal" size={24} color={colors.secondary} onPress={handleMenuPopUp} />
            </View>
            <Divider />
            <View >
                <TextInput autoFocus={true} style={NoteTackerStyles.input} multiline={true} />
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
