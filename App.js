import React from 'react';
import Signup from './frontend/screens/signup/Signup'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ title: "Signup" }}
          />
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ title: "Home" }}
          />
          <Stack.Screen name="PPL" component={PPL} options={{ title: "PPL" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

