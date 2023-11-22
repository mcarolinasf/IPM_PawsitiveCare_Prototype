import React, { useState } from 'react'

import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault';
import Header from '../../components/Header/Header.js'
import { DatePickerComponent } from '../../components/DatePicker/DatePickerComponent.js';
import { PickPetModal } from '../../components/Modal/PickPetModal';
import { PetPicker } from '../../components/PetPicker/PetPicker.js';
import { ScheduleMedicationStyles } from './ScheduleStyles.js';
import { TasksData } from '../../data/TasksData.js';
import { CustomButton } from '../../components/CustomButton/CustomButton.js';
import { TaskType } from '../../data/TaskType.js';
import { tasksApi } from '../../api';


export const ScheduleFeeding = ({ navigation, route }) => {

  const { day } = route.params;

  const [selectPetModal, setSelectPetModal] = useState(false)
  const [pet, setPet] = useState(false)

  const handlePetModal = (value) => {
    setSelectPetModal(value)
  }

  const [newFeeding, setNewFeeding] = useState({
    food: '',
    time: '10:30',
    startDate: day,
    endDate: day,
    periodicity: '',
    dosage: '',
    alarm: false,
  })

  const addTask = async () => {

    const newTaskObject = {
      text: newFeeding.food,
      type: TaskType.FEEDING,
      time: newFeeding.time,
      date: newFeeding.startDate,
      petId: pet.idP,
      ownersIds: pet.ownersIds,
      done: false,
      info: { dosage: newFeeding.dosage, periodicity: newFeeding.periodicity }
    }
    console.log(newTaskObject)
    try {

      await tasksApi.createTask(newTaskObject)

    } catch (error) {
      console.log("Error Message: " + error.message)
      useState({
        food: '',
        time: '10:30',
        startDate: day,
        endDate: day,
        periodicity: '',
        dosage: '',
        alarm: false,
      })
    }
    navigation.goBack();

  }



  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>

        <Header title={"Schedule\n  Feeding"} goBack showProfile />

        <PetPicker url={pet.photoUrl} handleModal={handlePetModal} />

        <View style={ScheduleMedicationStyles.inputsContainer}>
          <TextInputDefault label={'Food'} setFunction={(value) => setNewFeeding({ ...newFeeding, food: value })} value={newFeeding.food} />
          <View style={[globalStyles.rowCenter]} >
            <View style={ScheduleMedicationStyles.multipleInputContainer} >
              <DatePickerComponent label={'Start Date'} setFunction={(value) => setNewFeeding({ ...newFeeding, startDate: value })} value={newFeeding.startDate} />
            </View>
            <View style={ScheduleMedicationStyles.multipleInputContainer} >
              <DatePickerComponent label={'End Date'} setFunction={(value) => setNewFeeding({ ...newFeeding, endDate: value })} value={newFeeding.endDate} />
            </View>
          </View>
          <DatePickerComponent label={'Time'} setFunction={(value) => setNewFeeding({ ...newFeeding, time: value })} value={newFeeding.time} time />
          <TextInputDefault label={'Periodicity'} setFunction={(value) => setNewFeeding({ ...newFeeding, periodicity: value })} value={newFeeding.periodicity} />
          <TextInputDefault label={'Dosage (mg)'} setFunction={(value) => setNewFeeding({ ...newFeeding, dosage: value })} value={newFeeding.dosage} keyboardType={'numeric'} />
        </View>

        <View style={{ paddingBottom: 50 }}>
          <CustomButton title={'Schedule'} onPressFunction={addTask} />
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
