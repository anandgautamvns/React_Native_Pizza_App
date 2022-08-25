import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailView from "./src/screens/components/detail_view";
import ListView from "./src/screens/components/list_view";
import AddPizzeria from './src/screens/drawer/addPizzeria'
import RegForm from "./src/screens/drawer/regForm.js";
import LoginForm from "./src/screens/drawer/loginForm.js";
import TabOne from "./src/screens/tabs/tabOne.js";
import TabTwo from "./src/screens/tabs/tabTwo.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const renderTabComponents = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab 1" component={TabOne} />
    <Tab.Screen name="Tab 2" component={TabTwo} />
  </Tab.Navigator>
);

const renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView} />
    <Stack.Screen name="Tabs" children={renderTabComponents} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={renderScreenComponents} />
        <Drawer.Screen name="Add Pizzeria" component={AddPizzeria} />
        <Drawer.Screen name="Login Form" component={LoginForm} />
        <Drawer.Screen name="Reg Form" component={RegForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
