import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native'


export const Pet = ({navigation, route}) => {
    const { petId } = route.params;

    return (
        <SafeAreaView>
            <ScrollView>
                <Text> Pet page </Text>
                <Text> {petId} </Text>
            </ScrollView>
        </SafeAreaView>
    )

}