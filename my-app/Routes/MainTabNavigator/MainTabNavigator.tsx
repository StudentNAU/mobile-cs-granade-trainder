import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreens from './HomeStackScreens/HomeStackScreens';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeStack" component={HomeStackScreens} options={{headerShown: false}} />
  </Tab.Navigator>
);

export default MainTabNavigator;