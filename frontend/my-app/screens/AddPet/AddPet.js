import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header/Header'
import { globalStyles } from '../../styles/globalStyles'
import { AddPetStyles } from './AddPetStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault'


export const AddPet = ({ navigation }) => {

    const [image, setImage] = useState();
    const [pet, setPet] = useState({
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
            setPet({ ...pet, photoUrl: result.assets[0].uri })
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
                    <TextInputDefault label={'Name'} setFunction={(value) => setPet({ ...pet, name: value })} value={pet.name} />

                    <View style={AddPetStyles.row}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <TextInputDefault label={'Age'} setFunction={(value) => setPet({ ...pet, age: value })} value={pet.age} />
                            <TextInputDefault label={'Breed'} setFunction={(value) => setPet({ ...pet, breed: value })} value={pet.breed} />
                            <TextInputDefault label={'Type of coat'} setFunction={(value) => setPet({ ...pet, typeOfCoat: value })} value={pet.typeOfCoat} />
                        </View>

                        <View style={{ flex: 1 }}>
                            <TextInputDefault label={'Gender'} setFunction={(value) => setPet({ ...pet, gender: value })} value={pet.gender} />
                            <TextInputDefault label={'Color'} setFunction={(value) => setPet({ ...pet, color: value })} value={pet.color} />
                            <TextInputDefault label={'Tail'} setFunction={(value) => setPet({ ...pet, tail: value })} value={pet.tail} />
                        </View>
                    </View>
                    <TextInputDefault label={'Distinguish Marks'} setFunction={(value) => setPet({ ...pet, distinguishMarks: value })} value={pet.distinguishMarks} />
                    <View style={AddPetStyles.row}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <TextInputDefault label={'Weight'} setFunction={(value) => setPet({ ...pet, weight: value })} value={pet.weight} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputDefault label={'Height'} setFunction={(value) => setPet({ ...pet, height: value })} value={pet.height} />
                        </View>

                    </View>
                </View>

                {/* Add button */}

            </ScrollView>
        </SafeAreaView >
    )

}