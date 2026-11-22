
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AboutScreen from './Screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#2196F3',
        }}
      >
        <Drawer.Screen
          name="HomeDrawer"
          component={HomeStack}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="AboutDrawer"
          component={AboutStack}
          options={{ drawerLabel: 'About' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
