import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home'; 
import Profile from './Profile';
import Contact from './Contact';
import { Text, View, Button } from 'react-native';
import FetchDataFlatlist from './FetchDataFlatlist';

function Drawer() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
             <Drawer.Navigator>
             <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'HOME',
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: '#333333' },
            headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          }}
        />
        <Drawer.Screen
          name="Shoping"
          component={FetchDataFlatlist}
          options={{
            headerTitle: 'Shoping',
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: 'lightblue' },
            headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          }}
        />
        <Drawer.Screen
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
        <Drawer.Screen
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
      </Drawer.Navigator>  
      </NavigationContainer>

        
    );
}

export default Drawer;