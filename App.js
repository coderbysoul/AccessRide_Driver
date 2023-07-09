import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DriverDashboardScreen from './DriverScreens/DriverDashboardScreen'
import DriverProfile from './DriverScreens/DriverProfile'
import DriverResources from './DriverScreens/DriverResources'
import Leaderboard from './DriverScreens/Leaderboard'
import RideDetailsScreen from './DriverScreens/RideDetailsScreen'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 30;

            if (route.name === "DriverDashboardScreen") {
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
            fontWeight: 'bold'
          },
          headerShadowVisible: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderRadius: 10,
            backgroundColor: "#b7ed55",
            height: 60,
            position: "absolute",
            margin: 10,
            shadowColor: "white",
          },
        })}
      >
        <Tab.Screen name="DriverDashboardScreen" component={DriverDashboardScreen} options={{headerShown : false}}/>
        <Tab.Screen name="RideDetailsScreen" component={RideDetailsScreen} options={{title : "Ride Details Screen"}}/>
        <Tab.Screen name="DriverProfile" component={DriverProfile} options={{title : "Driver Profile"}}/>
        <Tab.Screen name="DriverResources" component={DriverResources} options={{title : "Driver Resources"}}/>
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
