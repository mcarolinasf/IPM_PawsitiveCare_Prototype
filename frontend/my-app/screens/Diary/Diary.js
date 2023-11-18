import React from 'react'
import { Button, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header'


export const Diary = () => {
  return ( 
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Diary"} showProfile />  
        <Text style={globalStyles.text}> Content of diary page </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
