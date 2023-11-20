import React, { useState, useContext } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, Button, TextInput } from 'react-native'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import Divider from '../../components/Divider'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import { globalStyles } from '../../styles/globalStyles'
import { VetAppointmentsStyles } from './VetAppointmentsStyles'
import UserSessionContext from '../../services/UserSessionContext.js'
import { PetsData } from '../../data/PetsData'
import { VetAppointmentsData } from '../../data/VetAppointmentsData'

import NoteTacker from '../../components/NoteTaker/NoteTacker'


export const VetAppointments = ({ navigation }) => {

    const { user } = useContext(UserSessionContext);

    const [vetApp, setVetApp] = useState([]);

    const [selectedEntry, setSelectedEntry] = useState('');

    const addVetAppointment = () => {

        /* Todo: Add functionality */
    }


    const getData = () => {
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



    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Vet Appoint'} goBack showProfile />
                <ScrollView horizontal={true}>
                    {
                        /* Todo: add "navigateTo" choose correct appointment to display */
                        vetApp.map(item => (
                            <MenuCard iconName={'paw'} title={'Vet App ' + item.id} subtitle={item.date} />
                        ))
                    }
                </ScrollView>
                <Divider />
                <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                    <CustomButton title={'New Vet Appointment'} iconName={'plus'} onPressFunction={addVetAppointment} />
                </View>
                {/* Todo: Add pop up and its functionality */}
                <NoteTacker />
            </ScrollView>

        </SafeAreaView>
    )
}