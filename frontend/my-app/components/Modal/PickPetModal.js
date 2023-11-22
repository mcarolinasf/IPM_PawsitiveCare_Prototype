
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { ModalComponentStyles } from './ModalComponentStyles';
import { TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import UserSessionContext from '../../services/UserSessionContext.js'
import { usersApi } from '../../api';


export const PickPetModal = ({ navigation, visible, handleModal, title, setPet, createEntry }) => {

    const { user } = useContext(UserSessionContext);
    const [pets, setPets] = useState([]);


    const cardPressHandler = (pet) => {
        console.log(pet)
        setPet(pet)
        if (createEntry) { createEntry(pet) }
        handleModal(false)

    }
    handleModal(false);


    const getPetsByOwner = async () => {
        try {
            const petsResponse = await usersApi.getUserPets(user.idU);
            setPets(petsResponse);
        } catch (error) {
            console.log("Error Message: " + error.message);
        }
    };

    useEffect(() => {
        getPetsByOwner();
    }, []);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                handleModal(false);
            }}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    handleModal(false);
                }}
            >
                <View style={ModalComponentStyles.overlay}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            ...ModalComponentStyles.container,
                            ...globalStyles.shadow,
                        }}
                    >
                        <View style={ModalComponentStyles.titleContainer}>
                            <Text
                                style={{
                                    ...globalStyles.subtitleText,
                                    ...ModalComponentStyles.title,
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ height: 450 }}
                        >
                            <View
                                style={[
                                    ModalComponentStyles.modalContent,
                                    ModalComponentStyles.rowContainer,
                                ]}
                            >
                                {pets &&
                                    pets.map((pet) => (
                                        <Card
                                            key={pet.id}
                                            item={pet}
                                            pressHandler={cardPressHandler}
                                            styleCard={{ width: 70, height: 80 }}
                                            styleImage={{ width: 70, height: 60 }}
                                        />
                                    ))}
                            </View>
                        </ScrollView>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
