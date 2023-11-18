import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import Card from '../../components/Card/Card'
import Divider from '../../components/Divider'
import TodoItem from '../../components/TodoItem/TodoItem'
import { globalStyles } from '../../styles/globalStyles'
import { HomeStyles } from './HomeStyles'
import navigationScreens from '../../navigation/navigationPaths'
import { AntDesign } from '@expo/vector-icons';
import colors from '../../styles/colors'
import Header from '../../components/Header.js'
import { petsData } from '../../data/petsData'


export const Home = ({ navigation }) => {

  const [animal, setAnimal] = useState(Object.values(petsData));

  const cardPressHandeler = (item) => {
    navigation.navigate(navigationScreens.pet, { pet: item });
  }

  // If possible pass only key to todos
  const getAnimalByKey = (key) => (
    animal.find(animal.key == key)
  )

  //Maybe pass only animal key
  const [toDos, setToDos] = useState([
    { key: 0, text: 'Med 1', type: 'Health', time: '10:30', animal: { key: 0, name: 'Max', age: 5, photoUrl: 'https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg' } },
    { key: 1, text: 'Med 2', type: 'Feeding', time: '10:30', animal: { key: 1, name: 'Floppy', age: 3, photoUrl: 'https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg' }, },
    { key: 2, text: 'Lay Down Exercise', type: 'Training', time: '10:30', animal: { key: 2, name: 'Whiskers', age: 7, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnhjZPqOwRcDXdFn5gEY49CVEb7QIiat4UA&usqp=CAU' } },

  ])

  const todoPressHandeler = (key) => {
    setToDos((prevTodos) => (
      prevTodos.filter(todo => todo.key != key)
    ));
  }
  const addPetButtonPressed = () => {
    console.log(1)
  }

  const pageTitle = 'Home'
  //Maybe turn header into a component

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={pageTitle} />
        <ScrollView horizontal={true}>
          {animal.map(item => (
            <Card key={item.key} item={item} pressHandeler={cardPressHandeler} />
          ))}
          <View style={HomeStyles.button} >
            <AntDesign name="plussquare" size={32} color={colors.primary} onPress={addPetButtonPressed} />
          </View>

        </ScrollView>
        <Divider />
        <Text style={globalStyles.subtitleText}>Today</Text>
        <View>
          {
            toDos.map(item => (
              <TodoItem key={item.key} item={item} pressHandeler={todoPressHandeler} />
            ))
          }
        </View>


      </ScrollView>

    </SafeAreaView >
  )
}


