import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home'; 
import Profile from './components/Profile';
import Contact from './components/Contact';
import { Text, View, Button } from 'react-native';
import Stacknavigator from './components/Stacknavigator';
import DrawerComponent from './components/DrawerComponet';




function App(): React.JSX.Element {
  return (
  <>
   {/* <Stacknavigator/> */}
   <DrawerComponent/>
  
  </>
   
    
  );
}




export default App;
