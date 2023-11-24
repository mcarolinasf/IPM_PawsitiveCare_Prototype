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
import UserSessionContext from "../../services/UserSessionContext.js";
import { useContext } from "react";
import { ItemsByTag } from "../../components/ItemsByTag/ItemsByTag.js";
import navigationPaths from "../../navigation/navigationPaths.js";
import { TaskType } from "../../data/TaskType";
import { usersApi } from "../../api";
import { dateToString } from "../../services/utils";

const listFilters = [
  {
    key: 0,
    type: "All",
    darkGrey: true,
  },
  {
    key: 1,
    type: "Tricks",
    darkGrey: false,
  },
  {
    key: 2,
    type: "Coaching",
    darkGrey: false,
  },
];

export const Training = ({ navigation }) => {
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



  const getData = async () => {

    try {

      const allTasks = await usersApi.getUserTasks(user.idU)

      const tasks = allTasks.filter((task) => !task.done)


      console.log(tasks)
      var tricks = allTasks.filter((task) => (task.type === TaskType.TRICKS))
      console.log('Tricks ->>' + tricks)

      setTricks(tricks);
      console.log('Tricks ----->>' + tricks)


      var coaching = tasks.filter(task => task.type === TaskType.COACHING)
      setCoaching(coaching);


    } catch (error) {
      console.log("Error Message: " + error.message);
    }

  };

  const handlePressNewTraining = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  const handleTaskPress = (key) => {

    if (tricks.findIndex(v => v === key))
      setTricks((prevTasks) => prevTasks.filter((task) => task.idT != key));

    if (coaching.findIndex(v => v === key))
      setCoaching((prevTasks) => prevTasks.filter((task) => task.idT != key));

  };



  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header title={"Training"} showProfile />
        <View style={{ ...TrainingStyles.filterButtonsView, paddingBottom: 5 }}>
          {listFilters.map((e) => (
            <FilterButton
              key={e.key}
              name={e.type}
              onPressFunction={() => setTypeFilter(e.type)}
              isDarkGrey={type === e.type}
              buttonHeight={35}
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
          <NewButton
            title="New Training"
            onPressFunction={() =>
              handlePressNewTraining(navigationPaths.newTraining)
            }
          />
        </View>

        <ScrollView
          style={TrainingStyles.listView}
          showsVerticalScrollIndicator={false}
        >
          {type === listFilters[0].type && (
            <>
              {tricks.length > 0 && (
                <>
                  <ItemsByTag handleTaskPress={handleTaskPress} tasks={tricks} type={listFilters[1].type} />
                  <View style={{ height: 10 }}></View>
                </>
              )}
              {coaching.length > 0 && (
                <ItemsByTag handleTaskPress={handleTaskPress} tasks={coaching} type={listFilters[2].type} />
              )}
              {!tricks.length && !coaching.length && (
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
              {tricks.length > 0 ? (
                <ItemsByTag handleTaskPress={handleTaskPress} tasks={tricks} type={type} />
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
              {coaching.length > 0 ? (
                <ItemsByTag handleTaskPress={handleTaskPress} tasks={coaching} type={type} />
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
