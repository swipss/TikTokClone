import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()

export default function HomeBottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#000'
            },
            tabBarActiveTintColor: '#fff'
        }} >
            <Tab.Screen 
            name='Home' 
            component={Home} 
            options={{headerShown: false, tabBarIcon: ({color}) => (
                <Entypo name='home' size={25} color={color} />
            )}} />

            <Tab.Screen 
            name='Search' 
            component={Home} 
            options={{headerShown: false, tabBarIcon: ({color}) => (
                <AntDesign name='search1' size={25} color={color} />
            )}} />

            <Tab.Screen 
            name='Upload'
            component={Home}
            options={{
                tabBarIcon: ({}) => (
                    <Image source={require('../assets/images/plus.png')} style={{height: 35, resizeMode: 'contain'}} />
                ),
                tabBarLabel: () => null,
            }} 
            />

            <Tab.Screen 
            name='Inbox' 
            component={Home} 
            options={{headerShown: false, tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name='message-minus-outline' size={25} color={color} />
            )}} />

            <Tab.Screen
            name='Profile' 
            component={Home} 
            options={{headerShown: false, tabBarIcon: ({color}) => (
                <IonIcons name='person-outline' size={25} color={color} />
            )}} />
        </Tab.Navigator>
    )
}