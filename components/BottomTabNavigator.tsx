import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
// import { Ionicons } from 'react-native-vector-icons'; 
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ focused, size }) => (
          //   // <Ionicons
          //   //   name={focused ? 'home' : 'home-outline'}
          //   //   size={size}
          //   //   color={focused ? 'tomato' : 'gray'}
          //   // />
          // ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ focused, size }) => (
          //   <Ionicons
          //     name={focused ? 'person' : 'person-outline'}
          //     size={size}
          //     color={focused ? 'tomato' : 'gray'}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          // tabBarIcon: ({ focused, size }) => (
          //   <Ionicons
          //     name={focused ? 'call' : 'call-outline'}
          //     size={size}
          //     color={focused ? 'tomato' : 'gray'}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
