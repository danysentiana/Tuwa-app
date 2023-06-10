import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { BackHandler } from "react-native";

import Login from "./screen/Login";
import Splash from "./screen/Splash";
import Home from "./screen/Home";
import About from "./screen/About";
import Account from "./screen/Account";
import Register from "./screen/Register";
import Contact from "./screen/Contact";
import Detail from "./screen/Detail";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: "#0091EA",
  inactiveTintColor: "gray",
  style: { backgroundColor: "white" },
};

const MainApp = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="Home" activeColor="#fff" tabBarOptions={customTabBarStyle} shifting="false">
        <Tab.Screen
          name="About"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => <AntDesign name="infocirlce" size={20} color={"black"} />,
          }}
          component={About}
        ></Tab.Screen>

        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => <MaterialIcons name="home" size={26} color={"black"} />,
          }}
          component={Home}
        ></Tab.Screen>

        <Tab.Screen
          name="Account"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => <MaterialIcons name="account-box" size={24} color={"black"} />,
          }}
          component={Account}
        ></Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default function index() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
          <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
