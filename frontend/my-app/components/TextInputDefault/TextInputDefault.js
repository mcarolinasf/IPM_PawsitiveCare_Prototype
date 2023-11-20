import React from "react";
import { Text, View, TextInput } from "react-native";
import { TextInputDefaultStyles } from "./TextInputDefaultStyles";

export default function TextInputDefault({ label, isSecure, setFunction, value, keyboardType, onPress }) {

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
        keyboardType={keyboardType ? keyboardType : "default"}
        onFocus={onPress}
      />
    </View>
  );
}
