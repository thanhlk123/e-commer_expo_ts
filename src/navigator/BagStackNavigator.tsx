import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import MyBagHomeScreen from "@screens/bagStackScreen/MyBagHomeScreen";
import AdressScreen from "@screens/bagStackScreen/AddressScreen";
import ConfirmScreen from "@screens/bagStackScreen/ConfirmScreen";
import PaymentScreen from "@screens/bagStackScreen/PaymentScreen";

const Stack = createStackNavigator();

export const BagStackNavigator = (props: any) => {
  const categoriesMainOptions = () => {
    let headerTitleAlign = "center";
    let headerTitle = "Bag";
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
        <Text style={styles.backButton}>Back</Text>
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
    <Stack.Navigator initialRouteName="MyBagHomeScreen">
      <Stack.Screen
        name="MyBagHomeScreen"
        component={MyBagHomeScreen}
        options={categoriesMainOptions()}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AdressScreen}
        options={listCategoriesOptions()}
      />
      <Stack.Screen
        name="ConfirmScreen"
        component={ConfirmScreen}
        options={listCategoriesOptions()}
      />
      <Stack.Screen
        name="PaymentSrceen"
        component={PaymentScreen}
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
