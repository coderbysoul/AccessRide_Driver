import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../DriverScreens/Welcome";
import Login from "../DriverScreens/Login";
import Register from "../DriverScreens/Register";


const WelcomeStack = createNativeStackNavigator();

export default function WelcomeStackScreen() {
  return (
    <WelcomeStack.Navigator initialRouteName='Welcome' screenOptions={{headerShown : false}}>
      <WelcomeStack.Screen name='AccessRide' component={Welcome}>
        
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name='Login' component={Login}>
        
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name='Register' component={Register}>
        
        </WelcomeStack.Screen>
    </WelcomeStack.Navigator>
  );
}