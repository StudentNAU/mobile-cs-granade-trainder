import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreens/HomeScreen';
import MapSelectorScreen from './HomeScreens/MapSelector/MapSelectorScreen';
import SelectedMapScreen from './HomeScreens/MapSelector/SelectedMap/SelectedMapScreen';
import React from "react";

const HomeStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='Map Selector' component={MapSelectorScreen}/>
      <HomeStack.Screen name='Selected Map' component={SelectedMapScreen} />
    </HomeStack.Navigator>

  )
}
export default HomeStackScreens;