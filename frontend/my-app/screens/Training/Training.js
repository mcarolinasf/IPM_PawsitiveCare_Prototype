
import React from 'react'
import { Button, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header'


export const Training = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Training"} showProfile />  
        <Text style={globalStyles.text}> Content of training page </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
