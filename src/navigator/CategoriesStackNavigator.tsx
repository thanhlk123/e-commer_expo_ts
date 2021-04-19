import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

import CategoriesMainScreen from "@screens/categoriesStackScreen/CategoriesMainScreen";
import ListCategoriesScreen from "@screens/categoriesStackScreen/ListCategoriesScreen";
import ProductDetailScreen from "@screens/categoriesStackScreen/ProductDetailScreen";

const Stack = createStackNavigator();

export const CategoriesStackNavigator = (props: any) => {
  const categoriesMainOptions = () => {
    let headerTitleAlign = "center";
    let headerTitle = "Categories";
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
    return {
      headerStyle,
      headerRight,
      headerTintColor,
      headerTitle,
    };
  };
  const listCategoriesOptions = () => {
    let headerTitleAlign = "center";
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
    let headerBackTitleVisible = true;
    let headerLeft = () => (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Ionicons
          style={{ paddingLeft: 20 }}
          name="md-arrow-back"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    );

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
      headerBackTitleVisible,
      headerLeft,
    };
  };

  const producDetailOptions = () => {
    let headerTitleAlign = "center";
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
    let headerBackTitleVisible = true;
    let headerLeft = () => (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Ionicons
          style={{ paddingLeft: 20 }}
          name="md-arrow-back"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    );

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
      headerBackTitleVisible,
      headerLeft,
    };
  };
  return (
    <Stack.Navigator initialRouteName="CategoriesMain">
      <Stack.Screen
        name="CategoriesMain"
        component={CategoriesMainScreen}
        options={categoriesMainOptions()}
      />
      <Stack.Screen
        name="ListCategories"
        component={ListCategoriesScreen}
        options={listCategoriesOptions()}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
