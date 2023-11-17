
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'


// Screens
import { Home } from "../screens/Home/Home"
import { Calendar } from '../screens/Calendar/Calendar';
import { Training } from '../screens/Training/Training';
import { Diary } from '../screens/Diary/Diary';
import { NavigationStyle } from './NavigationStyles';
import { globalStyles } from '../styles/globalStyles';

// Screen names
const homeName = "Home";
const calendarName = "Calendar";
const trainingName = "Training";
const diaryName = "Diary";





function TabGroup({name, Screen, tabIcon}) {

    const Tab = createBottomTabNavigator()

  /*   const TabScreen = (name, Screen, tabIcon) => {
      return (
        <Tab.Screen name={name}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={NavigationStyle.tab}>
                  <Image source={tabIcon}
                          resizeMode={'contain'}
                          alt={{name} + "icon"}
                          style={NavigationStyle.icon}/>
                  <Text style={NavigationStyle.text}> {name} </Text>
                </View>),
              }}
            >
          <Screen/>
        </Tab.Screen>
      )
    }
 */

    return (
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={{
              /* TODO: Change later */
              headerShown: true,
              tabBarShowLabel: true,
              tabBarStyle: [NavigationStyle.container],
              animationEnabled: true
          }}
              
              /* screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;
                  let rn = route.name;

                  switch (rn) {
                    case homeName:
                      iconName = focused ? "home" : "home-outline";
                    case calendarName:
                      iconName = focused ? "calendar" : "calendar-outline";
                    case trainingName:
                      iconName = focused ? "training" : "training-outline";
                    case diaryName:
                      iconName = focused ? "diary" : "diary-outline";
                    default:
                     break;
                  }
                }
              })} */
            >
                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={calendarName} component={Calendar} />
                <Tab.Screen name={trainingName} component={Training} />
                <Tab.Screen name={diaryName} component={Diary} />
            </Tab.Navigator>
    )
}

export const Navigation = () => {
  return (
    <NavigationContainer> 
        <TabGroup/>
    </NavigationContainer>
  )
}