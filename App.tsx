import { StyleSheet } from "react-native";
import { useState, ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store";
import Meals from "./Pages/Meals";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Profile from "./Pages/Profile";
import ExactAmount from "./Pages/ExactAmount";
import Create from "./Pages/Create";

const Stack = createNativeStackNavigator();

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Meals" component={Meals} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ExactAmount" component={ExactAmount} />
          <Stack.Screen name="Create" component={Create} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
