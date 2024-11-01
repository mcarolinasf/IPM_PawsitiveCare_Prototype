import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { PetStyles } from "./PetStyles";
import MenuCard from "../../components/MenuCard/MenuCard.js";
import Header from "../../components/Header/Header.js";

import TaskItem from "../../components/TaskItem/TaskItem.js";
import navigationPaths from "../../navigation/navigationPaths";

import chart from "../../assets/Chart.png";
import { petsApi, tasksApi } from "../../api";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BottomTabs } from "../../navigation/BottomTabs";
import { dateToString } from "../../services/utils";

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
            const tasksToday = tasksRes.filter((task) => dateToString(new Date()) === task.date)
            setTasks(tasksToday);
        } catch (error) {
            console.log("Error Message: " + error.message);
        }
    }

    async function handleTaskPress(taskToDone) {
        try {
            const taskDone = {
                done: !taskToDone.done
            };

            // returns the updated task if 200
            const t = await tasksApi.updateTask(taskToDone.idT, taskDone);

            const updatedTasks = tasks.map((task) =>
                task.idT === t.idT ? { ...t } : task
            );
            setTasks(updatedTasks);
        } catch (error) {
            console.log("Error Message: " + error.message);
        }
    }

    const deleteTask = async (idT) => {
        try {
            await tasksApi.deleteTask(idT)
            const updatedTasks = tasks.filter((task) => task.idT !== idT);
            setTasks(updatedTasks);
        } catch {
            console.log("Error Message: " + error.message);
        }
    }

    return (
        <SafeAreaView style={globalStyles.swipe}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
                <Header title={pet.name} showProfile />
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
                    {tasks.length !== 0 ?
                        tasks.filter(task => task.petId == pet.idP).map(task => (
                            <TaskItem key={task.key} task={task} pressHandler={handleTaskPress} deleteHandler={deleteTask} />
                        )) : <View style={{ paddingVertical: 60, alignItems: 'center' }}>
                            <Text style={globalStyles.secondaryText}>No tasks for today!</Text>
                        </View>
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
