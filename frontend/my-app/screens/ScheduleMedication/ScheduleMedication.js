import React, { useState } from 'react'

import { Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault';
import Header from '../../components/Header/Header.js'
import { DatePickerComponent } from '../../components/DatePicker/DatePickerComponent.js';

export const ScheduleMedication = ({navigation, day}) => {

  const [medicine, setMedicine] = useState(false);
  const [time, setTime] = useState(false);
  const [startDate, setStartDate] = useState(day);
  const [endDate, setEndDate] = useState(false);
  const [periodicity, setPeriodicity] = useState(false);
  const [dosage, setDosage] = useState(false);
  const [alarm, setAlarm] = useState(false);


  return (
    <SafeAreaView style={globalStyles.container}>
        <ScrollView>

            <Header title={'Schedule Medication'} showProfile goBack/>
            
            <TextInputDefault label={'Select medicine'}  setFunction={setMedicine}  value={medicine} />
            <TextInputDefault label={'Time'}  setFunction={setTime}  value={time} />
            <TextInputDefault label={'Start Date'}  setFunction={setStartDate}  value={startDate} />
            <TextInputDefault label={'End Date'}  setFunction={setEndDate}  value={endDate} />
            <TextInputDefault label={'Periodicity'}  setFunction={setPeriodicity}  value={periodicity} />
            <TextInputDefault label={'Dosage'}  setFunction={setDosage}  value={dosage} keyboardType={'numeric'} />
            <DatePickerComponent/>

        </ScrollView>
    </SafeAreaView >
  )

}
