import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CardStyles } from './CardStyles.js'


export default function Card({ item, pressHandler, styleCard, styleImage }) {

    // Todo: onPress function to pet page
    return (
        <TouchableOpacity onPress={() => pressHandler(item)} style={globalStyles.shadow}>
            <View key={item.key} style={[CardStyles.card, styleCard]}>
                <Image
                    style={[CardStyles.image, styleImage]}
                    source={{
                        uri: item.photoUrl
                    }}
                />
                <Text style={CardStyles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );


}