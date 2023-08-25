import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import About from '../screens/About';
import Cards from '../screens/Cards';
import Home from '../screens/Home';
import CameraExample from '../screens/About';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#ff8000'}}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="Images" component={CameraExample} />
      <Tab.Screen name="Cards" component={Cards} />
    </Tab.Navigator>
  );
}
function CameraScreen() {
  return <CameraExample />;
}
export default BottomNavigator;
