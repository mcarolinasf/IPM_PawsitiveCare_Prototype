import React, { useState } from "react";

import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { NoteTackerStyles } from "./NoteTackerStyles";
import { Entypo } from "@expo/vector-icons";
import colors from "../../styles/colors";
import Divider from "../../components/Divider";
import { ConfirmationModal } from "../Modal/ConfirmationModal";
import { petsApi } from "../../api";

export default function NoteTacker({ selectedEntry, setEntry }) {
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  const handleMenuPopUp = () => {
    setMenuModalVisible(!menuModalVisible);
  };

  const handleTextChange = async (newText) => {

    console.log('hbrgjubvgljsnvg' + newText)


    try {
      const updatedEntry = { ...selectedEntry, text: newText }
      console.log(updatedEntry)

      await petsApi.updateEntry(selectedEntry.idP, updatedEntry, selectedEntry.idE)
      setEntry(updatedEntry)

    } catch (error) {
      console.log("Error Message: " + error.message)
    }

  };

  return (
    <View style={NoteTackerStyles.container} {...globalStyles.shadow}>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          justifyContent: "space-between",
        }}
      >
        <Text style={globalStyles.secondaryText}>{selectedEntry.date}</Text>
        <Entypo
          name="cross"
          size={24}
          color={colors.secondary}
          onPress={handleMenuPopUp}
        />
      </View>
      <Divider />
      <View style={{ paddingHorizontal: 5 }}>
        <TextInput
          style={NoteTackerStyles.input}
          multiline={true}
          onChangeText={handleTextChange}
          value={selectedEntry.text}
        />
      </View>

      <ConfirmationModal
        visible={menuModalVisible}
        onClose={handleMenuPopUp}
        handleModal={handleMenuPopUp}
        title={"Warning"}
        text={"Are you sure you want to delete this?"}
        item={selectedEntry}
      />
    </View>
  );
}
