import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, Button, TextInput } from 'react-native'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import Divider from '../../components/Divider'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import { globalStyles } from '../../styles/globalStyles'
import { VetAppointmentsStyles } from './VetAppointmentsStyles'


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


    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Vet Appoint'} goBack showProfile />
                <ScrollView horizontal={true}>
                    {
                        vetApp.map(item => (
                            <MenuCard iconName={'paw'} title={'Vet App ' + item.id} subtitile={item.date} />
                        ))
                    }
                </ScrollView>
                <Divider />
                <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                    <CustomButton title={'New Vet Appointment'} iconName={'plus'} />
                </View>
                <View style={VetAppointmentsStyles.container}>
                    <View style={{ padding: 5 }}>
                        <Text style={globalStyles.secondaryText}>5 of October</Text>
                    </View>
                    <Divider />
                    <TextInput style={VetAppointmentsStyles.input} multiline={true} />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}