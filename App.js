
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomScreen";
import {AppTabNavigator} from "./components/AppTabNavigator";

export default function App() {
  return (
  <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{Screen:AppTabNavigator},
  
})
const AppContainer = createAppContainer(switchNavigator)
