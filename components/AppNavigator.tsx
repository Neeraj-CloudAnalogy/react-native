import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PhoneList from './PhoneList';  // Your main screen
// import CartScreen from './CartScreen'; // Correct Cart Screen
import ApiCalling from './ApiCalling';
import PhoneItem from './PhoneItem';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneList">
        <Stack.Screen name="PhoneList" component={PhoneList} options={{ title: "Available Phones" }} />
        <Stack.Screen name="Cart" component={PhoneItem} options={{ title: "Your Cart" }} />
        <Stack.Screen name="ApiCalling" component={ApiCalling} options={{ title: "API Calling" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
