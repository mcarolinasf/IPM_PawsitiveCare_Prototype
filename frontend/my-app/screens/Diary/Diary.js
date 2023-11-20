import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import Divider from '../../components/Divider'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import NoteTacker from '../../components/NoteTaker/NoteTacker'
import UserSessionContext from '../../services/UserSessionContext.js'
import { PetsData } from '../../data/PetsData'
import { DiaryEntryData } from '../../data/DiaryEntryData'


export const Diary = () => {

  const { user } = useContext(UserSessionContext);

  const [diaryEntry, setDiaryEntry] = useState([]);

  const [selectedEntry, setSelectedEntry] = useState('');



  const addDiaryEntry = () => {
    /* Todo: Add functionality */
  }

  const getData = () => {
    var petIds = user.petIds;

    var pets = petIds.map((id) => PetsData[id]);

    // Set Entrys
    const diaryEntrys = pets.flatMap((pet) => pet.diaryEntrysIds.map((id) => DiaryEntryData[id]));
    setDiaryEntry(diaryEntrys);

    if (diaryEntrys.length > 0) {
      setSelectedEntry(diaryEntrys[diaryEntrys.length - 1]);
    }

  }


  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    // Update selectedEntry when diaryEntry changes
    if (diaryEntry.length > 0) {
      setSelectedEntry(diaryEntry[diaryEntry.length - 1]);
    }
  }, [diaryEntry]);


  const selectDiaryEntry = (itemId) => {

    if (selectedEntry && selectedEntry.id === itemId) {
      return;
    }

    const selectedDiaryEntry = diaryEntry.find(entry => entry.id === itemId);

    // Update selectedEntry with the selected diary entry
    setSelectedEntry(selectedDiaryEntry);
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={'Diary'} showProfile />
        <ScrollView horizontal={true}>
          {
            diaryEntry.map(item => (
              <MenuCard iconName={'paw'} title={item.title} subtitle={item.date} /* stateHandler={selectDiaryEntry(item.id)} */ />
            ))
          }
        </ScrollView>
        <Divider />
        <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
          <CustomButton title={'New entry'} iconName={'plus'} onPressFunction={addDiaryEntry} />
        </View>
        {/* Todo: Add pop up and its functionality */}
        <NoteTacker selectedEntry={selectedEntry} />
      </ScrollView>

    </SafeAreaView>
  )
}
