import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home'; 
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import { Text, View, Button } from 'react-native';

function Stacknavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer> 
             <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Home',
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: 'lightblue' },
            headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: 'Profile',
            headerTitleAlign: 'center',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: 'lightblue' },
            headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitle: 'Contact Page',
            headerTitleAlign: 'center',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: 'lightblue' },
            headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>  

        </NavigationContainer>
       
    );
}

export default Stacknavigator;