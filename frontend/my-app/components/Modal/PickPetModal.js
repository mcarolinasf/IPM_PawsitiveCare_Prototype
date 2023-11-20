
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ModalComponentStyles } from './ModalComponentStyles';
import { TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import UserSessionContext from '../../services/UserSessionContext.js'
import {getPetsByOwner} from '../../services/utils';




export const PickPetModal = ({ navigation, visible, handleModal, title, setPet }) => {

    const { user } = useContext(UserSessionContext);
    const [pets, setPets] = useState([]);


    const cardPressHandler = (pet) => {
        setPet(pet)
        handleModal(false)
    }


    useEffect(() => {
        setPets(getPetsByOwner(user))
    }, [])


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => { handleModal(false) }}
        >
        <TouchableWithoutFeedback onPress={() => {handleModal(false)}}>
            <View style={ModalComponentStyles.overlay}>
            <TouchableOpacity activeOpacity={1} style={{...ModalComponentStyles.container, ...globalStyles.shadow}}>
                <View style={ModalComponentStyles.titleContainer}>
                    <Text style={{...globalStyles.subtitleText, ...ModalComponentStyles.title}}>{title}</Text>
                </View>
                <View style={[ModalComponentStyles.modalContent, ModalComponentStyles.rowContainer]}>
                { pets && pets.map((pet) => 
                        <Card key={pet.id} item={pet} pressHandler={cardPressHandler} styleCard={{width: 70, height: 80,}} styleImage={{width: 70, height: 60}} />
                    )}
                </View>
            </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
        </Modal>
    );
};

