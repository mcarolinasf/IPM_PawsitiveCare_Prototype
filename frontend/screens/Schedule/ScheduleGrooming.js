import React, { useState } from 'react'

import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault';
import Header from '../../components/Header/Header.js'
import { DatePickerComponent } from '../../components/DatePicker/DatePickerComponent.js';
import { PickPetModal } from '../../components/Modal/PickPetModal';
import { PetPicker } from '../../components/PetPicker/PetPicker.js';
import { ScheduleMedicationStyles } from './ScheduleStyles.js';
import { CustomButton } from '../../components/CustomButton/CustomButton.js';
import { TaskType } from '../../data/TaskType.js';
import { tasksApi } from '../../api';


export const ScheduleGrooming = ({ navigation, route }) => {

  const { day } = route.params;

  const [selectPetModal, setSelectPetModal] = useState(false);
  const [pet, setPet] = useState(false);

  const handlePetModal = (value) => {
    setSelectPetModal(value)
  }

  const [newGrooming, setNewGrooming] = useState({
    grooming: '',
    time: '14:30',
    date: day,
    periodicity: '',
    alarm: false,
  });

  const addTask = async () => {

    const newTaskObject = {
      text: newGrooming.grooming,
      type: TaskType.GROOMING,
      time: newGrooming.time,
      date: newGrooming.date,
      petId: pet.idP,
      ownersIds: pet.ownersIds,
      done: false,
      info: { periodicity: newGrooming.periodicity }
    }

    try {

      await tasksApi.createTask(newTaskObject)

    } catch (error) {
      console.log("Error Message: " + error.message)
      useState({
        grooming: '',
        time: '14:30',
        date: day,
        periodicity: '',
        alarm: false,
      })
    }


    navigation.goBack();
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>

        <Header title={"Schedule\n Grooming"} goBack showProfile />

        <PetPicker url={pet.photoUrl} handleModal={handlePetModal} />

        <View style={ScheduleMedicationStyles.inputsContainer}>
          <TextInputDefault label={'Description'} setFunction={(value) => setNewGrooming({ ...newGrooming, grooming: value })} value={newGrooming.grooming} />
          <View style={[globalStyles.rowCenter]} >
            <View style={ScheduleMedicationStyles.multipleInputContainer} >
              <DatePickerComponent label={'Date'} setFunction={(value) => setNewGrooming({ ...newGrooming, date: value })} value={newGrooming.date} />
            </View>
            <View style={ScheduleMedicationStyles.multipleInputContainer} >
              <DatePickerComponent label={'Time'} setFunction={(value) => setNewGrooming({ ...newGrooming, time: value })} value={newGrooming.time} time />
            </View>
          </View>
          <TextInputDefault label={'Periodicity'} setFunction={(value) => setNewGrooming({ ...newGrooming, periodicity: value })} value={newGrooming.periodicity} />
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
