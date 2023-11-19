import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import { globalStyles } from '../../styles/globalStyles'
import { AddPetStyles } from './AddPetStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault'


export const AddPet = ({ navigation }) => {

    const [image, setImage] = useState();

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
        }
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Add Pet'} />
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
                    <Text style={globalStyles.subtitleText}>Name</Text>
                    <TextInputDefault />
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Age</Text>
                        <TextInputDefault />
                        <Text>Age</Text>
                        <TextInputDefault />
                    </View>
                    <Text>Age</Text>
                    <TextInputDefault />
                    <TextInputDefault />



                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

}