import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
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
import HeaderComponent from "@components/HeaderComponent";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3b5f8a" }}>
      <View style={{ flex: 1, backgroundColor: "#fffF" }}>
        <HeaderComponent
          title={"Bag"}
          onPressLeft={() => navigation.goBack()}
          icLeft="back"
        />
        <ScrollView>
          <ListItem priceTotal={bag.totalPrice} data={bag.data} />

          <ListOption />

          <BillComponent
            totalDiscount={bag.totalDiscount}
            totalPrice={bag.totalPrice}
            shippingFee={bag.shippingFee}
            totalPayable = {bag.totalPayment}
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
      </View>
    </SafeAreaView>
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
