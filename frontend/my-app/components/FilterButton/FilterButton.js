import React from "react";
import tinycolor from "tinycolor2"; // Library used to convert hex to rgba
import { FilterButtonStyles } from "./FilterButtonStyles";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import colors from "../../styles/colors";

export const FilterButton = ({ name, onPressFunction, isDarkGrey }) => {
  let buttonBGOpacity = 0.5;

  if (isDarkGrey) {
    buttonBGOpacity = 1.0;
  }

  const convertedBGColor = tinycolor(colors.filterButtonGrey)
    .setAlpha(buttonBGOpacity)
    .toRgbString();

  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={{
        ...FilterButtonStyles.button,
        backgroundColor: convertedBGColor,
      }}
    >
      <Text style={FilterButtonStyles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
