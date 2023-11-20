import React from 'react';
import { View, Text, Modal, Button, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ModalComponentStyles } from './ModalComponentStyles';
import { CustomButton } from '../CustomButton/CustomButton';
import colors from '../../styles/colors';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

export const ModalComponent = ({ navigation, visible, handleModal, title, actions, day }) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {handleModal(false)}}
    >
      <TouchableWithoutFeedback onPress={() => {handleModal(false)}}>
        <View style={ModalComponentStyles.overlay}>
          <TouchableOpacity activeOpacity={1} style={{...ModalComponentStyles.container, ...globalStyles.shadow}}>
            <View style={ModalComponentStyles.titleContainer}>
                <Text style={{...globalStyles.subtitleText, ...ModalComponentStyles.title}}>{title}</Text>
                {/* <Text> {day} (to remove) </Text> */}
            </View>
            <View style={ModalComponentStyles.modalContent}>
               { actions && actions.map((action) => 
                  <TouchableHighlight 
                    onPress={()=>{ navigation.navigate(action.navigateTo, {day: day}) }}
                    underlayColor={colors.white}
                    style={[ModalComponentStyles.action,]}>
                    <Text style={{...globalStyles.text, ...ModalComponentStyles.actionText}}>{action.name}</Text>
                  </TouchableHighlight>
                )}
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

