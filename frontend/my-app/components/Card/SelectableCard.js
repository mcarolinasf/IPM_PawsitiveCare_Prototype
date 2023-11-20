import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/globalStyles.js'
import { CardStyles } from './CardStyles.js'


export default function SelectableCard({ item, pressHandler, isSelected }) {

    // const [bgColor, setBgColor] = useState(true);

    // Todo: onPress function to pet page
    return (
        <TouchableOpacity onPress={() => {pressHandler(item);}} style={ globalStyles.shadow}>
            <View key={item.key} style={isSelected ? CardStyles.card : CardStyles.selectedCard}>
                <Image
                    style={CardStyles.image}
                    source={{
                        uri: item.photoUrl
                    }}
                />
                <Text style={isSelected ? CardStyles.text : CardStyles.selectedText}>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );


}