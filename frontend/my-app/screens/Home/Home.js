import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Card from "../../components/Card/Card";
import Divider from "../../components/Divider";
import TaskItem from "../../components/TaskItem/TaskItem.js";
import { globalStyles } from "../../styles/globalStyles";
import { HomeStyles } from "./HomeStyles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/colors";
import Header from "../../components/Header/Header";
import UserSessionContext from "../../services/UserSessionContext.js";
import navigationPaths from "../../navigation/navigationPaths";
import { TasksData } from "../../data/TasksData.js";
import { usersApi } from "../../api";
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

      const tasks = allTasks.filter((task) => !task.done && dateToString(new Date()) === task.date)
      setTasks(tasks)

    } catch (error) {
      console.log("Error Message: " + error.message);
    }

  };

  const handleTaskPress = (key) => {
    TasksData[key].done = true;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id != key));
  };

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
            key={item.id}
            item={item}
            pressHandler={cardPressHandler}
            hasNotification={"yes"}
          />
        ))}
        <View style={HomeStyles.button}>
          <AntDesign
            name="plussquare"
            size={32}
            color={colors.primary}
            onPress={addPetButtonPressed}
          />
        </View>
      </ScrollView>
      <Divider />
      <Text style={globalStyles.subtitleText}>Today</Text>
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
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
