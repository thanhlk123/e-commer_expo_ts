import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons";

import {
  HOME,
  Categories,
  Notifications,
  BAG,
  Profile,
} from "@constants/NavigationTypes";
import { Dashboard, ProductDetails } from "@constants/NavigationTypes";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { CategoriesStackNavigator } from "./CategoriesStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { NotificationsStackNavigator } from "./NotificationsStackNavigator";
import { BagStackNavigator } from "./BagStackNavigator";
import ProductDetailScreen from "@screens/categoriesStackScreen/ProductDetailScreen";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

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
        name={HOME}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="grid" color={color} size={17} />
          ),
        }}
        name={Categories}
        component={CategoriesStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bell" color={color} size={17} />
          ),
        }}
        name={Notifications}
        component={NotificationsStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Bag",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" color={color} size={17} />
          ),
        }}
        name={BAG}
        component={BagStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={17} />
          ),
        }}
        name={Profile}
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3b5f8a" barStyle="dark-content" />
      <RootStack.Navigator>
        <RootStack.Screen
          name={Dashboard}
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name={ProductDetails}
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
