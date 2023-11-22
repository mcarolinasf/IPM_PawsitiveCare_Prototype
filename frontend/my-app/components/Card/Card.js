import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { CardStyles } from "./CardStyles.js";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/colors";

export default function Card({ item, pressHandler, hasNotification }) {
  // Todo: onPress function to pet page
  return (
    <TouchableOpacity
      onPress={() => pressHandler(item)}
      style={globalStyles.shadow}
    >
      <View key={item && item.key} style={CardStyles.card}>
        <Image
          style={CardStyles.image}
          source={{
            uri: item && item.photoUrl,
          }}
        />
        <Text style={CardStyles.text}>{item && item.name}</Text>
      </View>
      {hasNotification && (
        <View style={CardStyles.icon}>
          <AntDesign
            name="exclamationcircle"
            size={24}
            color={colors.primary}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
