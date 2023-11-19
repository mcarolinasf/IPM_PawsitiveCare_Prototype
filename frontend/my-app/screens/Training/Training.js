import React from "react";
import { Button, View, Text, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import Header from "../../components/Header/Header";
import { TrainingStyles } from "./TrainingStyles";
import { Ionicons } from "@expo/vector-icons";
import Divider from "../../components/Divider";
import { NewButton } from "../../components/NewButton/NewButton";

export const Training = () => {
  /*TODO: finish this function*/
  const onPressFilter = (type) => {
    if (type === "All") return null;
    else if (type === "Tricks") return null;
    else if (type === "Coaching") return null;
  };

  const onPressNewTraining = () => {};

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header title={"Training"} showProfile />
        <View style={TrainingStyles.filterButtonsView}>
          <FilterButton
            name={"All"}
            onPressFunction={() => onPressFilter("All")}
            isDarkGrey={true}
          />
          <FilterButton
            name={"Tricks"}
            onPressFunction={() => onPressFilter("Tricks")}
            isDarkGrey={false}
          />
          <FilterButton
            name={"Coaching"}
            onPressFunction={() => onPressFilter("Coaching")}
            isDarkGrey={false}
          />
          <Ionicons name="filter" size={30} color="black" />
        </View>
        <Divider />
        <NewButton title="New Training" onPressFunction={onPressNewTraining} />
        <ScrollView>
          <View style={TrainingStyles.listView}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
