import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { PetStyles } from './PetStyles'
import MenuCard from '../../components/MenuCard/MenuCard.js';
import Header from '../../components/Header.js';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';
import TodoItem from '../../components/TodoItem/TodoItem';
import navigationPaths from '../../navigation/navigationPaths';
import UserSessionContext from '../../services/UserSessionContext.js';


export const Pet = ({ navigation, route }) => {
    
    const { pet } = route.params;

    const [toDos, setToDos] = useState([
        { key: 0, text: 'Med 1', type: 'Health', time: '10:30', animal: { key: 0, name: 'Max', age: 5, photoUrl: 'https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg' } },
        { key: 1, text: 'Med 2', type: 'Feeding', time: '10:30', animal: { key: 1, name: 'Floppy', age: 3, photoUrl: 'https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg' }, },
        { key: 2, text: 'Lay Down Exercise', type: 'Training', time: '10:30', animal: { key: 2, name: 'Whiskers', age: 7, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnhjZPqOwRcDXdFn5gEY49CVEb7QIiat4UA&usqp=CAU' } }
    ])

    const todoPressHandeler = (key) => {
        setToDos((prevTodos) => (
            prevTodos.filter(todo => todo.key != key)
        ));
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={pet.name} />
                <View >
                    <Image
                        style={PetStyles.image}{...globalStyles.shadow}
                        source={{
                            uri: pet.photoUrl
                        }}
                    />

                </View>
                <ScrollView horizontal={true}>
                    <MenuCard iconName={'paw'} title={'Vet Ap.'} navigation={navigation} navigateTo={navigationPaths.vetAppointments} />
                    <MenuCard iconName={'dog'} title={'Body'} navigation={navigation} navigateTo={navigationPaths.body} />
                    <MenuCard iconName={'pills'} title={'Medication'} navigation={navigation} navigateTo={navigationPaths.medication} />
                    <MenuCard iconName={'bone'} title={'Feeding'} navigation={navigation} navigateTo={navigationPaths.feeding} />
                </ScrollView>
                <Text style={globalStyles.subtitleText}>Today</Text>
                <View>
                    {
                        toDos.filter(toDo => toDo.animal.key == pet.key).map(item => (
                            <TodoItem key={item.key} item={item} pressHandeler={todoPressHandeler} />
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView >
    );

}