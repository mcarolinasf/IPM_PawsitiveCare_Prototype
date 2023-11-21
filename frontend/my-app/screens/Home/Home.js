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
import { PetsData } from "../../data/PetsData.js";
import { TasksData } from "../../data/TasksData.js";

export const Home = ({ navigation }) => {
  const [pets, setPets] = useState([]);
  const [tasks, setTasks] = useState([]);

  const { user } = useContext(UserSessionContext);

  const cardPressHandler = (item) => {
    navigation.navigate(navigationPaths.pet, { pet: item });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var petIds = user.petIds;

    //Set pets
    var pets = petIds.map((id) => PetsData[id]);
    setPets(pets);

    //Set tasks
    const tasks = pets.flatMap((pet) =>
      pet.tasksIds.map((id) => TasksData[id])
    );
    setTasks(tasks);
  };

  const handleTaskPress = (key) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != key));
  };

  const addPetButtonPressed = () => {
    navigation.navigate(navigationScreens.addPet);
  };

  const pageTitle = "Home";

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={pageTitle} showProfile />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height: "25%" }}
      >
        {pets.map((item) => (
          <Card key={item.id} item={item} pressHandler={cardPressHandler} />
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
        style={{ marginBottom: 90, height: "75%" }}
      >
        <View>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              pressHandler={handleTaskPress}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
