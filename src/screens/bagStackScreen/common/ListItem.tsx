import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import CartItem from "./CartItem";
import { CartItem as CartItemDataProps } from "@constants/BagScreen";

type ScreenProps = {
  allItemTotal: number;
  priceTotal: number;
  data: CartItemDataProps[] | any;
};

const ListItem = ({ allItemTotal, priceTotal, data = [] }: ScreenProps) => {
  console.log("data", data);
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
      {data.map((item, index) => {
        return <CartItem key={item.id.toString() + index} item={item} />;
      })}

      {/* task list data choose */}
    </View>
  );
};

export default ListItem;
