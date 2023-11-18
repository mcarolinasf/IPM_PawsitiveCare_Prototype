import React from "react";
import { Text, View, TextInput } from "react-native";
import { TextInputDefaultStyles } from "./TextInputDefaultStyles";

export default function TextInputDefault({ label, isSecure }) {
  return (
    <View>
      <Text style={TextInputDefaultStyles.inputsLabel}>{label}</Text>
      <TextInput
        secureTextEntry={isSecure}
        style={TextInputDefaultStyles.textInputs}
      />
    </View>
  );
}
