import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Header from "../../components/Header/Header";
import MenuCard from "../../components/MenuCard/MenuCard";
import Divider from "../../components/Divider";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import NoteTacker from "../../components/NoteTaker/NoteTacker";
import UserSessionContext from "../../services/UserSessionContext.js";
import { PetsData } from "../../data/PetsData.js";
import { DiaryEntryData } from "../../data/DiaryEntryData";

export const Diary = () => {
  const { user } = useContext(UserSessionContext);

  const [diaryEntry, setDiaryEntry] = useState([]);
  const [pet, setPet] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState({
    title: 'Diary entry ',
    type: TaskType.HEALTH,
    date: dateToString(new Date()),
    idP: '',
    ownersIds: []
  });

  const addDiaryEntry = async () => {
    /* Todo: Add functionality */

    setSelectedEntry({ ...selectedEntry, idP: pet.idP, ownersIds: pet.ownersIds })

    try {
      const newEntry = {
        title: selectedEntry.title,
        type: selectedEntry.type,
        date: selectedEntry.date,
        idP: pet.idP,
        ownersIds: pet.ownersIds
      }

      await petsApi.createEntry(pet.idP, newEntry)
    } catch (error) {
      console.log("Error Message: " + error.message)
    }
  };

  const getData = () => {
    var petIds = user.petIds;

    var pets = petIds.map((id) => PetsData[id]);

    // Set Entrys
    const diaryEntrys = pets.flatMap((pet) =>
      pet.diaryEntrysIds.map((id) => DiaryEntryData[id])
    );
    setDiaryEntry(diaryEntrys);

    if (diaryEntrys.length > 0) {
      setSelectedEntry(diaryEntrys[diaryEntrys.length - 1]);
    }
  };

  const handlePetModal = (value) => {
    setSelectPetModal(value)
  }

  useEffect(() => {
    getData();
  }, []);




  const selectDiaryEntry = (itemId) => {
    if (selectedEntry && selectedEntry.id === itemId) {
      return;
    }

    const selectedDiaryEntry = diaryEntry.find((entry) => entry.id === itemId);

    // Update selectedEntry with the selected diary entry
    setSelectedEntry(selectedDiaryEntry);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Diary"} showProfile />
        <ScrollView horizontal={true}>
          {
            diaryEntry.slice().reverse().map(item => (
              <MenuCard key={item.id} iconName={'paw'} title={item.title} subtitle={item.date} item={item} setFunction={selectDiaryEntry} selected={selectedEntry} />
            ))
          }
        </ScrollView>
        <Divider />
        <View style={{ alignItems: "flex-end", marginTop: 15 }}>
          <CustomButton
            title={"New entry"}
            iconName={"plus"}
            onPressFunction={addDiaryEntry}
          />
        </View>

        <NoteTacker selectedEntry={selectedEntry} />
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
