import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import MyBagHomeScreen from "@screens/bagStackScreen/MyBagHomeScreen";
import AdressScreen from "@screens/bagStackScreen/AddressScreen";
import ConfirmScreen from "@screens/bagStackScreen/ConfirmScreen";
import PaymentScreen from "@screens/bagStackScreen/PaymentScreen";
import VoucherScreen from "@screens/bagStackScreen/VoucherScreen/index";

const Stack = createStackNavigator();

export const BagStackNavigator = (props: any) => {
  const BagHomeScreenOptions = () => {
    let headerTitleAlign = "center";
    let headerTitle = "Bag";
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTintColor = "white";
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

    return {
      headerStyle,
      headerLeft,
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
    return {
      headerStyle,
      headerTintColor,
      headerBackTitleVisible,
      headerLeft,
    };
  };

  const voucherScreenOptions = () => {
    let headerTitleAlign = "center";
    let headerStyle = { backgroundColor: "#3b5f8a", opacity: 1 };
    let headerTitle = "Select Voucher";
    let headerTintColor = "white";
    let headerBackTitleVisible = true;
    let headerLeft = () => (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
    );
    return {
      headerStyle,
      headerTintColor,
      headerBackTitleVisible,
      headerLeft,
      headerTitle,
    };
  };
  return (
    <Stack.Navigator initialRouteName="MyBagHomeScreen">
      <Stack.Screen
        name="MyBagHomeScreen"
        component={MyBagHomeScreen}
        options={BagHomeScreenOptions()}
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
      <Stack.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={voucherScreenOptions()}
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
