import React, { useState, useContext, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import Header from '../../components/Header/Header'
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault'
import { globalStyles } from '../../styles/globalStyles'
import { BodySTyles as BodyStyles } from './BodyStyles'


export const Body = ({ navigation, route }) => {

    const { pet } = route.params;

    const [editedPet, setEditedPet] = useState({
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

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Body'} goBack showProfile />
                <View style={BodyStyles.container}{...globalStyles.shadow} >
                    <Image
                        style={BodyStyles.image}
                        source={{
                            uri: pet.photoUrl
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <TextInputDefault label={'Name'} setFunction={(value) => setEditedPet({ ...editedPet, name: value })} value={editedPet.name} placeholder={pet.name} />

                    <View style={BodyStyles.row}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <TextInputDefault label={'Age'} setFunction={(value) => setEditedPet({ ...editedPet, age: value })} value={editedPet.age} placeholder={pet.age.toString()} />
                            <TextInputDefault label={'Breed'} setFunction={(value) => setEditedPet({ ...editedPet, breed: value })} value={editedPet.breed} placeholder={pet.breed} />
                            <TextInputDefault label={'Type of coat'} setFunction={(value) => setEditedPet({ ...editedPet, typeOfCoat: value })} value={editedPet.typeOfCoat} placeholder={pet.typeOfCoat} />
                        </View>

                        <View style={{ flex: 1 }}>
                            <TextInputDefault label={'Gender'} setFunction={(value) => setEditedPet({ ...editedPet, gender: value })} value={editedPet.gender} placeholder={pet.gender} />
                            <TextInputDefault label={'Color'} setFunction={(value) => setEditedPet({ ...editedPet, color: value })} value={editedPet.color} placeholder={pet.color} />
                            <TextInputDefault label={'Tail'} setFunction={(value) => setEditedPet({ ...editedPet, tail: value })} value={editedPet.tail} placeholder={pet.tail} />
                        </View>
                    </View>
                    <TextInputDefault label={'Distinguish Marks'} setFunction={(value) => setEditedPet({ ...editedPet, distinguishMarks: value })} value={editedPet.distinguishMarks} placeholder={pet.distinguishMarks} />
                    <View style={BodyStyles.row}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <TextInputDefault label={'Weight'} setFunction={(value) => setEditedPet({ ...editedPet, weight: value })} value={editedPet.weight} placeholder={pet.weight} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInputDefault label={'Height'} setFunction={(value) => setEditedPet({ ...editedPet, height: value })} value={editedPet.height} placeholder={pet.height} />
                        </View>

                    </View>
                </View>




            </ScrollView>

        </SafeAreaView>
    )


}