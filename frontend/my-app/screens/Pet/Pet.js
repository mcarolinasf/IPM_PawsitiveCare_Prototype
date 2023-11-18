import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { PetStyles } from './PetStyles'
import MenuCard from '../../components/MenuCard/MenuCard.js';
import Header from '../../components/Header.js';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';


export const Pet = ({ navigation, route }) => {
    const { pet } = route.params;

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={pet.name} navigation={navigation}/>
                <View >
                    <Image
                        style={PetStyles.image}
                        source={{
                            uri: pet.photoUrl
                        }}
                    />
                </View>
                <ScrollView horizontal={true}>
                    <MenuCard />
                </ScrollView>

            </ScrollView>
        </SafeAreaView >
    );

}