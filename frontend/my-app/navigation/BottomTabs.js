import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationStyle } from './NavigationStyles';

// Screens
import { Home } from "../screens/Home/Home"
import { Calendar } from '../screens/Calendar/Calendar';
import { Training } from '../screens/Training/Training';
import { Diary } from '../screens/Diary/Diary';

//Screen names
import navigationScreens from './navigationPaths';

const Tab = createBottomTabNavigator();


export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationScreens.home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: [NavigationStyle.container],
        animationEnabled: true
      }}>
      <Tab.Screen name={navigationScreens.home} component={Home} />
      <Tab.Screen name={navigationScreens.calendar} component={Calendar} />
      <Tab.Screen name={navigationScreens.training} component={Training} />
      <Tab.Screen name={navigationScreens.diary} component={Diary} />
    </Tab.Navigator>
  )
}