import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationScreens from "./navigationPaths";
import { BottomTabs } from "./BottomTabs";
import { Pet } from "../screens/Pet/Pet";
import { useState, useEffect, useContext } from "react";
import UserSessionContext from "../services/UserSessionContext";

// Screens
import { Home } from "../screens/Home/Home";
import { InitialPage } from "../screens/auth/InitialPage/InitialPage";
import { Login } from "../screens/auth/Login/Login";
import { Register } from "../screens/auth/Register/Register";
import { Profile } from "../screens/Profile/Profile";
import { AddPet } from "../screens/AddPet/AddPet";
import { VetAppointments } from "../screens/VetAppointments/VetAppointments";
import { Body } from "../screens/Body/Body";
import { Medication } from "../screens/Medication/Medication";
import { Feeding } from "../screens/FeedingScreen/FeedingScreen";
import { ScheduleMedication } from "../screens/Schedule/ScheduleMedication";
import { ScheduleFeeding } from "../screens/Schedule/ScheduleFeeding";
import { ScheduleGrooming } from "../screens/Schedule/ScheduleGrooming";
import { NewTraining } from "../screens/Training/NewTraining";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { user } = useContext(UserSessionContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? Home : InitialPage}
        screenOptions={{ animationEnabled: false, headerShown: false }}
      >
        {user ? (
          <>
            <Stack.Screen name={"BottomBar"}>
              {() => <BottomTabs />}
            </Stack.Screen>
            <Stack.Screen name={navigationScreens.pet} component={Pet} />
            <Stack.Screen
              name={navigationScreens.profile}
              component={Profile}
            />
            <Stack.Screen name={navigationScreens.addPet} component={AddPet} />
            <Stack.Screen
              name={navigationScreens.feeding}
              component={Feeding}
            />
            <Stack.Screen
              name={navigationScreens.vetAppointments}
              component={VetAppointments}
            />
            <Stack.Screen name={navigationScreens.body} component={Body} />
            <Stack.Screen
              name={navigationScreens.medication}
              component={Medication}
            />
            <Stack.Screen
              name={navigationScreens.scheduleMed}
              component={ScheduleMedication}
            />
            <Stack.Screen
              name={navigationScreens.scheduleFed}
              component={ScheduleFeeding}
            />
            <Stack.Screen
              name={navigationScreens.scheduleGroom}
              component={ScheduleGrooming}
            />
            <Stack.Screen
              name={navigationScreens.newTraining}
              component={NewTraining}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={navigationScreens.initial}
              component={InitialPage}
            />
            <Stack.Screen name={navigationScreens.login} component={Login} />
            <Stack.Screen
              name={navigationScreens.register}
              component={Register}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
