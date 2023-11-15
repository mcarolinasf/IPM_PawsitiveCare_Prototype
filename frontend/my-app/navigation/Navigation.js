
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {Home } from "../screens/Home/Home"

const Tab = createBottomTabNavigator()


function TabGroup() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
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