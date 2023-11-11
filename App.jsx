import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Screens
import HomeScreen from './pages/home';
import CallScreen from './pages/detail';
import SettingsScreen from './pages/Setting';
import ContactScreen from './pages/contact';

//Screen names
const homeName = "Home";
const detailsName = "Calls";
const settingsName = "Setting";
const ContactName = "contact";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={homeName} component={HomeScreen}
          options={{
            tabBarLabel: 'Message',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="message-text" color={color} size={size} />
            ),
            tabBarBadge: 8,
          }}
        />
        <Tab.Screen name={detailsName} component={CallScreen}
          options={{
            tabBarLabel: 'Calls',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone" color={color} size={size} />
            ),
            tabBarBadge: 2,
          }} />
        <Tab.Screen name={ContactName} component={ContactScreen}
          options={{
            tabBarLabel: 'Contact',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-box" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name={settingsName} component={SettingsScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;