import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { TextInputDefaultStyles } from "./TextInputDefaultStyles";

export default function TextInputDefault({ label, isSecure, setFunction, value, keyboardType, onPress, notEditable, placeholder }) {

  const handleTextChange = (text) => {
    setFunction(text);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={TextInputDefaultStyles.inputsLabel}>{label}</Text>
        <TextInput
          secureTextEntry={isSecure}
          style={TextInputDefaultStyles.textInputs}
          onChangeText={handleTextChange}
          value={value}
          keyboardType={keyboardType ? keyboardType : "default"}
          editable={!notEditable}
          placeholder={placeholder}
        />
      </View>
    </TouchableOpacity>
  );
}
