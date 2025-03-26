import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home'; 
import Profile from './Profile';
import Contact from './Contact';
import { Text, View, Button } from 'react-native';
import FetchDataFlatlist from './FetchDataFlatlist';
import Stacknavigator from './Stacknavigator';
import BottomTabNavigator from './BottomTabNavigator';
import LoginPage from './LoginPage';
import OpenAndCloseDrawer from './OpenAndCloseDrawer';
import ModalComponent from './ModalComponent';
import SignupComponent from './SignupComponent';


function AppDrawer() {
    const Drawer = createDrawerNavigator();
    return (
            <NavigationContainer>
             <Drawer.Navigator  >
             <Drawer.Screen
          name="bottom"
          component={BottomTabNavigator}
          options={{
            
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: '#333333' },
            headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
            // drawerIcon: ({ focused, size }) => (
            //   <Entypo name="home" size={size} color={focused ? 'green' : 'gray'} />
            // ),
          }}
        />
        <Drawer.Screen
          name="Signup Page"
          component={SignupComponent}
          options={{
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: '#333333' },
          //   headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          //   // drawerIcon: ({ focused, size }) => (
          //   //   <Entypo name="home" size={size} color={focused ? 'green' : 'gray'} />
          //   // ),
          }}
        />

               <Drawer.Screen
          name="Login Page"
          component={LoginPage}
          options={{
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: '#333333' },
          //   headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          //   // drawerIcon: ({ focused, size }) => (
          //   //   <Entypo name="home" size={size} color={focused ? 'green' : 'gray'} />
          //   // ),
          }}
        />

<Drawer.Screen
          name="Modal Page"
          component={ModalComponent}
          options={{
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: '#333333' },
          //   headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          //   // drawerIcon: ({ focused, size }) => (
          //   //   <Entypo name="home" size={size} color={focused ? 'green' : 'gray'} />
          //   // ),
          }}
        />
<Drawer.Screen
          name="DrawerLayout page"
          component={OpenAndCloseDrawer}
          options={{
            headerTitleAlign: 'left',
            headerTintColor: 'green',
            headerStyle: { backgroundColor: '#333333' },
          //   headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
          //   // drawerIcon: ({ focused, size }) => (
          //   //   <Entypo name="home" size={size} color={focused ? 'green' : 'gray'} />
          //   // ),
          }}
        />


        <Drawer.Screen
          name="Shoping"
          component={FetchDataFlatlist}
          options={{
            headerTitle: 'Shopping',
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

export default AppDrawer;
