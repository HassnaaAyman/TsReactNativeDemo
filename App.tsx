/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';

import React from "react";
import { StyleSheet } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import LoginScreen from "./src/screens/LoginScreen/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from './src/screens/Profile/index';


const Stack = createStackNavigator();


const App: React.FC<{}> = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={LoginScreen} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  ); 
};
            
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter     
  },
  engine: {
    position: "absolute",   
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
