
import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'


export const Training = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
         <Text style={globalStyles.titleText}> Training </Text>
            <Text style={globalStyles.text}> Content of training page </Text>
    </SafeAreaView>
  )
}
