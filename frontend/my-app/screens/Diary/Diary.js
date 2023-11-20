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

  const [selectedEntry, setSelectedEntry] = useState("");

  const addDiaryEntry = () => {
    /* Todo: Add functionality */
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
            //Suggestion 1 : Pass the item and pass the selected item and compare them
            //Suggestion 2 :Store a property in the item(bool) selected and update when setSelected
            //Suggestion 3 :Do the verification here and pass the bool as a param
            diaryEntry.map(item => (
              <MenuCard iconName={'paw'} title={item.title} subtitle={item.date} itemId={item.id} setFunction={selectDiaryEntry} selected={selectedEntry} />
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
    </SafeAreaView>
  );
};
