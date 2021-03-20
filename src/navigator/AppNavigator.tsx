import React, { useEffect, useLayoutEffect } from "react";
import { StatusBar, View } from "react-native";
import SplashScreens from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import DashBoard from "@screens/DashBoard/index";
import { navigationRef } from "../RootNavigation";

import HomeMainScreen from "@screens/homeStackScreen/";
import ShopScreen from "../HomeStack/ShopScreen";
import SalesScreen from "../HomeStack/SalesScreen";

const BagScreenStack = createStackNavigator();
const CategoriesScreenStack = createStackNavigator();
const HomeScreenStack = createStackNavigator();
const NotificationsScreenStack = createStackNavigator();
const ProfileScreenStack = createStackNavigator();

const AppNavigator = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
      SplashScreens.hide();
    }, 2000);
  }, []);

  return (
    <HomeScreenStack.Navigator
      screenOptions={{ headerShown: false }}
      // headerMode="screen"
      initialRouteName="DashBoard"
    >
      <HomeScreenStack.Screen
        component={DashBoard}
        name="DashBoard"
        options={{ headerShown: false }}
      />
    </HomeScreenStack.Navigator>
  );
};

export default AppNavigator;
