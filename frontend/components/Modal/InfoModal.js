import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ModalComponentStyles } from './ModalComponentStyles';
export const InfoModal = ({ visible, handleModal, title, text }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => { handleModal(false) }}
        >
            <TouchableWithoutFeedback onPress={() => { handleModal(false) }}>
                <View style={ModalComponentStyles.overlay}>
                    <TouchableOpacity activeOpacity={1} style={{ ...ModalComponentStyles.container, ...globalStyles.shadow }}>
                        <View style={ModalComponentStyles.titleContainer}>
                            <Text style={{ ...globalStyles.subtitleText, ...ModalComponentStyles.title }}>{title}</Text>
                        </View>
                        <View style={ModalComponentStyles.modalContent}>
                            <Text style={ModalComponentStyles.text}>{text}</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>


        </Modal>
    )


}