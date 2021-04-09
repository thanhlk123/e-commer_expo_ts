import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const ListOptionComponent = () => {
  return (
    <View>
      <View style={styles.headerContent}>
        <Label>OPTIONS</Label>
      </View>

      <View style={[styles.containerOption, styles.shadowBox]}>
        <TouchableOpacity style={styles.buttonOption}>
          <View style={styles.rowOption}>
            <AntDesign name="setting" size={22} color="gray" />
            <Text style={styles.textPrice}>Apply coupon</Text>
          </View>
          <AntDesign name="right" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={[styles.containerOption, styles.shadowBox]}>
        <TouchableOpacity style={styles.buttonOption}>
          <View style={styles.rowOption}>
            <FontAwesome name="shopping-bag" size={22} color="gray" />
            <Text style={styles.textPrice}>Gift Wrap for </Text>
          </View>
          <AntDesign name="right" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    marginBottom: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerContent: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  textPrice: {
    fontSize: 14,
    color: "gray",
    flex: 1,
    paddingLeft: 10,
  },
  containerOption: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  buttonOption: {
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  rowOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150,
  },
});

const Label = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export default ListOptionComponent;
