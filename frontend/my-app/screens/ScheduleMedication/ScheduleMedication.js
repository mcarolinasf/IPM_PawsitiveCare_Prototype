import React, { useState } from 'react'

import { Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault';
import Header from '../../components/Header/Header.js'
import { DatePickerComponent } from '../../components/DatePicker/DatePickerComponent.js';
import { PickPetModal } from '../../components/Modal/PickPetModal';



export const ScheduleMedication = ({navigation, route}) => {

  const { day } = route.params;

  //REMOVE FROM HERE
  const timeString = '14:30';
  const [hours, minutes] = timeString.split(':').map(Number);
  const currentTime = new Date();
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);

  const [selectPetModal, setSelectPetModal] = useState(false)
  const [pet, setPet] = useState(false)

  const handlePetModal = (value) => {
      setSelectPetModal(value)
  }

  const [newMedication, setNewMedication] = useState({
    medicine: '',
    time: currentTime,
    startDate: new Date(day),
    endDate: new Date(day),
    periodicity: '',
    dosage: '',
    alarm: false,

})


  const setField = (fieldName, value) => {
    setNewMedication((prevMedication) => ({
      ...prevMedication,
      [fieldName]: value,
    }));
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        
        <Header title={"Schedule Medication"}  goBack showProfile />

        <PetPicker url={pet-photoUrl} handleModal={handlePetModal}/>
        

        <TextInputDefault label={'Select medicine'} setFunction={(value) => setField('medicine', value)} value={newMedication.medicine} />
        <DatePickerComponent label={'Start Date'} setFunction={(value) => setField('startDate', value)} value={newMedication.startDate} />
        <DatePickerComponent label={'End Date'} setFunction={(value) => setField('endDate', value)} value={newMedication.endDate} />
        <DatePickerComponent label={'Time'} setFunction={(value) => setField('time', value)} value={newMedication.time} time />
        <TextInputDefault label={'Periodicity'} setFunction={(value) => setField('periodicity', value)} value={newMedication.periodicity} />
        <TextInputDefault label={'Dosage (mg)'} setFunction={(value) => setField('dosage', value)} value={newMedication.dosage} keyboardType={'numeric'} />
      </ScrollView>

      <PickPetModal 
          navigation={navigation}
          visible={selectPetModal}
          handleModal={handlePetModal}
          title={'Scheduling'}
          setPet={setPet}
      />
    </SafeAreaView>
  );
  

}
