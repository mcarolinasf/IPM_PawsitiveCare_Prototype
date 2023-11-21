import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import colors from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyles';
import { CustomButton } from '../CustomButton/CustomButton';
import { ModalComponentStyles } from './ModalComponentStyles';

export const ConfirmationModal = ({ visible, handleModal, title, text, selected }) => {



    const handlePressYes = (selected) => {
        // TODO: delete selected
        handleModal(false)
    }

    const handlePressNo = () => {
        handleModal(false)
    }


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
                            <View style={ModalComponentStyles.confAction}>
                                <CustomButton title={'Yes'} onPressFunction={() => { handlePressYes(selected) }} />
                                <CustomButton title={'No'} onPressFunction={() => { handlePressNo() }} color={colors.secondary} />

                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>


        </Modal>
    )


}