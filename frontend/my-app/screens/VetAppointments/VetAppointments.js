import React, { useState, useContext, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import Divider from '../../components/Divider'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import { globalStyles } from '../../styles/globalStyles'
import UserSessionContext from '../../services/UserSessionContext.js'
import { PetsData } from '../../data/PetsData'
import { VetAppointmentsData } from '../../data/VetAppointmentsData'

import NoteTacker from '../../components/NoteTaker/NoteTacker'
import { PickPetModal } from '../../components/Modal/PickPetModal'
import { dateToString } from '../../services/utils'
import { TaskType } from '../../data/TaskType'
import { petsApi } from '../../api'


export const VetAppointments = ({ navigation }) => {

    const { user } = useContext(UserSessionContext);

    const [vetApp, setVetApp] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState({
        title: 'Vet App ',
        type: TaskType.HEALTH,
        date: dateToString(new Date()),
        idP: '',
        ownersIds: []
    });
    const [selectPetModal, setSelectPetModal] = useState(false)
    const [pet, setPet] = useState(false)

    const addVetAppointment = async (pet) => {

        setSelectedEntry({ ...selectedEntry, idP: pet.idP, ownersIds: pet.ownersIds })


        try {

            const newEntry = {
                title: selectedEntry.title,
                type: selectedEntry.type,
                date: selectedEntry.date,
                idP: pet.idP,
                ownersIds: pet.ownersIds
            }

            console.log('PeeeeAlgoooooooooooooottt ' + Object.values(newEntry))


            await petsApi.createEntry(pet.idP, newEntry)
        } catch (error) {
            console.log("Error Message: " + error.message)
        }

    }

    const handlePetModal = (value) => {
        setSelectPetModal(value)


    }


    const getData = async () => {

        var petIds = user.petIds;

        var pets = petIds.map((id) => PetsData[id]);

        // Set Entrys
        const vetApps = pets.flatMap((pet) => pet.vetAppointIds.map((id) => VetAppointmentsData[id]));
        setVetApp(vetApps);

        if (vetApps.length > 0) {
            setSelectedEntry(vetApps[vetApps.length - 1]);
        }

    }

    useEffect(() => {
        getData()
    }, []);



    const selectVetApp = (itemId) => {

        if (selectedEntry && selectedEntry.id === itemId) {
            return;
        }

        const selectedVetApp = vetApp.find(entry => entry.id === itemId);

        // Update selectedEntry with the selected diary entry
        setSelectedEntry(selectedVetApp);
    }



    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Vet\nAppointments'} goBack showProfile />
                <ScrollView horizontal={true}>
                    {
                        /* Maybe change direction of list */
                        vetApp.slice().reverse().map(item => (
                            <MenuCard key={item.id} iconName={'paw'} title={item.title + item.id} item={item} subtitle={item.date} setFunction={selectVetApp} selected={selectedEntry} />
                        ))
                    }
                </ScrollView>
                <Divider />
                <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                    <CustomButton title={'New entry'} iconName={'plus'} onPressFunction={() => handlePetModal(true)} />
                </View>
                {/* Todo: Add pop up and its functionality */}
                <NoteTacker selectedEntry={selectedEntry} />
            </ScrollView>

            <PickPetModal
                navigation={navigation}
                visible={selectPetModal}
                handleModal={handlePetModal}
                title={'Select your pet'}
                setPet={setPet}
                createEntry={addVetAppointment}

            />

        </SafeAreaView>
    )
}