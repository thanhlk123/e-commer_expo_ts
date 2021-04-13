import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";


import { VoucherItem } from "./index";
import HeaderComponent from "@components/HeaderComponent";

const demoData = {
  id: 1,
  name: "Free Ship",
  des: "All forms of payments",
  expired: "15-04-2021",
  typePromotion: "FreeShip Xtra",
  numberShippingUnit: "All shipping units",
};

const VoucherDetailScreen = ({ navigation }) => {
  const [renderContent, setRenderCotent] = useState([
    { id: 1, title: "Reward", text: "Free Shipping Voucher", color: "#000" },
    {
      id: 2,
      title: "Valid time",
      text: "01-04-2021 00:00 - 14-04-2021 23:59",
      color: "#000",
    },
    { id: 3, title: "Device", text: "Android, iOS", color: "#000" },
    { id: 4, title: "Payment", text: "All payment methods", color: "#000" },
  ]);
  const RenderItem = ({ title, text, color }) => {
    return (
      <View style={styles.item_container}>
        <TitleText>{title}</TitleText>
        <DetailsText>{text}</DetailsText>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <HeaderComponent
          title={"Voucher Detail"}
          icLeft={"back"}
          onPressLeft={() => navigation.goBack()}
        />
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <VoucherItem item={demoData} _onPress={() => {}} />

          <View style={styles.content}>
            {renderContent.map((e, index) => {
              return (
                <RenderItem title={e.title} text={e.text} color={e.color} />
              );
            })}
          </View>
        </ScrollView>
        <Btn>
          <BtnTitle color={"#fff"}>Apply voucher</BtnTitle>
        </Btn>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#3b5f8a" },
  content: {
    paddingHorizontal: 12,
  },
  item_container: {
    marginTop: 20,
  },
  bgWhite: { backgroundColor: "#fff" },
});

type StyledProps = {
  bgColor?: string;
  color?: string;
};
const TitleText = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
const DetailsText = styled.Text`
  font-size: 15px;
  padding-top: 5px;
`;

const Btn = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  padding: 12px;
  margin-horizontal: 12px;
  border-radius: 5px;
  background-color: red;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const BtnTitle = styled.Text<StyledProps>`
  color: ${(props) => props.color};
`;

export default VoucherDetailScreen;
