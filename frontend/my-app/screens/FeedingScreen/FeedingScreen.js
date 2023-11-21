import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import Header from "../../components/Header/Header";
import { FeedingStyles } from "./FeedingStyles.js";
import { Ionicons } from "@expo/vector-icons";
import Divider from "../../components/Divider";
import { NewButton } from "../../components/NewButton/NewButton";
import colors from "../../styles/colors";
import UserSessionContext from "../../services/UserSessionContext.js";
import { PetsData } from "../../data/PetsData.js";
import { TasksData } from "../../data/TasksData.js";
import { useContext } from "react";
import { ItemsByTag } from "../../components/ItemsByTag/ItemsByTag.js";
import navigationPaths from "../../navigation/navigationPaths.js";
import { PetPicture } from "../../components/PetPicture/PetPicture.js";
import { PetPictureStyles } from "../../components/PetPicture/PetPictureStyles.js";

const listFilters = [
  {
    type: "All",
    darkGrey: true,
  },
  {
    type: "Upcoming",
    darkGrey: false,
  },
  {
    type: "Done",
    darkGrey: false,
  },
];

export const Feeding = ({ navigation, route }) => {

  const { pet } = route.params;

  const [type, setType] = useState(listFilters[0].type);
  const [upcoming, setUpcoming] = useState([]);
  const [done, setDone] = useState([]);

  const { user } = useContext(UserSessionContext);

    const handleButtonPress = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const cardPressHandler = (item) => {
        if(petSelected === "")
            setPetSelected(item.name);
        else
            setPetSelected("");
    }

    //Set pets
    let petNames = [];
    
    PetsData.forEach(element => {
        petNames.push(element.name)
    });

    let petIds = PetsData.map((pet) => pet.id);
    
    useEffect(() => {
        getData()
      }, [])
    
    
    const getData = () => {
        var petIds = user.petIds;

        //Set pets
        var pets = petIds.map((id) => PetsData[id]);
        setPets(pets);
    }

    //Review

    const addFeeding = () => {

        const newFeedingId = Object.keys(FeedingsData).length;

        // Create a new pet object with the provided information
        const newFeedingObject = {
            id: newFeedingId,
            petName: petSelected,
            food: newFeeding.food,
            startD: newFeeding.startD,
            endD: newFeeding.endD,
            period: newFeeding.period,
            doseage: newFeeding.doseage
        };

        // Update the FeedingsData object with the new pet
        FeedingsData[newFeedingId] = newFeedingObject;

        // Log the updated FeedingsData object
        console.log(FeedingsData);

        // Clear the form or navigate to another screen if needed
        setNewFeeding({
            petName: '',
            food: '',
            startD: '',
            endD: '',
            period: '',
            doseage: ''
        });

        navigation.goBack();
    };


    handlePetPickPopup = () => {
        setScheduleModalVisible(!scheduleModalVisible);
    }

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleSelectComponent = (componentId) => {
        setSelectedComponent(componentId);
    };
    
    const SelectableComponent = ({ id, selected, onSelect, data }) => {
        const handlePress = () => {
          onSelect(id);
        };
      
        return (
          <TouchableOpacity
            style={[CardStyles.card, selected && CardStyles.selectedCard]}
            onPress={handlePress}
          >
            <SelectableCard key={data.id} item={data} isSelected={data.id === selectedComponent} pressHandler={cardPressHandler} />
          </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Schedule Feeding'} goBack />

                <Text style={globalStyles.selectPetText}>Select pet</Text>

                <ScrollView horizontal={true}>
                    {pets.map((item, i) => (
                        <SelectableComponent 
                            id = {i}
                            selected = {selectedComponent === i}
                            onSelect={handleSelectComponent(i)}
                            data = {item}
                        >
                            
                        </SelectableComponent>
                    ))}
                </ScrollView>

                <Text>Debug: Pet selected: {selectedComponent}</Text>

                <View style={{ paddingHorizontal: 10 }}>
                    <TextInputDefault label={'Food'} setFunction={(value) => setNewFeeding({ ...newFeeding, food: value })} value={newFeeding.food} />
                    <TextInputDefault label={'Starting Date'} setFunction={(value) => setNewFeeding({ ...newFeeding, startD: value })} value={newFeeding.food} />
                    <TextInputDefault label={'End Date'} setFunction={(value) => setNewFeeding({ ...newFeeding, endD: value })} value={newFeeding.food} />
                    <TextInputDefault label={'Periodicity'} setFunction={(value) => setNewFeeding({ ...newFeeding, period: value })} value={newFeeding.food} />
                    <TextInputDefault label={'Dosage'} setFunction={(value) => setNewFeeding({ ...newFeeding, dosage: value })} value={newFeeding.food} />
                    
              
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <CustomButton title={'Add'} onPressFunction={addFeeding} />
                </View>

            </ScrollView>
        </SafeAreaView >
    )

}

