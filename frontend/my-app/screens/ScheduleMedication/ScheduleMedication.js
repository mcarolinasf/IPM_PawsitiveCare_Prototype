import React, { useState } from 'react'

import { Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault';
import Header from '../../components/Header/Header.js'
import { DatePickerComponent } from '../../components/DatePicker/DatePickerComponent.js';

export const ScheduleMedication = ({navigation, route}) => {

  const { day } = route.params;

  const timeString = '14:30';
  const [hours, minutes] = timeString.split(':').map(Number);
  const currentTime = new Date();
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);

  const [medicine, setMedicine] = useState(false);
  const [time, setTime] = useState(currentTime);
  const [startDate, setStartDate] = useState(new Date(day));
  const [endDate, setEndDate] = useState(new Date(day));
  const [periodicity, setPeriodicity] = useState(false);
  const [dosage, setDosage] = useState(false);
  const [alarm, setAlarm] = useState(false);

  const [newMedication, setNewMedication] = useState({
    medicine: '',
    time: '',
    startDate: new Date(day),
    endDate: new Date(day),
    periodicity: '',
    dosage: '',
    alarm: false,

})

  return (
    <SafeAreaView style={globalStyles.container}>
        <ScrollView>

            <Header title={'Schedule Medication'} showProfile goBack/>

            <Text> Image of pet </Text>
            <Image/>
            
            <TextInputDefault label={'Select medicine'}  setFunction={setMedicine}  value={medicine} />
            <DatePickerComponent label={'Start Date'} value={startDate} setFunction={setStartDate} />
            <DatePickerComponent label={'End Date'} value={endDate} setFunction={setEndDate} />
            <DatePickerComponent label={'Time'} value={time} setFunction={setTime} time/>
            <TextInputDefault label={'Periodicity'}  setFunction={setPeriodicity}  value={periodicity} />
            <TextInputDefault label={'Dosage (mg)'}  setFunction={setDosage}  value={dosage} keyboardType={'numeric'} />
            
        </ScrollView>
    </SafeAreaView >
  )

}
