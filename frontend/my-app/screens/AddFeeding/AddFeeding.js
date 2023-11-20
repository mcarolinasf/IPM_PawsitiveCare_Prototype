import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header/Header'
import { globalStyles } from '../../styles/globalStyles'
import { AddFeedingStyles } from './AddFeedingStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { PetsData } from '../../data/PetsDataArray'
import { SelectList } from 'react-native-dropdown-select-list'



export const AddFeeding = ({ navigation }) => {

    const [image, setImage] = useState();
    const [petSelected, setSelected] = useState("");
    const [newFeeding, setNewFeeding] = useState({
        petName: '',
        food: '',
        startD: '',
        endD: '',
        period: '',
        doseage: ''
    });


    //Set pets
    let petNames = [];

    PetsData.forEach(element => {
        petNames.push(element.name)
    });

    let petIds = PetsData.map((pet) => pet.id);

    //Review

    const addFeeding = () => {

        const newFeedingId = Object.keys(FeedingsData).length;

        // Create a new pet object with the provided information
        const newFeedingObject = {
            id: newFeedingId,
            petName: petSelected,
            food: newFeeding.food,
            startD: newFeeding.startD,
            endD: newFeeding.endD,
            period: newFeeding.period,
            doseage: newFeeding.doseage
        };

        // Update the FeedingsData object with the new pet
        FeedingsData[newFeedingId] = newFeedingObject;

        // Log the updated FeedingsData object
        console.log(FeedingsData);

        // Clear the form or navigate to another screen if needed
        setNewFeeding({
            petName: '',
            food: '',
            startD: '',
            endD: '',
            period: '',
            doseage: ''
        });

        navigation.goBack();
    };



    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Add Feeding'} goBack />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={globalStyles.text}>To which pet?</Text>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={petNames}
                        save="name"
                        setFunction={() => alert("PET WAS SET")}
                    />
                    <TextInputDefault label={'Food'} setFunction={(value) => setNewFeeding({ ...newFeeding, food: value })} value={newFeeding.food} />
                    <TextInputDefault label={'Starting Date'} setFunction={(value) => setNewFeeding({ ...newFeeding, startD: value })} value={newFeeding.food} />
                    <TextInputDefault label={'End Date'} setFunction={(value) => setNewFeeding({ ...newFeeding, endD: value })} value={newFeeding.food} />
                    <TextInputDefault label={'Periodicity'} setFunction={(value) => setNewFeeding({ ...newFeeding, period: value })} value={newFeeding.food} />
                    <TextInputDefault label={'Dosage'} setFunction={(value) => setNewFeeding({ ...newFeeding, dosage: value })} value={newFeeding.food} />


                </View>
                <View style={{ paddingVertical: 10 }}>
                    <CustomButton title={'Add'} onPressFunction={addFeeding} />
                </View>



            </ScrollView>
        </SafeAreaView >
    )

}

export const getPetNames = () => {
    return (
        <SelectList
            setSelected={(val) => setSelected(val)}
            data={PetsData}
            save="name"
        />
    )
}