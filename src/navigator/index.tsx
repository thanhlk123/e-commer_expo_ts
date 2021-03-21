import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

import {HomeStackNavigator} from "./HomeStackNavigator";
import {CategoriesStackNavigator} from "./CategoriesStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { NotificationsStackNavigator } from "./NotificationsStackNavigator";
import { BagStackNavigator } from "./BagStackNavigator";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={17} />
          ),
        }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="grid" color={color} size={17} />
          ),
        }}
        name="Categories"
        component={CategoriesStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bell" color={color} size={17} />
          ),
        }}
        name="Notifications"
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Bag",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" color={color} size={17} />
          ),
        }}
        name="Bag"
        component={NotificationsStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={17} />
          ),
        }}
        name="Profile"
        component={BagStackNavigator}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3b5f8a" barStyle="dark-content" />
      <BottomTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
