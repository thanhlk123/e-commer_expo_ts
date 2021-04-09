import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

import ListItem from "./common/ListItem";
import ListOption from "./common/ListOptionComponent";
import BillComponent from "./common/BillComponent";

const MyBagHomeScreen = (props: any) => {
  const [priceTotal, setPriceTotal] = useState(418000);
  const [itemTotal, setItemTotal] = useState(1);
  const [allItemTotal, setAllItemTotal] = useState(1);
  const [bagDiscount, setBagDiscount] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  return (
    <ScrollView>
      <ListItem allItemTotal={allItemTotal} priceTotal={priceTotal} />

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
            props.navigation.navigate("AddressScreen");
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

export default MyBagHomeScreen;
