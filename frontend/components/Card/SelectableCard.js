import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/globalStyles.js'
import { CardStyles } from './CardStyles.js'


export default function SelectableCard({ item }) {

    const [bgColor, setBgColor] = useState(true);

    // Todo: onPress function to pet page
    return (
        <TouchableHighlight onPress={() => setBgColor(!bgColor)} >
            <View key={item.key} style={bgColor ? CardStyles.nCard : CardStyles.selectedCard}>
                <Image
                    style={CardStyles.image}
                    source={{
                        uri: item.photoUrl
                    }}
                />
                <Text style={bgColor ? CardStyles.text : CardStyles.selectedText}>{item.name}</Text>
            </View>
        </TouchableHighlight>
    );


}