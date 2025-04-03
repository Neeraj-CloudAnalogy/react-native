import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/Home';
import Profile from './components/Profile';
import Contact from './components/Contact';
import {Text, View, Button, FlatList} from 'react-native';
import Stacknavigator from './components/Stacknavigator';
import DrawerComponent from './components/DrawerComponet';
import LoginPage from './components/LoginPage';
import OpenAndCloseDrawer from './components/OpenAndCloseDrawer';
import ModalComponent from './components/ModalComponent';
import SignupComponent from './components/SignupComponent';
import axios, {Axios} from 'axios';
import ApiCalling from './components/ApiCalling';
import PropsDrillingAndContextApi from './components/PropsDrillingAndContextApi';
import PhoneList from './components/PhoneList';
import AppNavigator from './components/AppNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <AppNavigator />
    </>
  );
}

export default App;
