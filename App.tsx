import { StatusBar } from "react-native";
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

const stackStyleOptions = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
};

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={stackStyleOptions}
          />
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={stackStyleOptions}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={stackStyleOptions}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={stackStyleOptions}
          />
          <Stack.Screen
            name="ExactAmount"
            component={ExactAmount}
            options={stackStyleOptions}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={stackStyleOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
