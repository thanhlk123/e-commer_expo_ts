import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";

import HomeMainScreen from "@screens/homeStackScreen/HomeMainScreen";
import ShopScreen from "@screens/homeStackScreen/ShopScreen";
import SalesScreen from "@screens/homeStackScreen/SalesScreen";

const BagScreenStack = createStackNavigator();
const CategoriesScreenStack = createStackNavigator();
const HomeScreenStack = createStackNavigator();
const NotificationsScreenStack = createStackNavigator();
const ProfileScreenStack = createStackNavigator();

export const HomeStackNavigator = () => {
  const homeScreenOptions = () => {
    let headerShown = false;
    return { headerShown };
  };
  const shopScreenOptions = () => {
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
    let headerRight = () => (
      <FontAwesome
        style={{ marginRight: 15 }}
        name="search"
        color="white"
        size={18}
      />
    );
    return { headerStyle, headerRight, headerTintColor };
  };
  const salesScreenOptions = () => {
    let headerTitleAlign = "center";
    let headerStyle = { height: 70, backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
    let headerRight = () => (
      <FontAwesome
        style={{ marginRight: 15 }}
        name="search"
        color="white"
        size={18}
      />
    );
    return { headerStyle, headerRight, headerTintColor };
  };

  return (
    <HomeScreenStack.Navigator
      screenOptions={{ headerShown: false }}
      // headerMode="screen"
      initialRouteName="DashBoard"
    >
      <HomeScreenStack.Screen
        name="Home"
        component={HomeMainScreen}
        options={homeScreenOptions()}
      />
      <HomeScreenStack.Screen
        name="Sales"
        component={SalesScreen}
        options={shopScreenOptions()}
      />
      <HomeScreenStack.Screen
        name="Shop"
        component={ShopScreen}
        options={salesScreenOptions()}
      />
    </HomeScreenStack.Navigator>
  );
};
