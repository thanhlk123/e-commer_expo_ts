import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";

import LoginScreen from "@screens/profileStackScreen/LoginScreen";
import ProfileMainScreen from "@screens/profileStackScreen/ProfileMainScreen";
import RegisterScreen from "@screens/profileStackScreen/RegisterScreen";

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => {
  const profileMainScreenOptions = () => {
    let headerTitle = "Tài khoản";
    let headerTitleAlign = "center";
    let headerTintColor = "white";
    let headerStyle = { height: 70, backgroundColor: "#3b5f8a", opacity: 1 };
    return { headerTitle, headerTintColor, headerStyle };
  };
  const loginScreenScreenOptions = () => {
    let headerTitleAlign = "center";
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
    let headerTitle = "Đăng nhập";
    let headerRight = () => (
      <FontAwesome
        style={{ marginRight: 15 }}
        name="search"
        color="white"
        size={18}
      />
    );
    return {
      headerStyle,
      headerRight,
      headerTintColor,
      headerTitle,
    };
  };
  const registerScreenScreenOptions = () => {
    let headerTitleAlign = "center";
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
    let headerTitle = "Đăng ký tài khoản";
    let headerRight = () => (
      <FontAwesome
        style={{ marginRight: 15 }}
        name="search"
        color="white"
        size={18}
      />
    );
    return {
      headerStyle,
      headerRight,
      headerTintColor,
      headerTitle,
    };
  };
  return (
    <Stack.Navigator initialRouteName="ProfileMainScreen">
      <Stack.Screen
        name="ProfileMainScreen"
        component={ProfileMainScreen}
        options={profileMainScreenOptions()}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={loginScreenScreenOptions()}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={registerScreenScreenOptions()}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
