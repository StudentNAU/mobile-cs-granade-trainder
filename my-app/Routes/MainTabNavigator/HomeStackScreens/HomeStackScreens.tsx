import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreens/HomeScreen';
import MapSelectorScreen from './MapSelector/MapSelectorScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='Map Selector' component={MapSelectorScreen}/>
    </HomeStack.Navigator>

  )
}
export default HomeStackScreens;