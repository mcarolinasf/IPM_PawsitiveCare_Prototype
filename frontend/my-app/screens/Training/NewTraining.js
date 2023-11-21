import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import { SafeAreaView, ScrollView, View, Image, Text } from "react-native";
import Header from "../../components/Header/Header";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import Divider from "../../components/Divider";
import { NewTrainingStyles } from "./NewTrainingStyles";
import { TrainingPlanData } from "../../data/TrainingPlanData";

export const NewTraining = () => {
  const [type, setType] = useState("Tricks");

  const plansList = Object.values(TrainingPlanData);
  const tricksList = plansList.filter((item) => item.type === "Tricks");
  const coachingList = plansList.filter((item) => item.type === "Coaching");

  //const numViewsToCreate = Math.floor(Object.keys(TrainingPlanData).length / 2);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={"New Training"} goBack showProfile />
      <View style={NewTrainingStyles.filtersView}>
        <FilterButton
          name={"Tricks"}
          onPressFunction={() => setType("Tricks")}
          isDarkGrey={type === "Tricks"}
          isFlex={true}
          buttonHeight={35}
        />
        <FilterButton
          name={"Coaching"}
          onPressFunction={() => setType("Coaching")}
          isDarkGrey={type === "Coaching"}
          isFlex={true}
          buttonHeight={35}
        />
      </View>
      <Divider />
      <ScrollView
        style={NewTrainingStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={NewTrainingStyles.view}>
          {type === "Tricks" &&
            tricksList.map((e) => (
              <View key={e.id} style={NewTrainingStyles.imageContainer}>
                <Image
                  style={NewTrainingStyles.image}
                  source={{
                    uri: e.imageUrl,
                  }}
                />
              </View>
            ))}
          {type === "Coaching" &&
            coachingList.map((e) => (
              <View key={e.id} style={NewTrainingStyles.imageContainer}>
                <Image
                  style={NewTrainingStyles.image}
                  source={{
                    uri: e.imageUrl,
                  }}
                />
              </View>
            ))}
          {((type === "Tricks" && !tricksList.length) ||
            (type === "Coaching" && !coachingList.length)) && (
            <Text style={NewTrainingStyles.noPlansText}>
              No plans available
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
