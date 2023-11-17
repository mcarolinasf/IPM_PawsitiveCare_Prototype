import React from 'react'
import { Button, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { HomeStyles } from './HomeStyles'


export const Home = () => {
    
      return (
        <SafeAreaView style={globalStyles.container}>
          <ScrollView>
            <Text style={globalStyles.titleText}> Home </Text>
            <Text style={globalStyles.text}> Content of home page </Text>
          </ScrollView>
        </SafeAreaView>
      )
}
