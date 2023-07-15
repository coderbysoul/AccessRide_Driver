import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DriverProfile from "../DriverScreens/DriverProfile";
import DriverResources from "../DriverScreens/DriverResources";
import Leaderboard from "../DriverScreens/Leaderboard";
import RideDetailsScreen from "../DriverScreens/RideDetailsScreen";
import { app, auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { Entypo } from "@expo/vector-icons";
import DashboardStackScreen from "./DashboardStackScreen";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logged out!");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 30;

            if (route.name === "Dashboard") {
              iconName = focused ? "speedometer" : "speedometer-outline";
            } else if (route.name === "RideDetailsScreen") {
              iconName = focused ? "car-sport" : "car-sport-outline";
            } else if (route.name === "DriverProfile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "DriverResources") {
              iconName = focused ? "ios-book" : "ios-book-outline";
            } else if (route.name === "Leaderboard") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#b7ed55",
            // borderBottomLeftRadius : 15,
            // borderBottomRightRadius : 15,
            // height : 100
          },
          headerTintColor: "#000000",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            // borderRadius: 10,
            backgroundColor: "#b7ed55",
            height: 60,
            position: "absolute",
            // margin: 10,
            shadowColor: "white",
          },
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="RideDetailsScreen"
          component={RideDetailsScreen}
          options={{ title: "Ride Details Screen" }}
        />
        <Tab.Screen
          name="DriverProfile"
          component={DriverProfile}
          options={{
            title: "Driver Profile",
            headerRight: () => (
              <TouchableOpacity onPress={handleSignOut}>
                <Entypo name="log-out" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="DriverResources"
          component={DriverResources}
          options={{ title: "Resources" }}
        />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
      </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
