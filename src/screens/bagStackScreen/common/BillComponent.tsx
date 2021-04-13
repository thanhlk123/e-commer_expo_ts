import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

type ScreenProps = {
  priceTotal: number;
  bagDiscount: number;
  subTotal: number;
  coupon: number;
};

type BillItemProps = {
  title: string;
  value: number;
};

const BillItem = ({ title, value }: BillItemProps) => {
  return (
    <View style={[styles.priceDetail, styles.shadowBox]}>
      <Title>{title}: </Title>
      <ValueText>- {value}đ</ValueText>
    </View>
  );
};

const BillComponent = ({
  priceTotal,
  bagDiscount,
  subTotal,
  coupon,
}: ScreenProps) => {
  return (
    <View>
      <View style={styles.headerContent}>
        <Label>PRICE DETAILS</Label>
      </View>
      <BillItem title={"Bag Total"} value={priceTotal} />
      <BillItem title={"Bag Discounts"} value={bagDiscount} />
      <BillItem title={"Shipping Fee"} value={subTotal} />
      <BillItem
        title={"Total Payable"}
        value={priceTotal - subTotal - coupon}
      />
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
  priceDetail: {
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  headerContent: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
});

const Label = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: gray;
  flex: 1;
  padding-left: 10px;
`;
const ValueText = styled.Text`
  font-size: 14px;
  color: gray;
  padding-horizontal: 10px;
`;

export default BillComponent;
