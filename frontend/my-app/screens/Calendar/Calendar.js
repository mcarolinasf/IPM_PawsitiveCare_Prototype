import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'


export const Calendar = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.titleText}> Calendar </Text>
        <Text style={globalStyles.text}> Content of calendar page </Text>
    </SafeAreaView>
  )
}
