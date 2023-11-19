import React from 'react'

import { Text, SafeAreaView, ScrollView } from 'react-native';
import { Header } from '../../components/Header/Header';
import { globalStyles } from '../../styles/globalStyles';


export const ScheduleMedication = ({day}) => {

  return (
    <SafeAreaView style={globalStyles.container}>
        <ScrollView>

            <Header title={'My Profile'} goBack/>
            {/* <Image style={{...ProfileStyles.image, ...globalStyles.shadow}} source={{ uri: user.photoUrl}}></Image> */}

        </ScrollView>
    </SafeAreaView >
  )

}
