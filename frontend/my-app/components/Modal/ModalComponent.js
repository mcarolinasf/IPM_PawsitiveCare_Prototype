import React from 'react';
import { View, Text, Modal, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ModalComponentStyles } from './ModalComponentStyles';
import { CustomButton } from '../CustomButton/CustomButton';

export const ModalComponent = ({ visible, onClose, title, actions }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
        <View style={ModalComponentStyles.container}>
            <View style={ModalComponentStyles.titleContainer}>
                <Text style={globalStyles.subtitleText}>{title}</Text>
            </View>
            <View style={ModalComponentStyles.modalContent}>
               { actions && actions.map((text) => 
                    <Text style={globalStyles.text}>{text}</Text>
                )}
            </View>

            <View style={ModalComponentStyles.actionContainer}>
                <CustomButton title={"Schedule"} style={ModalComponentStyles.actionButton} onPressFunction={onClose} />
                {/* <CustomButton title={"Schedule"} style={ModalComponentStyles.actionButton} onPress={onClose} >Cancel</CustomButton> */}
            </View>
        </View>
    </Modal>
  );
};

