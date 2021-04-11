import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { connect } from "react-redux";

import ListItem from "./common/ListItem";
import ListOption from "./common/ListOptionComponent";
import BillComponent from "./common/BillComponent";
import {
  RemoveItemInCartAction,
  AddItemToCartAction,
  UpdateItemInCartAction,
} from "@appRedux/actionTypes/bagScreenAction";
import { BagProps } from "@appRedux/reducers/bagReducer/index";

type ScreenProps = {
  bag: BagProps;
  navigation: any;
  removeItemInCart: (payload) => void;
  addItemInCart: (payload) => void;
  updateItemInCart: (payload) => void;
};

const MyBagHomeScreen = ({
  bag,
  navigation,
  removeItemInCart,
  addItemInCart,
  updateItemInCart,
}: ScreenProps) => {
  const [priceTotal, setPriceTotal] = useState(418000);
  const [itemTotal, setItemTotal] = useState(1);
  const [allItemTotal, setAllItemTotal] = useState(1);
  const [bagDiscount, setBagDiscount] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  return (
    <ScrollView>
      <ListItem
        allItemTotal={allItemTotal}
        priceTotal={priceTotal}
        data={bag.data}
      />

      <ListOption />

      <BillComponent
        priceTotal={priceTotal}
        subTotal={subTotal}
        coupon={coupon}
        bagDiscount={bagDiscount}
      />

      <View style={styles.orderBtnContainer}>
        <TouchableOpacity
          style={styles.btnOrder}
          onPress={() => {
            navigation.navigate("AddressScreen");
          }}
        >
          <TitleBtn>PLACE ORDER</TitleBtn>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  orderBtnContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  btnOrder: {
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(100, 151, 255)",
  },
});

const TitleBtn = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const mapStateToProps = (state) => {
  const { bag } = state;
  return {
    bag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemInCart: (payload) => dispatch(RemoveItemInCartAction(payload)),
    addItemInCart: (payload) => dispatch(AddItemToCartAction(payload)),
    updateItemInCart: (payload) => dispatch(UpdateItemInCartAction(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBagHomeScreen);
