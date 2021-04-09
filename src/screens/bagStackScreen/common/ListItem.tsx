import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import CartItem from "./CartItem";

type ScreenProps = {
  allItemTotal: number;
  priceTotal: number;
};

const ListItem = ({ allItemTotal, priceTotal }: ScreenProps) => {
  return (
    <View>
      <View
        style={{
          height: 50,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {" "}
          ITEMS ({allItemTotal}){" "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          TOTAL: {priceTotal}
        </Text>
      </View>
      <CartItem />
      <CartItem />
      {/* task list data choose */}
    </View>
  );
};

export default ListItem;
