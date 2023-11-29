import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { PetStyles } from "./PetStyles";
import MenuCard from "../../components/MenuCard/MenuCard.js";
import Header from "../../components/Header/Header.js";

import TaskItem from "../../components/TaskItem/TaskItem.js";
import navigationPaths from "../../navigation/navigationPaths";

import chart from "../../assets/Chart.png";
import { petsApi } from "../../api";

export const Pet = ({ navigation, route }) => {
    const { pet } = route.params;

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getData();
    }, [pet]);

    const getData = async () => {
        try {
            console.log(pet.idP);
            const tasksRes = await petsApi.getPetTasks(pet.idP);
            setTasks(tasksRes);
        } catch (error) {
            console.log("Error Message: " + error.message);
        }
    }

    const handleTaskPress = (key) => {
        setTasks((prevTasks) => (
            prevTasks.filter(task => task.idT != key)
        ));
    }


    return (
        <SafeAreaView style={globalStyles.swipe}>
            <ScrollView>
                <Header title={pet.name} goBack showProfile />
                <View style={PetStyles.container}{...globalStyles.shadow} >
                    <Image
                        style={PetStyles.image}
                        source={{
                            uri: pet.photoUrl
                        }}
                    />
                </View>
                <ScrollView horizontal={true}>
                    <MenuCard iconName={'paw'} title={'Vet Ap.'} navigation={navigation} navigateTo={navigationPaths.vetAppointments} />
                    <MenuCard iconName={'dog'} title={'Body'} navigation={navigation} navigateTo={navigationPaths.body} pet={pet} />
                    <MenuCard iconName={'pills'} title={'Medication'} navigation={navigation} navigateTo={navigationPaths.medication} pet={pet} />
                    <MenuCard iconName={'bone'} title={'Feeding'} navigation={navigation} navigateTo={navigationPaths.feeding} pet={pet} />
                </ScrollView>
                <Text style={globalStyles.subtitleText}>Today</Text>
                <View>
                    {
                        tasks && tasks.filter(task => task.petId == pet.idP).map(task => (
                            <TaskItem key={task.key} task={task} pressHandler={handleTaskPress} />
                        ))
                    }
                </View>
                <View style={{ ...PetStyles.container, ...globalStyles.shadow }}>
                    <Image
                        style={PetStyles.chart}
                        source={chart}
                    />


                </View>

            </ScrollView>
        </SafeAreaView >
    );

};