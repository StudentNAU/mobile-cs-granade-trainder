// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './Routes/MainTabNavigator/MainTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}