import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import MapScreen from "./src/screens/MapScreen"
import SavedScreen from "./src/screens/SavedScreen"
import SettingsScreen from "./src/screens/SettingsScreen"
import InfoScreen from "./src/screens/InfoScreen"

const homeIconActive = require("./src/assets/icons/home-active.png")
const homeIcon = require("./src/assets/icons/home.png")
const compassActive = require("./src/assets/icons/compass-active.png")
const compass = require("./src/assets/icons/compass.png")
const savedIconActive = require("./src/assets/icons/saved-active.png")
const savedIcon = require("./src/assets/icons/saved.png")
const settingsIconActive = require("./src/assets/icons/settings-active.png")
const settingsIcon = require("./src/assets/icons/settings.png")

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? homeIconActive : homeIcon
              } else if (route.name === "Map") {
                iconName = focused ? compassActive : compass
              } else if (route.name === "Saved") {
                iconName = focused ? savedIconActive : savedIcon
              } else if (route.name === "Settings") {
                iconName = focused ? settingsIconActive : settingsIcon
              }
              return (
                <Image source={iconName}
                  resizeMode="contain"
                  style={styles.footerIcon}
                />
              )
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "black",
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              borderTopColor: "gray",
              borderTopWidth: 2,
              borderLeftColor: "gray",
              borderLeftWidth: 2,
              borderRightColor: "gray",
              borderRightWidth: 2,
              height: 60,
            }
          })
        } >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   backgroundColor: "black",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  footerIcon: {
    width: 20,
    height: 20
  }
})

export default App;
