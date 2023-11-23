import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard} from './dashboard';
import Logos from '../components/svgIcons';
import { Wallet } from './wallet';
import { Guide } from './guide';
import { Chart } from './chart';
const screenOptions = {
  tabBarActiveTintColor: "rgba(3, 115, 243, 1)",
  tabBarInactiveTintColor: "rgba(188, 188, 188, 1)",
  headerShown: false,
  tabBarHideOnKeyboard: true,
  
  
};
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
     
      screenOptions={screenOptions}
      tabBarOptions={{showLabel: true}}
      initialRouteName="dashBoard">
      <Tab.Screen
        name="dashBoard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle:{fontSize:14,fontWeight:400},
          tabBarIcon: (tabInfo) => (!tabInfo.focused ? <Logos icon="home" /> : <Logos icon="homeBlue" />),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Wallet',
          tabBarLabelStyle:{fontSize:14,fontWeight:400},
          tabBarIcon: (tabInfo) => (!tabInfo.focused ? <Logos icon="wallet" /> : <Logos icon="walletBlue" />),
        }}
      />
      <Tab.Screen
        name="Guide"
        component={Guide}
        options={{
          tabBarLabel: 'Guide',
          tabBarLabelStyle:{fontSize:14,fontWeight:400},
          tabBarIcon: (tabInfo) => (!tabInfo.focused ? <Logos icon="guideSilver" /> : <Logos icon="guideBlue" />),
        }}
      />
      <Tab.Screen
        name="chart"
        component={Chart}
        options={{
          tabBarLabel: 'Chart',
          tabBarLabelStyle:{fontSize:14,fontWeight:400},
          tabBarIcon: (tabInfo) => (!tabInfo.focused ? <Logos icon="chartSilver" /> : <Logos icon="chartBlue" />),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
