
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationStyle } from './NavigationStyles';
import { globalStyles } from '../styles/globalStyles';


// Screens
import { Home } from "../screens/Home/Home"
import { Calendar } from '../screens/Calendar/Calendar';
import { Training } from '../screens/Training/Training';
import { Diary } from '../screens/Diary/Diary';
import { Login } from '../screens/Login/Login';
import { Register } from '../screens/Register/Register';

import navigationScreens from './navigationPaths';
import { BottomTabs } from './BottomTabs';
import { Pet } from '../screens/Pet/Pet';



const Stack = createNativeStackNavigator();


export const Navigation = () => {
  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? Home : Login} screenOptions={{ animationEnabled: false, headerShown: false }}>
        <Stack.Screen name={navigationScreens.login} component={Login} />
        <Stack.Screen name={navigationScreens.register} component={Register} />
        <Stack.Screen name={navigationScreens.home}>
          {() => (
            <BottomTabs />
          )}
        </Stack.Screen>
        <Stack.Screen name={navigationScreens.pet} component={Pet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}