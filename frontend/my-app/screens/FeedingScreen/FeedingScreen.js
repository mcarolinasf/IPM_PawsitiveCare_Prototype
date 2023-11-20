import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Header from '../../components/Header/Header'
import { globalStyles } from '../../styles/globalStyles'
import { FeedingScreenStyles } from './AddFeedingStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import TextInputDefault from '../../components/TextInputDefault/TextInputDefault'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { PetsData } from '../../data/petsDataArray'
import { SelectList } from 'react-native-dropdown-select-list'
import { ModalComponent } from '../../components/Modal/ModalComponent';
import { SchedulingActions as actions } from '../../data/SchedulingActions';
import UserSessionContext from '../../services/UserSessionContext.js';
import { AntDesign } from '@expo/vector-icons';
import SelectableCard from '../../components/Card/SelectableCard'
import { CardStyles } from '../../components/Card/CardStyles.js'






export const FeedingScreen = ({ navigation }) => {

    const [image, setImage] = useState();
    const [petSelected, setPetSelected] = useState("");
    const [petSelectedCard, setPetSelectedCard] = useState(null);
    const [pets, setPets] = useState([]);
    const [newFeeding, setNewFeeding] = useState({
        petName: '',
        food: '',
        startD: '',
        endD: '',
        period: '',
        doseage: ''
    });
    const [scheduleModalVisible, setScheduleModalVisible] = useState(false);

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

