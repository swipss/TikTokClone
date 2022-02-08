import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import HomeBottomTabNavigator from './HomeBottomTabNavigator'

const Stack = createStackNavigator()

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={HomeBottomTabNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

