import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard} from './dashboard';
import Logos from '../components/svgIcons';
const screenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
};
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{showLabel: false}}
      initialRouteName="dashBoard">
      <Tab.Screen
        name="dashBoard"
        component={Dashboard}
        options={{
          tabBarIcon: tabInfo => <Logos icon="dashboard" />,
        }}
      />
      <Tab.Screen
        name="graph"
        component={Dashboard}
        options={{
          tabBarIcon: tabInfo => <Logos icon="graph" />,
        }}
      />
      <Tab.Screen
        name="calendar"
        component={Dashboard}
        options={{
          tabBarIcon: tabInfo => <Logos icon="calendar" />,
        }}
      />
      <Tab.Screen
        name="myaccount"
        component={Dashboard}
        options={{
          tabBarIcon: tabInfo => <Logos icon="myAccount" />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
