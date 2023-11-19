import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationStyle } from './NavigationStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { PetsData } from '../data/PetsData';


// Screens
import { Home } from "../screens/Home/Home"
import { Calendar } from '../screens/Calendar/Calendar';
import { Training } from '../screens/Training/Training';
import { Diary } from '../screens/Diary/Diary';

//Screen names
import navigationScreens from './navigationPaths';
import colors from '../styles/colors';
import { Pet } from '../screens/Pet/Pet';
import { globalStyles } from '../styles/globalStyles';

const Tab = createBottomTabNavigator();


export const BottomTabs = () => {

  const getTabBarIcon = (routeName, focused, size) => {

    if (routeName === navigationScreens.pet) {
      return (
        <View style={{ ...NavigationStyle.pawIcon, ...globalStyles.shadow }}>
          <MaterialCommunityIcons name="paw" size={35} color={colors.white} />
        </View>
      );
    }

    let iconName;

    switch (routeName) {
      case navigationScreens.home:
        iconName = 'home';
        break;
      case navigationScreens.calendar:
        iconName = 'calendar-month-outline';
        break;
      case navigationScreens.pet:
        iconName = 'paw';
        break;
      case navigationScreens.training:
        iconName = focused ? 'dumbbell' : 'dumbbell';
        break;
      case navigationScreens.diary:
        iconName = 'book-outline';
        break;
      default:
        iconName = focused ? 'placeholder-icon-for-undefined' : 'placeholder-icon-for-undefined-outline';
        iconColor = focused ? colors.primary : colors.grey;
        break;
    }

    return <MaterialCommunityIcons name={iconName} size={size} color={focused ? colors.primary : colors.grey} />;
  };


  return (
    <Tab.Navigator
      initialRouteName={navigationScreens.home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [NavigationStyle.container],
        animationEnabled: true,
        tabBarIcon: ({ focused, size }) => {
          return getTabBarIcon(route.name, focused, size);
        },
      })}>
      <Tab.Screen name={navigationScreens.home} component={Home} />
      <Tab.Screen name={navigationScreens.calendar} component={Calendar} />
      <Tab.Screen name={navigationScreens.pet} component={Pet} initialParams={PetsData[0]} />
      <Tab.Screen name={navigationScreens.training} component={Training} />
      <Tab.Screen name={navigationScreens.diary} component={Diary} />
    </Tab.Navigator>
  )
}

