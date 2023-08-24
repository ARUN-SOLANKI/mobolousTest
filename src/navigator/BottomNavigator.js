import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import About from '../screens/About';
import Cards from '../screens/Cards';
import Home from '../screens/Home';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#ff8000'}}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="Images" component={About} />
      <Tab.Screen name="Cards" component={Cards} />
    </Tab.Navigator>
  );
}
export default BottomNavigator;
