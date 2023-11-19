import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import UserSessionContext from '../../services/UserSessionContext'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header/Header.js'
import { ProfileStyles } from './ProfileStyles.js'

export const Profile = () => {
    
    const { user } = useContext(UserSessionContext)
    //console.log("USER: " + user.name + user.email + user.pwd)

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'My Profile'} goBack/>
                <Image style={ProfileStyles.image} source={{ uri: user.photoUrl}}></Image>
                <Text style={globalStyles.subtitleText}>{user.name}</Text>
            </ScrollView>
        </SafeAreaView >
    )

}
