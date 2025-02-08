import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from './Routes/MainTabNavigator/MainTabNavigator';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
