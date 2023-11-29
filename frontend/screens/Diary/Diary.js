import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/Header/Header";
import MenuCard from "../../components/MenuCard/MenuCard";
import Divider from "../../components/Divider";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import NoteTacker from "../../components/NoteTaker/NoteTacker";
import UserSessionContext from "../../services/UserSessionContext.js";
import { usersApi, petsApi } from '../../api'
import { dateToString } from "../../services/utils";
import { PickPetModal } from "../../components/Modal/PickPetModal";
import { EntryType } from "../../data/EntryType";
import { useIsFocused } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';


export const Diary = ({ navigation }) => {
  const { user } = useContext(UserSessionContext);

  const [diaryEntry, setDiaryEntry] = useState([]);
  const [pet, setPet] = useState(false)
  const [selectPetModal, setSelectPetModal] = useState(false)
  const isFocused = useIsFocused();

  const [selectedEntry, setSelectedEntry] = useState({});

  const addDiaryEntry = async (pet) => {
    /* Todo: Add functionality */

    setSelectedEntry({ ...selectedEntry, idP: pet.idP, ownersIds: pet.ownersIds })

    try {

      const idE = uuidv4();
      const newEntry = {
        idE: idE,
        title: 'Diary entry ',
        type: EntryType.DIARY,
        date: dateToString(new Date()),
        idP: pet.idP,
        ownersIds: pet.ownersIds
      }

      await petsApi.createEntry(pet.idP, newEntry)

      setDiaryEntry([...diaryEntry, newEntry])
      setSelectedEntry(newEntry)
    } catch (error) {
      console.log("Error Message: " + error.message)
    }
  };

  const getData = async () => {

    try {

      const entries = await usersApi.getUserEntries(user.idU)

      const diaryEntrys = entries.filter((entry) => entry.type === EntryType.DIARY)

      setDiaryEntry(diaryEntrys);

      if (diaryEntrys.length > 0) {
        setSelectedEntry(diaryEntrys[diaryEntrys.length - 1]);
      }

    } catch (error) {
      console.log("Error Message: " + error.message)
    }

  };

  const handlePetModal = (value) => {
    setSelectPetModal(value)
  }

  useEffect(() => {
    getData();
    if (isFocused) { getData(); }
  }, [isFocused, user, navigation]);

  const selectDiaryEntry = (itemId) => {
    if (selectedEntry && selectedEntry.idE === itemId) {
      return;
    }

    const selectedDiaryEntry = diaryEntry.find((entry) => entry.idE === itemId);

    // Update selectedEntry with the selected diary entry
    setSelectedEntry(selectedDiaryEntry);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Diary"} showProfile />
        <ScrollView horizontal={true}>
          {
            diaryEntry.slice().reverse().map((item, index) => (
              <MenuCard key={item.idE} iconName={'paw'} title={item.title + (diaryEntry.length - index)} subtitle={item.date} item={item} setFunction={() => selectDiaryEntry(item.idE)} selected={selectedEntry} />
            ))
          }
        </ScrollView>
        <Divider />
        <View style={{ alignItems: "flex-end", marginTop: 15 }}>
          <CustomButton
            title={"New entry"}
            iconName={"plus"}
            onPressFunction={() => handlePetModal(true)}
          />
        </View>

        <NoteTacker selectedEntry={selectedEntry} setEntry={setSelectedEntry} selectedPet={pet} />
      </ScrollView>

      <PickPetModal
        navigation={navigation}
        visible={selectPetModal}
        handleModal={handlePetModal}
        title={'Select your pet'}
        setPet={setPet}
        createEntry={addDiaryEntry}

      />
    </SafeAreaView>
  );
};
