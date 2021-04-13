import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { CartItem as CartItemProps } from "@constants/BagScreen";
import CountItem from "./CountItemComponent";
import Checkbox from "@components/Checkbox";

import {
  RemoveItemInCartAction,
  AddItemToCartAction,
  UpdateItemInCartAction,
} from "@appRedux/actionTypes/bagScreenAction";

type ScreenProps = {
  item: CartItemProps | any;
  removeItemInCart: (payload) => void;
  addItemInCart: (payload) => void;
  updateItemInCart: (payload) => void;
};
const CartItem = ({
  item,
  removeItemInCart,
  addItemInCart,
  updateItemInCart,
}: ScreenProps) => {
  const [payload, setPayload] = useState(null);
  const [isChecked, setChecked] = useState(false);

  return (
    <Container style={styles.shadow}>
      <Row style={{ paddingHorizontal: 12 }}>
        <TouchableOpacity
          onPress={() => removeItemInCart(item.id)}
          style={styles.icClose}
        >
          <AntDesign name="close" size={24} color="grey" />
        </TouchableOpacity>

        <Image
          source={{
            uri:
              "http://image.vietnamnews.vn/uploadvnnews/Article/2021/3/18/142705_hoa.jpg",
          }}
          style={styles.imgItem}
        />
        <View style={{ paddingVertical: 10, marginLeft: 10, paddingRight: 10 }}>
          <Text>FabAlley Women Gray Classic Fit</Text>
          <Text>Casual Top</Text>
          <Text>Sold by: FunFash</Text>
          <Row>
            <Text style={{ fontWeight: "700" }} color="red">
              $799
            </Text>
            <Text
              style={{
                marginLeft: 10,
                textDecorationLine: "line-through",
                color: "grey",
              }}
            >
              $1299
            </Text>
          </Row>
          <Row
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <CountItem />
            <Checkbox value={isChecked} color={"#3b5f8a"} onChange={() => setChecked(!isChecked)} />
          </Row>
        </View>
      </Row>
      <View style={styles.separator} />
    </Container>
  );
};

const styles = StyleSheet.create({
  imgItem: {
    width: 60,
    height: 90,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#D5D5D5",
  },
  horizontalSeparator: {
    width: 0.5,
    height: "100%",
    backgroundColor: "#D5D5D5",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icClose: {
    position: "absolute",
    top: 0,
    right: 5,
    padding: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
});

type StyledProps = {
  color?: string;
};

const Container = styled.View<StyledProps>`
  background-color: ${(props) => props.color || "#ffffff"};
  margin-horizontal: 12px;
  margin-top: 10px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Btn = styled.TouchableOpacity``;

const Text = styled.Text<StyledProps>`
  color: ${(props) => props.color || "#000"};
  line-height: 19px;
  font-size: 14px;
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemInCart: (payload: number) =>
      dispatch(RemoveItemInCartAction(payload)),
    addItemInCart: (payload) => dispatch(AddItemToCartAction(payload)),
    updateItemInCart: (payload) => dispatch(UpdateItemInCartAction(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
