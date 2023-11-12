import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// tambahan
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Screens
import HomeScreen from './pages/home';
import CallScreen from './pages/detail';
import SettingsScreen from './pages/Setting';
import ContactScreen from './pages/contact';
import ChatScreen from './pages/chat';

//Screen names
const homeName = "Home";
const detailsName = "Calls";
const settingsName = "Setting";
const ContactName = "contact";


const Tab = createBottomTabNavigator();
// tambahan
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Chat" component={ChatScreen} />
    </HomeStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={homeName} component={HomeStackScreen}
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
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }} />

      </Tab.Navigator>


    </NavigationContainer>
  );
}

export default App;