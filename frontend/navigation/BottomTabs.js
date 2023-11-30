import React, { useContext, useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationStyle } from './NavigationStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Screens
import { Home } from "../screens/Home/Home"
import { Calendar } from '../screens/Calendar/Calendar';
import { Training } from '../screens/Training/Training';
import { Diary } from '../screens/Diary/Diary';
import { Pet } from '../screens/Pet/Pet';

//Screen names
import navigationScreens from './navigationPaths';
import colors from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';
import { TouchableOpacity, View, Text } from 'react-native';
import { PickPetModal } from "../components/Modal/PickPetModal";
import { useNavigation } from "@react-navigation/native";



const Tab = createBottomTabNavigator();


export const BottomTabs = ({ navigation }) => {

  const [pet, setPet] = useState(false)
  const [selectPetModal, setSelectPetModal] = useState(false)

  const handlePetModal = (value) => {
    setSelectPetModal(value)
  }



  const getTabBarIcon = (routeName, focused, size) => {
    const navigation = useNavigation();


    if (routeName === navigationScreens.pickPet) {
      return (
        <>
          <TouchableOpacity onPress={() => handlePetModal(true)} style={{ ...NavigationStyle.pawIcon, ...globalStyles.shadow }}>
            <View>
              <MaterialCommunityIcons name="paw" size={35} color={colors.white} />
            </View>

          </TouchableOpacity>
          <PickPetModal
            navigation={navigation}
            visible={selectPetModal}
            handleModal={handlePetModal}
            title={'Select your pet'}
            setPet={setPet}

          />
        </>

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
      case navigationScreens.pickPet:
        iconName = 'paw';
        break;
      case navigationScreens.training:
        iconName = 'dumbbell';
        break;
      case navigationScreens.diary:
        iconName = 'book-outline';
        break;
      default:
        iconName = focused ? 'placeholder-icon-for-undefined' : 'placeholder-icon-for-undefined-outline';
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
      <Tab.Screen name={navigationScreens.pickPet} component={PickPetModal} />
      <Tab.Screen name={navigationScreens.pet} component={Pet} options={{ tabBarButton: () => null }}
      />
      <Tab.Screen name={navigationScreens.training} component={Training} />
      <Tab.Screen name={navigationScreens.diary} component={Diary} />
    </Tab.Navigator>
  )
}

