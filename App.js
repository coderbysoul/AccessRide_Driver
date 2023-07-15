import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Vibration,
  ActivityIndicator,
} from "react-native";
// import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import * as Haptics from "expo-haptics";
// import * as Speech from "expo-speech";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { LocationProvider } from "./context/LocationContext";
// import Home from "./screeens/Home";
// import Contact from "./screeens/Contact";
// import UserProfile from "./screeens/UserProfile";
// import Drivers from "./screeens/Drivers";
// import DriverDetails from "./screeens/DriverDetails";
// import JourneyDetails from "./screeens/JourneyDetails";
// import Register from "./screeens/Register";
// import Login from "./screeens/Login";
// import Welcome from "./screeens/Welcome";
// import Settings from "./screeens/Settings";
import { app, auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import WelcomeStackScreen from "./navigation/WelcomeStackScreen";
import TabNavigator from "./navigation/TabNavigator";
import { useEffect, useState } from "react";


const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <Stack.Screen
              name="Welcome"
              component={WelcomeStackScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Root"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
}
