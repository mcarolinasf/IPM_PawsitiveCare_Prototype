import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CardStyles } from './CardStyles.js'


export default function Card({ item, pressHandeler }) {

    // Todo: onPress function to pet page
    return (
        <TouchableOpacity onPress={() => pressHandeler(item.key)}>
            <View key={item.key} style={CardStyles.card}{...globalStyles.shadow}>
                <Image
                    style={CardStyles.image}
                    source={{
                        uri: item.photoUrl
                    }}
                />
                <Text style={CardStyles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );


}