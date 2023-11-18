import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import Card from '../../components/Card/Card'
import Divider from '../../components/Divider'
import TodoItem from '../../components/TodoItem/TodoItem'
import { globalStyles } from '../../styles/globalStyles'
import { HomeStyles } from './HomeStyles'


export const Home = () => {


  const [animal, setAnimal] = useState([
    { key: 0, name: 'Max', age: 5, photoUrl: 'https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg' },
    { key: 1, name: 'Floppy', age: 3, photoUrl: 'https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg' },
    { key: 2, name: 'Whiskers', age: 7, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnhjZPqOwRcDXdFn5gEY49CVEb7QIiat4UA&usqp=CAU' }
  ]);


  const [toDos, setToDos] = useState([
    { key: 0, text: 'Med 1', type: 'Health', time: '10:30', animal: 'Max' },
    { key: 1, text: 'Med 2', type: 'Health', time: '10:30', animal: 'Floppy' },
    { key: 2, text: 'Lay Down Exercise', type: 'Health', time: '10:30', animal: 'Whiskers' }
  ])

  const pressHandeler = (key) => {
    //redirect to pet page
    console.log(key)
  }


  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Text style={globalStyles.titleText}> Home </Text>
        <ScrollView horizontal={true}>
          {animal.map(item => (
            <Card key={item.key} item={item} pressHandeler={pressHandeler} />
          ))}
        </ScrollView>
        <Divider />
        <Text style={globalStyles.subtitleText}>Today</Text>
        <View>
          {
            toDos.map(item => (
              <TodoItem item={item} />
            ))
          }
        </View>


      </ScrollView>



    </SafeAreaView>
  )
}


