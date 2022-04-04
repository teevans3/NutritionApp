import { StyleSheet } from "react-native";
import { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Meals from './Pages/Meals';
import Home from './Pages/Home';
import History from './Pages/History';



const Stack = createNativeStackNavigator();


export default function App(): ReactElement {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
        />
         <Stack.Screen 
          name="Meals"
          component={Meals}
        />
         <Stack.Screen 
          name="History"
          component={History}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
