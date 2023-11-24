import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header/Header";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import Divider from "../../components/Divider";
import { NewTrainingStyles } from "./NewTrainingStyles";
import { TrainingPlanData } from "../../data/TrainingPlanData";
import { NewTrainingModal } from "../../components/Modal/NewTrainingModal";

export const NewTraining = () => {
  const [type, setType] = useState("Tricks");
  const [selectedPlan, setPlan] = useState(false);
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  const plansList = Object.values(TrainingPlanData);
  const tricksList = plansList.filter((item) => item.type === "Tricks");
  const coachingList = plansList.filter((item) => item.type === "Coaching");

  const handlePopUp = (value) => {
    setMenuModalVisible(value);
  };

  const handlePlanPress = (plan) => {
    setPlan(plan);
    handlePopUp(true);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={"New Training"} goBack showProfile />
      <View>
        <View style={NewTrainingStyles.filtersView}>
          <FilterButton
            name={"Tricks"}
            onPressFunction={() => setType("Tricks")}
            isDarkGrey={type === "Tricks"}
            buttonHeight={35}
          />
          <FilterButton
            name={"Coaching"}
            onPressFunction={() => setType("Coaching")}
            isDarkGrey={type === "Coaching"}
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
              tricksList.map((plan) => (
                <TouchableOpacity onPress={() => handlePlanPress(plan)}>
                  <View key={plan.id} style={NewTrainingStyles.imageContainer}>
                    <Image
                      style={NewTrainingStyles.image}
                      source={{
                        uri: plan.imageUrl,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            {type === "Coaching" &&
              coachingList.map((plan) => (
                <TouchableOpacity onPress={() => handlePlanPress(plan)}>
                  <View key={plan.id} style={NewTrainingStyles.imageContainer}>
                    <Image
                      style={NewTrainingStyles.image}
                      source={{
                        uri: plan.imageUrl,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            {((type === "Tricks" && !tricksList.length) ||
              (type === "Coaching" && !coachingList.length)) && (
                <Text style={NewTrainingStyles.noPlansText}>
                  No plans available
                </Text>
              )}
          </View>
        </ScrollView>

        <NewTrainingModal
          visible={menuModalVisible}
          handleModal={handlePopUp}
          plan={selectedPlan}
        />
      </View>
    </SafeAreaView>
  );
};
