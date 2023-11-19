import React, { useState } from 'react'
import { Button, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import Divider from '../../components/Divider'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import NoteTacker from '../../components/NoteTaker/NoteTacker'


export const Diary = () => {

  const [entry, setEntry] = useState([

    {
      id: 0,
      title: 'Walk',
      date: '2023/11/19',
      petId: 1
    },
    {
      id: 1,
      title: 'Beach Day',
      date: '2023/11/19',
      petId: 1
    }
  ])


  const addDiaryEntry = () => {
    /* Todo: Add functionality */
  }




  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={'Diary'} goBack showProfile />
        <ScrollView horizontal={true}>
          {
            /* Todo: add "navigateTo" choose correct appointment to display */
            entry.map(item => (
              <MenuCard iconName={'paw'} title={item.title} subtitile={item.date} />
            ))
          }
        </ScrollView>
        <Divider />
        <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
          <CustomButton title={'New diary entry'} iconName={'plus'} onPressFunction={addDiaryEntry} />
        </View>
        {/* Todo: Add pop up and its functionality */}
        <NoteTacker />
      </ScrollView>

    </SafeAreaView>
  )
}
