import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, Button, TextInput } from 'react-native'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import Divider from '../../components/Divider'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import { globalStyles } from '../../styles/globalStyles'
import { VetAppointmentsStyles } from './VetAppointmentsStyles'

import NoteTacker from '../../components/NoteTaker/NoteTacker'


export const VetAppointments = ({ navigation }) => {


    const [vetApp, setVetApp] = useState([{
        id: 1,
        date: '2023/11/19',
        petId: [1]
    },
    {
        id: 2,
        date: '2023/11/25',
        petId: [1]
    }

    ]);

    const addVetAppointment = () => {

        /* Todo: Add functionality */
    }


    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Vet Appoint'} goBack showProfile />
                <ScrollView horizontal={true}>
                    {
                        /* Todo: add "navigateTo" choose correct appointment to display */
                        vetApp.map(item => (
                            <MenuCard iconName={'paw'} title={'Vet App ' + item.id} subtitile={item.date} />
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