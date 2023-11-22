import React, { useContext, useState } from 'react'
import { View, Button, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import UserSessionContext from '../../services/UserSessionContext'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header/Header.js'
import { ProfileStyles } from './ProfileStyles.js'
import colors from '../../styles/colors.js'
import { CustomButton } from '../../components/CustomButton/CustomButton.js'
import navigationPaths from '../../navigation/navigationPaths.js'

export const Profile = ({ navigation }) => {

    const { user, clearUserSession } = useContext(UserSessionContext)

    const handleLogout = () => {
        clearUserSession();
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'My Profile'} goBack />

                <View style={{ ...ProfileStyles.containerImage }} >
                    <Image style={{ ...ProfileStyles.image, ...globalStyles.shadow }} resizeMode={'cover'} source={{ uri: user.photoUrl ? user.photoUrl : 'https://www.verywellmind.com/thmb/pwEmuUJ6KO9OF8jeiQCDyKnaVQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1187609003-73c8baf32a6a46a6b84fe931e0c51e7e.jpg' }} ></Image>
                </View>


                <View style={ProfileStyles.infoContainer}>
                    <Text style={globalStyles.subtitleText}> Name: </Text>
                    <Text style={{ ...globalStyles.text, ...ProfileStyles.info }}>{user.name}</Text>
                </View>

                <View style={ProfileStyles.infoContainer}>
                    <Text style={globalStyles.subtitleText}> Email: </Text>
                    <Text style={{ ...globalStyles.text, ...ProfileStyles.info }}>{user.idU}</Text>
                </View>

                <View style={ProfileStyles.buttonContainer}>
                    <CustomButton title={"Logout"} onPressFunction={handleLogout} />
                </View>

            </ScrollView>
        </SafeAreaView >
    )

}
