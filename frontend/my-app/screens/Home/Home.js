import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, Button } from 'react-native'
import Card from '../../components/Card/Card'
import Divider from '../../components/Divider'
import TaskItem from '../../components/TaskItem/TaskItem.js'
import { globalStyles } from '../../styles/globalStyles'
import { HomeStyles } from './HomeStyles'
import navigationScreens from '../../navigation/navigationPaths'
import { AntDesign } from '@expo/vector-icons';
import colors from '../../styles/colors'
import Header from '../../components/Header/Header'
import UserSessionContext from '../../services/UserSessionContext.js'
import navigationPaths from '../../navigation/navigationPaths'
import { PetsData } from '../../data/PetsData.js'
import { TasksData } from '../../data/TasksData.js'


export const Home = ({ navigation }) => {

  const [pets, setPets] = useState([]);
  const [tasks, setTasks] = useState([]);

  const { user } = useContext(UserSessionContext);

  const [toDos, setToDos] = useState([
    { key: 0, text: 'Med 1', type: 'Health', time: '10:30', animal: { key: 0, name: 'Max', age: 5, photoUrl: 'https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg' } },
    { key: 1, text: 'Med 2', type: 'Feeding', time: '10:30', animal: { key: 1, name: 'Floppy', age: 3, photoUrl: 'https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg' }, },
    { key: 2, text: 'Lay Down Exercise', type: 'Training', time: '10:30', animal: { key: 2, name: 'Whiskers', age: 7, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnhjZPqOwRcDXdFn5gEY49CVEb7QIiat4UA&usqp=CAU' } }
  ])


  const cardPressHandler = (item) => {
    navigation.navigate(navigationScreens.pet, { pet: item });
  }

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    var petIds = user.petIds;
    
    //Set pets
    var pets = petIds.map((id) => PetsData[id]);
    setPets(pets);
 
    //Set tasks
    const tasks = pets.flatMap((pet) =>
      pet.tasksIds.map((id) => TasksData[id])
    );
    setTasks(tasks); 

  }

  const handleTaskPress = (key) => {
    setTasks((prevTasks) => (
      prevTasks.filter(task => task.id != key)
    ));
  }

  const addPetButtonPressed = () => {
    navigation.navigate(navigationScreens.addPet);
  }

  const pageTitle = 'Home'

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={pageTitle} showProfile />
        <ScrollView horizontal={true}>
          {pets.map(item => (
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
            tasks.map(task => (
              <TaskItem key={task.id} task={task} pressHandler={handleTaskPress} />
            ))
          }
        </View>
        
      </ScrollView>
    </SafeAreaView >
  )
}


