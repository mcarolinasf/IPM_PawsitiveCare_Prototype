import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CustomButtonStyles } from './CustomButtonStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors';


export const CustomButton = ({ title, onPressFunction, iconName }) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={CustomButtonStyles.button}{...globalStyles.shadow}
    >
      <View style={CustomButtonStyles.contents}>
        {iconName &&
          <View style={{ paddingRight: 5 }}>
            <FontAwesome5 name={iconName} size={18} color={colors.white} />
          </View>
        }
        <Text style={{ ...globalStyles.subtitleText, ...CustomButtonStyles.buttonText }}>{title}</Text>
      </View>



    </TouchableOpacity>
  )
}


