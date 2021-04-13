import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

import CartItem from "./CartItem";
import { CartItem as CartItemDataProps } from "@constants/BagScreen";

type ScreenProps = {
  allItemTotal: number;
  priceTotal: number;
  data: CartItemDataProps[] | any;
};

const ListItem = ({ allItemTotal, priceTotal, data = [] }: ScreenProps) => {
  return (
    <View>
      <View style={styles.titleGroups}>
        <Title>ITEMS ({allItemTotal}) </Title>
        <Title>TOTAL: {priceTotal}</Title>
      </View>
      {data.map((item, index) => {
        return <CartItem key={item.id.toString() + index} item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  titleGroups: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
});

const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export default ListItem;
