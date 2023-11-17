import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'


export const Diary = () => {
  return ( 
    <SafeAreaView style={globalStyles.container}>
         <Text style={globalStyles.titleText}> Diary </Text>
            <Text style={globalStyles.text}> Content of diary page </Text>
    </SafeAreaView>
  )
}
