import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import Header from "../../components/Header/Header";
import { TrainingStyles } from "./TrainingStyles";
import { Ionicons } from "@expo/vector-icons";
import Divider from "../../components/Divider";
import { NewButton } from "../../components/NewButton/NewButton";
import colors from "../../styles/colors";
import TaskItem from "../../components/TaskItem/TaskItem";
import UserSessionContext from "../../services/UserSessionContext.js";
import { PetsData } from "../../data/PetsData.js";
import { TasksData } from "../../data/TasksData.js";
import { useContext } from "react";
import { ItemsByTag } from "../../components/ItemsByTag/ItemsByTag.js";

const listFilters = [
  {
    type: "All",
    darkGrey: true,
  },
  {
    type: "Tricks",
    darkGrey: false,
  },
  {
    type: "Coaching",
    darkGrey: false,
  },
];

const emptyList = [];

export const Training = () => {
  const [type, setType] = useState(listFilters[0].type);
  const [pets, setPets] = useState([]);
  const [tricks, setTricks] = useState([]);
  const [coaching, setCoaching] = useState([]);

  const { user } = useContext(UserSessionContext);

  const setTypeFilter = (type) => {
    setType(type);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var petIds = user.petIds;

    //Set pets
    var pets = petIds.map((id) => PetsData[id]);
    setPets(pets);

    //Set tricks
    var tricks = pets
      .flatMap((pet) =>
        pet.tasksIds.map(
          (id) => TasksData[id].type === listFilters[1].type && TasksData[id]
        )
      )
      .filter(Boolean);

    setTricks(tricks);

    //Set coachings
    var coaching = pets
      .flatMap((pet) =>
        pet.tasksIds.map(
          (id) => TasksData[id].type === listFilters[2].type && TasksData[id]
        )
      )
      .filter(Boolean);
    setCoaching(coaching);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header title={"Training"} showProfile />
        <View style={{ ...TrainingStyles.filterButtonsView, paddingBottom: 5 }}>
          {listFilters.map((e) => (
            <FilterButton
              key={e.type}
              name={e.type}
              onPressFunction={() => setTypeFilter(e.type)}
              isDarkGrey={type === e.type}
              isFlex={true}
            />
          ))}
          <Ionicons
            style={{ alignSelf: "center", marginLeft: 2 }}
            name="filter"
            size={25}
            color={colors.secondary}
          />
        </View>
        <Divider />
        <View style={{ marginTop: 5 }}>
          <NewButton title="New Training" onPressFunction={() => {}} />
        </View>

        <ScrollView style={TrainingStyles.listView}>
          {type === listFilters[0].type && (
            <>
              {tricks && (
                <>
                  <ItemsByTag tasks={tricks} type={listFilters[1].type} />
                  <View style={{ height: 10 }}></View>
                </>
              )}
              {coaching && (
                <ItemsByTag tasks={coaching} type={listFilters[2].type} />
              )}
              {!tricks && !coaching && (
                <Text
                  style={{
                    alignSelf: "center",
                    color: colors.secondary,
                    marginTop: 50,
                  }}
                >
                  No trainings schedule
                </Text>
              )}
            </>
          )}
          {type === listFilters[1].type && (
            <>
              {tricks ? (
                <ItemsByTag tasks={tricks} type={type} />
              ) : (
                <Text
                  style={{
                    alignSelf: "center",
                    color: colors.secondary,
                    marginTop: 50,
                  }}
                >
                  No trainings schedule
                </Text>
              )}
            </>
          )}
          {type === listFilters[2].type && (
            <>
              {coaching ? (
                <ItemsByTag tasks={coaching} type={type} />
              ) : (
                <Text
                  style={{
                    alignSelf: "center",
                    color: colors.secondary,
                    marginTop: 50,
                  }}
                >
                  No trainings schedule
                </Text>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
