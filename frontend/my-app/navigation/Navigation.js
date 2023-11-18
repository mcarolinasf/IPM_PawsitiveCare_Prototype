
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationScreens from './navigationPaths';
import { BottomTabs } from './BottomTabs';
import { Pet } from '../screens/Pet/Pet';
import { useState, useEffect, useContext } from 'react';
import UserSessionContext from '../services/UserSessionContext';

// Screens
import { Home } from "../screens/Home/Home"
import { Login } from '../screens/Login/Login';
import { Register } from '../screens/Register/Register';


const Stack = createNativeStackNavigator();


export const Navigation = () => {
  const { user } = useContext(UserSessionContext); 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? Home : Login} screenOptions={{animationEnabled: false, headerShown: false}}>
           <Stack.Screen name={"BottomBar"}>
              {() => <BottomTabs />}
            </Stack.Screen>
            <Stack.Screen name={navigationScreens.pet} component={Pet} />
            <Stack.Screen name={navigationScreens.login} component={Login} />
            <Stack.Screen name={navigationScreens.register} component={Register} />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
