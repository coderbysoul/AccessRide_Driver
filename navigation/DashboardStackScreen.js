import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DriverDashboardScreen from "../DriverScreens/DriverDashboardScreen";
import Chat from "../DriverScreens/Chat";


const DashboardStack = createNativeStackNavigator();

export default function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerStyle: {
            backgroundColor: "#b7ed55"
          },
          headerTintColor: "#000000",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerShadowVisible: false,
      }}
    >
      <DashboardStack.Screen
        name="DashboardScreen"
        component={DriverDashboardScreen}
        options={{ headerShown : false }}
      />
      <DashboardStack.Screen
        name="ChatScreen"
        component={Chat}
        options={{ title: "Messages from Rider" }}
      />
    </DashboardStack.Navigator>
  );
}