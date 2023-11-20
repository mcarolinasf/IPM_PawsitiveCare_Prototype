import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputDefault from '../TextInputDefault/TextInputDefault';
import { dateToString, stringToTime, timeToString } from '../../services/utils';

export const DatePickerComponent = ({value, label, setFunction, time}) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(Platform.OS === 'ios'); // For iOS compatibility

    time ? setFunction(timeToString(value)) : setFunction(dateToString(value))
    
  };

  const showDateTimePicker = () => {
    setShow(true);
  };


  return (
    <View>
    <TextInputDefault 
        label={label}
        setFunction={setFunction}
        value={value}
        onPress={showDateTimePicker}
        notEditable
        />
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={ time ? stringToTime(time)  : new Date(value)}
          mode={time? 'time' : "date"}
          display="default"
          onChange={onChange}
        />
      )}
      
    </View>
  );
};
