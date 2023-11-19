import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CustomButtonStyles } from './CustomButtonStyles'

export const CustomButton = ({title, onPressFunction}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={CustomButtonStyles.button}
    >
      <Text style={{...globalStyles.subtitleText, ...CustomButtonStyles.buttonText}}>{title}</Text>
    </TouchableOpacity>
  )
}


