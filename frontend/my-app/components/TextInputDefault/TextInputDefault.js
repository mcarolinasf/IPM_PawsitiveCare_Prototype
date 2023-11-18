import React from "react";
import { Text, View, TextInput } from "react-native";
import { TextInputDefaultStyles } from "./TextInputDefaultStyles";

export default function TextInputDefault({ label, isSecure, setFunction, value }) {

  const handleTextChange = (text) => {
    setFunction(text);
  };

  return (
    <View>
      <Text style={TextInputDefaultStyles.inputsLabel}>{label}</Text>
      <TextInput
        secureTextEntry={isSecure}
        style={TextInputDefaultStyles.textInputs}
        onChangeText={handleTextChange}
        value={value}
      />
    </View>
  );
}
