import React, { useState } from "react";

import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import TextInputDefault from "../../components/TextInputDefault/TextInputDefault";
import Header from "../../components/Header/Header.js";
import { DatePickerComponent } from "../../components/DatePicker/DatePickerComponent.js";
import { PickPetModal } from "../../components/Modal/PickPetModal";
import { PetPicker } from "../../components/PetPicker/PetPicker.js";
import { ScheduleMedicationStyles } from "./ScheduleStyles.js";
import { TasksData } from "../../data/TasksData.js";
import { CustomButton } from "../../components/CustomButton/CustomButton.js";
import { TaskType } from "../../data/TaskType.js";

export const ScheduleGrooming = ({ navigation, route }) => {
  const { day } = route.params;

  const [selectPetModal, setSelectPetModal] = useState(false);
  const [pet, setPet] = useState(false);

  const handlePetModal = (value) => {
    setSelectPetModal(value);
  };

  const [newMedication, setNewMedication] = useState({
    medicine: "",
    time: "14:30",
    date: day,
    periodicity: "",
    dosage: "",
    alarm: false,
  });

  const addTask = () => {
    //Add taskId in pet

    //Create task and store
    const newTaskId = Object.keys(TasksData).length;

    const newTaskObject = {
      id: newTaskId,
      text: newMedication.medicine,
      type: TaskType.HEALTH,
      time: newMedication.time,
      date: newMedication.date,
      petId: pet.id,
      owners: pet.owners,
      done: false,
      info: {
        dosage: newMedication.dosage,
        periodicity: newMedication.periodicity,
      },
    };

    TasksData[newTaskId] = newTaskObject;
    console.log(TasksData);

    /*  // Write the updated data back to the file
    try {
      fs.writeFileSync('TasksData.js', `export const TasksData = ${JSON.stringify(TasksData, null, 2)};`);
    } catch (error) {
      console.error('Error writing TasksData file:', error);
    } */

    navigation.goBack();
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Schedule\nGrooming"} goBack showProfile />

        <PetPicker url={pet.photoUrl} handleModal={handlePetModal} />

        <View style={ScheduleMedicationStyles.inputsContainer}>
          <TextInputDefault
            label={"Description   *"}
            setFunction={(value) =>
              setNewMedication({ ...newMedication, medicine: value })
            }
            value={newMedication.medicine}
          />
          <View style={[globalStyles.rowCenter]}>
            <View style={ScheduleMedicationStyles.multipleInputContainer}>
              <DatePickerComponent
                label={"Date   *"}
                setFunction={(value) =>
                  setNewMedication({ ...newMedication, date: value })
                }
                value={newMedication.date}
              />
            </View>
            <View style={ScheduleMedicationStyles.multipleInputContainer}>
              <DatePickerComponent
                label={"Time   *"}
                setFunction={(value) =>
                  setNewMedication({ ...newMedication, time: value })
                }
                value={newMedication.time}
                time
              />
            </View>
          </View>
          <TextInputDefault
            label={"Periodicity"}
            setFunction={(value) =>
              setNewMedication({ ...newMedication, periodicity: value })
            }
            value={newMedication.periodicity}
          />
          <TextInputDefault
            label={"Dosage (mg)"}
            setFunction={(value) =>
              setNewMedication({ ...newMedication, dosage: value })
            }
            value={newMedication.dosage}
            keyboardType={"numeric"}
          />
        </View>

        <View style={{ paddingBottom: 50 }}>
          <CustomButton title={"Schedule"} onPressFunction={addTask} />
        </View>
      </ScrollView>

      <PickPetModal
        navigation={navigation}
        visible={selectPetModal}
        handleModal={handlePetModal}
        title={"Select your pet"}
        setPet={setPet}
      />
    </SafeAreaView>
  );
};
