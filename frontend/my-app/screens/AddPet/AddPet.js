import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header/Header'
import { globalStyles } from '../../styles/globalStyles'
import { AddPetStyles } from './AddPetStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { PetsData } from '../../data/petsData'


export const AddPet = ({ navigation }) => {

    const [image, setImage] = useState();
    const [newPet, setNewPet] = useState({
        name: '',
        age: '',
        gender: '',
        breed: '',
        color: '',
        typeOfCoat: '',
        tail: '',
        distinguishMarks: '',
        height: '',
        weight: '',
        photoUrl: ''

    })


    //Review

    const addPet = () => {

        const newPetId = Object.keys(PetsData).length;

        // Create a new pet object with the provided information
        const newPetObject = {
            id: newPetId,
            name: newPet.name,
            breed: newPet.breed,
            age: newPet.age,
            photoUrl: newPet.photoUrl,
            tasksIds: [],
            ownersIds: ['admin'],
        };

        // Update the PetsData object with the new pet
        PetsData[newPetId] = newPetObject;

        // Log the updated PetsData object
        console.log(PetsData);

        // Clear the form or navigate to another screen if needed
        setNewPet({
            name: '',
            age: '',
            gender: '',
            breed: '',
            color: '',
            typeOfCoat: '',
            tail: '',
            distinguishMarks: '',
            height: '',
            weight: '',
            photoUrl: '',
        });

        navigation.goBack();
    };





    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setNewPet({ ...newPet, photoUrl: result.assets[0].uri })
        }
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Add Pet'} goBack />
                <TouchableOpacity onPress={pickImage}>
                    <View style={AddPetStyles.container}{...globalStyles.shadow} >
                        <Image
                            style={AddPetStyles.image}
                            source={{
                                uri: image
                            }}
                        />
                        <View style={AddPetStyles.icon}>
                            <FontAwesome5 name="plus" size={24} color={colors.primary} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 10 }}>
                    <TextInputDefault label={'Name'} setFunction={(value) => setNewPet({ ...newPet, name: value })} value={newPet.name} />

                    <View style={AddPetStyles.row}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <TextInputDefault label={'Age'} setFunction={(value) => setNewPet({ ...newPet, age: value })} value={newPet.age} />
                            <TextInputDefault label={'Breed'} setFunction={(value) => setNewPet({ ...newPet, breed: value })} value={newPet.breed} />
                            <TextInputDefault label={'Type of coat'} setFunction={(value) => setNewPet({ ...newPet, typeOfCoat: value })} value={newPet.typeOfCoat} />
                        </View>

                        <View style={{ flex: 1 }}>
                            <TextInputDefault label={'Gender'} setFunction={(value) => setNewPet({ ...newPet, gender: value })} value={newPet.gender} />
                            <TextInputDefault label={'Color'} setFunction={(value) => setNewPet({ ...newPet, color: value })} value={newPet.color} />
                            <TextInputDefault label={'Tail'} setFunction={(value) => setNewPet({ ...newPet, tail: value })} value={newPet.tail} />
                        </View>
                    </View>
                    <TextInputDefault label={'Distinguish Marks'} setFunction={(value) => setNewPet({ ...newPet, distinguishMarks: value })} value={newPet.distinguishMarks} />
                    <View style={AddPetStyles.row}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <TextInputDefault label={'Weight'} setFunction={(value) => setNewPet({ ...newPet, weight: value })} value={newPet.weight} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputDefault label={'Height'} setFunction={(value) => setNewPet({ ...newPet, height: value })} value={newPet.height} />
                        </View>

                    </View>
                </View>

                {/* Add button */}
                <CustomButton title={'Add pet'} onPressFunction={addPet} />



            </ScrollView>
        </SafeAreaView >
    )

}