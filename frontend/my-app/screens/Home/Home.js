import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, Button } from 'react-native'
import Card from '../../components/Card/Card'
import Divider from '../../components/Divider'
import TodoItem from '../../components/TodoItem/TodoItem'
import { globalStyles } from '../../styles/globalStyles'
import { HomeStyles } from './HomeStyles'
import navigationScreens from '../../navigation/navigationPaths'
import { AntDesign } from '@expo/vector-icons';
import colors from '../../styles/colors'
import Header from '../../components/Header/Header.js'
import UserSessionContext from '../../services/UserSessionContext.js'
import navigationPaths from '../../navigation/navigationPaths'
import { petsData } from '../../data/petsData';
import { toDosData } from '../../data/toDosData.js';


export const Home = ({ navigation }) => {

  const [animal, setAnimal] = useState(Object.values(petsData));
  const { user, clearUserSession } = useContext(UserSessionContext);

  const cardPressHandler = (item) => {
    navigation.navigate(navigationScreens.pet, { pet: item });
  }

  // If possible pass only key to todos
  const getAnimalByKey = (id) => (
    animal.find(animal.id == id)
  )




  useEffect(() => {
    getPets()
  }, [])


  const getPets = () => {
    const petIds = user.petIds;

    //For each petId retrieve information and then set the list of pet objects with setPets

  }

  const todoPressHandler = (key) => {
    setToDos((prevTodos) => (
      prevTodos.filter(todo => todo.id != key)
    ));
  }
  const addPetButtonPressed = () => {
    navigation.navigate(navigationScreens.addPet);
  }

  const pageTitle = 'Home'


  const handleLogout = () => {
    clearUserSession();
    navigation.navigate(navigationPaths.initial);
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={pageTitle} showProfile />
        <ScrollView horizontal={true}>
          {animal.map(item => (
            <Card key={item.id} item={item} pressHandler={cardPressHandler} />
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
              <TodoItem key={item.id} item={item} pressHandler={todoPressHandler} />
            ))
          }
        </View>
        <Button title='Logout' onPress={handleLogout} />
      </ScrollView>
    </SafeAreaView >
  )
}


