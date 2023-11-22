import React, { useContext, useState } from "react";
import {
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import Header from "../../components/Header/Header";
import { globalStyles } from "../../styles/globalStyles";
import { AddPetStyles } from "./AddPetStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../styles/colors";
import * as ImagePicker from "expo-image-picker";
import TextInputDefault from "../../components/TextInputDefault/TextInputDefault";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { usersApi } from "../../api";
import UserSessionContext from "../../services/UserSessionContext";

export const AddPet = ({ navigation }) => {

    const { user } = useContext(UserSessionContext);

    const [image, setImage] = useState();
    const [newPet, setNewPet] = useState({
        name: '',
        photoUrl: ''

    })


    //Review

    const addPet = async () => {

        try {
            console.log("USER: " + user.idU)
            console.log("NEW PET: " + Object.values(newPet))
            await usersApi.createPet(user.idU, newPet)
        } catch (error) {
            console.log("Error Message: " + error.message)
            setNewPet({
                name: '',
                photoUrl: '',

            });
        }

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
                        {!image &&
                            <View style={AddPetStyles.icon}>
                                <FontAwesome5 name="plus" size={24} color={colors.primary} />
                            </View>
                        }
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
                <View style={{ paddingVertical: 10 }}>
                    <CustomButton title={'Add pet'} onPressFunction={addPet} />
                </View>



            </ScrollView>
        </SafeAreaView >
    )

}
