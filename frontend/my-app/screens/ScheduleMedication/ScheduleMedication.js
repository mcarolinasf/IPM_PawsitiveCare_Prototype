import React, { useState } from 'react'

import { Text, View,  SafeAreaView, ScrollView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault';
import Header from '../../components/Header/Header.js'
import { DatePickerComponent } from '../../components/DatePicker/DatePickerComponent.js';
import { PickPetModal } from '../../components/Modal/PickPetModal';
import { PetPicker } from '../../components/PetPicker/PetPicker.js';


export const ScheduleMedication = ({navigation, route}) => {

  const { day } = route.params;

  const [selectPetModal, setSelectPetModal] = useState(false)
  const [pet, setPet] = useState(false)

  const handlePetModal = (value) => {
      setSelectPetModal(value)
  }

  const [newMedication, setNewMedication] = useState({
    medicine: '',
    time: '14:30',
    startDate: day,
    endDate: day,
    periodicity: '',
    dosage: '',
    alarm: false,

})


  const setField = (fieldName, value) => {
    setNewMedication((prevMedication) => ({
      ...prevMedication,
      [fieldName]: value,
    }));
    console.log(newMedication)
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        
        <Header title={"Schedule Medication"}  goBack showProfile />

        <PetPicker url={pet.photoUrl} handleModal={handlePetModal}/>
        
        <View>
          <TextInputDefault label={'Select medicine'} setFunction={(value) => setField('medicine', value)} value={newMedication.medicine} />
          <DatePickerComponent label={'Start Date'} setFunction={(value) => setField('startDate', value)} value={newMedication.startDate} />
          <DatePickerComponent label={'End Date'} setFunction={(value) => setField('endDate', value)} value={newMedication.endDate} />
          <DatePickerComponent label={'Time'} setFunction={(value) => setField('time', value)} value={newMedication.time} time />
          <TextInputDefault label={'Periodicity'} setFunction={(value) => setField('periodicity', value)} value={newMedication.periodicity} />
          <TextInputDefault label={'Dosage (mg)'} setFunction={(value) => setField('dosage', value)} value={newMedication.dosage} keyboardType={'numeric'} />
        </View>

      </ScrollView>

      <PickPetModal 
          navigation={navigation}
          visible={selectPetModal}
          handleModal={handlePetModal}
          title={'Select your pet'}
          setPet={setPet}
      />
    </SafeAreaView>
  );
  

}
