import React from "react";
import { FilterButtonStyles } from "./FilterButtonStyles";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import colors from "../../styles/colors";

export const FilterButton = ({ name, onPressFunction, isDarkGrey }) => {
  let buttonBGOpacity = 0.5;
  if (isDarkGrey) {
    buttonBGOpacity = 1.0;
  }
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={{ ...FilterButtonStyles.button, opacity: buttonBGOpacity }}
    >
      <Text style={FilterButtonStyles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
