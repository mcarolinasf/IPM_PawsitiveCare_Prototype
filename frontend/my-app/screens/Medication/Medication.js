import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import Header from "../../components/Header/Header";
import { MedicationStyles } from "./MedicationStyles.js";
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

export const Medication = ({ navigation, route }) => {

  const { pet } = route.params;

  const [type, setType] = useState(listFilters[0].type);
  const [upcoming, setUpcoming] = useState([]);
  const [done, setDone] = useState([]);

  const { user } = useContext(UserSessionContext);

  const setTypeFilter = (type) => {
    setType(type);
  };

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     var petIds = user.petIds;

//     //Set upcoming
//     var upcoming = (pet) =>
//         pet.tasksIds.map(
//           (id) => TasksData[id].type === listFilters[1].type && TasksData[id]
//         );
//     setUpcoming(upcoming);

//     //Set done
//     var done = (pet) =>
//         pet.tasksIds.map(
//           (id) => TasksData[id].type === listFilters[2].type && TasksData[id]
//         );
//     setDone(done);
//   };

  const handlePressNewMedication = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header title={"Medication"} showProfile goBack />
        <View style={{  paddingBottom: 20 }}>
        <View style={PetPictureStyles.container}{...globalStyles.shadow}>
            <Image
                    style={PetPictureStyles.rectangle}
                    source={{
                                uri: pet.photoUrl
                            }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />
                <Text>{pet.name}</Text>
        </View>
            
        </View>
        <ScrollView
          style={MedicationStyles.listView}
          showsVerticalScrollIndicator={false}
        >
          {type === listFilters[0].type && (
            <>
              {upcoming && (
                <>
                  <ItemsByTag tasks={upcoming} type={listFilters[1].type} />
                  <View style={{ height: 10 }}></View>
                </>
              )}
              {done && (
                <ItemsByTag tasks={done} type={listFilters[2].type} />
              )}
              {!upcoming && !done && (
                <Text
                  style={{
                    alignSelf: "center",
                    color: colors.secondary,
                    marginTop: 50,
                  }}
                >
                  No Medications schedule
                </Text>
              )}
            </>
          )}
          {type === listFilters[1].type && (
            <>
              {upcoming ? (
                <ItemsByTag tasks={upcoming} type={type} />
              ) : (
                <Text
                  style={{
                    alignSelf: "center",
                    color: colors.secondary,
                    marginTop: 50,
                  }}
                >
                  No Medications schedule
                </Text>
              )}
            </>
          )}
          {type === listFilters[2].type && (
            <>
              {done ? (
                <ItemsByTag tasks={done} type={type} />
              ) : (
                <Text
                  style={{
                    alignSelf: "center",
                    color: colors.secondary,
                    marginTop: 50,
                  }}
                >
                  No Medications schedule
                </Text>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
