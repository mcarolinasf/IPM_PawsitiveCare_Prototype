import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputDefault from '../TextInputDefault/TextInputDefault';

export const DatePickerComponent = ({value, label, setFunction, time}) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(Platform.OS === 'ios'); // For iOS compatibility
    setDate(currentDate);
  };

  const showDateTimePicker = () => {
    setShow(true);
  };

  const formattedValue = time
  ? (() => {
      const hours = String(value.getHours()).padStart(2, '0');
      const minutes = String(value.getMinutes()).padStart(2, '0');

      return `${hours}:${minutes}`;
    })()
  : value.toISOString().split('T')[0];


  return (
    <View>
    <TextInputDefault 
        label={label}
        setFunction={setFunction}
        value={formattedValue}
        onPress={showDateTimePicker}
        notEditable
        />
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={ value}
          mode={time? 'time' : "date"}
          display="default"
          onChange={onChange}
        />
      )}
      
    </View>
  );
};
