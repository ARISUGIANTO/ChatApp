import * as React from 'react';
import { Image, HeaderContainer, View, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// tambahan
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Screens
import HomeScreen from './pages/home';
import CallScreen from './pages/detail';
import ChatScreen from './pages/chat';
import SettingScreen from './pages/Setting';
import ContactScreen from './pages/Contact';
import ProfileScreen from './pages/Profile';






const Tab = createBottomTabNavigator();
const Nav = createStackNavigator();




const Mytabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pesan"
      activeColor="#003865"
      inactiveColor="#A6FF96"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen name='Pesan' component={HomeScreen} options={{
        headerShown: false,
        tabBarLabel: 'Pesan',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chat" color={color} size={40} />
        ),
      }} />
      <Tab.Screen name='Panggilan' component={CallScreen} options={{
        headerShown: false,
        tabBarLabel: 'Panggilan',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="phone" color={color} size={40} />
        ),
      }} />
      <Tab.Screen name='Kontak' component={ContactScreen} options={{
        headerShown: false,
        tabBarLabel: 'Kontak',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-box" color={color} size={40} />
        ),
      }} />
      <Tab.Screen name='Profil' component={SettingScreen} options={{
        headerShown: false,
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog-outline" color={color} size={40} />
        ),
      }} />

    </Tab.Navigator>

  )

}

const App = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="Main" component={Mytabs} options={{ headerShown: false }} />
        <Nav.Screen name="Chat" component={ChatScreen}
          options={({ route }) => ({
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image source={route.params.userImg} style={styles.userImg} />
                <Text style={styles.userName}>{route.params.userName}</Text>
                <View style={{ left: 180, marginRight: 8 }}>
                  < MaterialCommunityIcons name="video" color={'#2e64e5'} size={24} />
                </View>
                <View style={{ left: 180, marginRight: 8 }}>
                  < MaterialCommunityIcons name="phone" color={'#2e64e5'} size={23} />
                </View>

              </View>
            ),
          })} />
        <Nav.Screen name="Profil" component={ProfileScreen} />
      </Nav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;