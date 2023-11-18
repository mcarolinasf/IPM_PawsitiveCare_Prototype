import React from 'react'
import { Button, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header'


export const Calendar = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Calendar"} showProfile />  
        <Text style={globalStyles.text}> Content of calendar page </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
