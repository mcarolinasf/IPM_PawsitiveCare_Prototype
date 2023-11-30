import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Card from "../../components/Card/Card";
import Divider from "../../components/Divider";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import TaskItem from "../../components/TaskItem/TaskItem.js";
import { globalStyles } from "../../styles/globalStyles";
import { HomeStyles } from "./HomeStyles";
import Header from "../../components/Header/Header";
import UserSessionContext from "../../services/UserSessionContext.js";
import navigationPaths from "../../navigation/navigationPaths";
import { usersApi, tasksApi } from "../../api";
import { useIsFocused } from '@react-navigation/native';
import { dateToString } from "../../services/utils";

export const Home = ({ navigation }) => {

  const [pets, setPets] = useState([]);
  const [tasks, setTasks] = useState([]);


  const { user } = useContext(UserSessionContext);
  const isFocused = useIsFocused();

  const cardPressHandler = (item) => {
    navigation.navigate(navigationPaths.pet, { pet: item });
  };

  useEffect(() => {
    getData();

    if (isFocused) { getData(); }
  }, [isFocused, user, navigation]);



  const getData = async () => {
    try {
      const pets = await usersApi.getUserPets(user.idU)
      setPets(pets)

      const allTasks = await usersApi.getUserTasks(user.idU)

      const tasks = allTasks.filter((task) => dateToString(new Date()) === task.date)
      setTasks(tasks)

    } catch (error) {
      console.log("Error Message: " + error.message);
    }

  };

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
        var d = await tasksApi.deleteTask(idT)
        const updatedTasks = tasks.filter((task) => task.idT !== idT);
        setTasks(updatedTasks);        
    } catch {
        console.log("Error Message: " + error.message);
    }
  }

  const addPetButtonPressed = () => {
    navigation.navigate(navigationPaths.addPet);
  };

  const pageTitle = "Home";

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={pageTitle} showProfile />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height: 260 }}
      >
        {/* If it has tasks in the day set hasNotification to true in item?? */}
        {pets.map((item) => (
          <Card
            key={item.idT}
            item={item}
            pressHandler={cardPressHandler}
            hasNotification={"yes"}
          />
        ))}
        <View style={HomeStyles.button}>
          <CustomButton
            title={"Add Pet"}
            iconName={"plus"}
            onPressFunction={addPetButtonPressed}
          />

        </View>
      </ScrollView>
      <Divider />
      <Text style={globalStyles.subtitleText}>Today's Tasks</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={HomeStyles.tasksView}
      >
        <View>
          {tasks.map((task) => (
            <TaskItem
              key={task.idT}
              task={task}
              pressHandler={handleTaskPress}
              deleteHandler={deleteTask}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
