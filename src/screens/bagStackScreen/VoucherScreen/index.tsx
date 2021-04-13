import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";
import Svg, { Polygon } from "react-native-svg";

import HeaderComponent from "@components/HeaderComponent";

const demoListVoucherData = [
  {
    id: 1,
    name: "FREE SHIP",
    des: "All forms of payments",
    expired: "15-04-2021",
    typePromotion: "FreeShip Xtra",
    numberShippingUnit: "All shipping units",
  },
  {
    id: 2,
    name: "FREE SHIP",
    des: "All forms of payments",
    expired: "15-04-2021",
    typePromotion: "Max 20k",
    numberShippingUnit: "8 shipping units",
  },
  {
    id: 3,
    name: "FREE SHIP",
    des: "All forms of payments",
    expired: "15-04-2021",
    typePromotion: "Max 50k",
    numberShippingUnit: "3 shipping units",
  },
  {
    id: 4,
    name: "FREE SHIP",
    des: "All forms of payments",
    expired: "15-04-2021",
    typePromotion: "Max 50k",
    numberShippingUnit: "3 shipping units",
  },
  {
    id: 5,
    name: "FREE SHIP",
    des: "All forms of payments",
    expired: "15-04-2021",
    typePromotion: "Max 50k",
    numberShippingUnit: "3 shipping units",
  },
];

type VoucherProps = {
  id: number;
  name: string;
  des: string;
  expired: string;
  typePromotion: string;
  numberShippingUnit: string;
};

export const VoucherItem = ({
  item,
  isSelected = false,
  isShowRadio = false,
  _onPress = () => {},
  _onPressDetail = () => {},
}: {
  item: VoucherProps;
  _onPress: () => void;
  _onPressDetail?: () => void;
  isSelected?: boolean;
  isShowRadio?: boolean;
}) => {
  const RenderTicketBorder = (width) => {
    let nodes: any = [];
    for (var i = 0; i < width / 10; i++) {
      const point = `0,${10 * i} 5,${10 * i + 5} 0,${10 * (i + 1)}`;
      nodes.push(
        <Polygon points={point} fill="white" stroke="white" strokeWidth="1" />
      );
    }
    return nodes;
  };
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginVertical: 12,
        paddingHorizontal: 12,
        height: 120,
      }}
      onPress={_onPress}
    >
      <View style={styles.voucherLogo}>
        <Text style={styles.voucherTitle}>{item.name}</Text>
        <View style={{ position: "absolute", top: 0, left: 0 }}>
          <Svg height={120} width={20}>
            {RenderTicketBorder(120)}
          </Svg>
        </View>
      </View>

      <View style={styles.voucherContent}>
        <Row>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 14,
              color: "#666666",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#BCBCBC",
                borderRadius: 5,
                paddingHorizontal: 4,
                paddingVertical: 2,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 10 }}>
                {item.typePromotion}
              </Text>
            </View>
            {item.des}
          </Text>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              paddingHorizontal: 10,
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: "#D5D5D5",
              paddingVertical: 2,
              color: "#666666",
            }}
          >
            {item.numberShippingUnit}
          </Text>
          {isShowRadio && (
            <TouchableOpacity style={styles.radioBtn} onPress={_onPress}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: isSelected ? "#27A998" : "transparent",
                }}
              ></View>
            </TouchableOpacity>
          )}
        </Row>

        <Row style={{ justifyContent: "space-between" }}>
          <Text>{`Expire: ${item.expired}`}</Text>
          <Btn onPress={_onPressDetail} color="transparent">
            <Text>{"T&C"}</Text>
          </Btn>
        </Row>
      </View>
    </TouchableOpacity>
  );
};
const Index = () => {
  const [isWarning, setWarning] = useState(true);
  const [renderData, setRenderData] = useState<VoucherProps[] | any>([]);
  const [voucherSelected, setVoucherSelected] = useState(-1);

  const navigation = useNavigation();

  useEffect(() => {
    setRenderData(demoListVoucherData);
  }, []);

  const _selectVoucher = (index: number) => {
    if (voucherSelected === index) {
      setVoucherSelected(-1);
    } else {
      setVoucherSelected(index);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3b5f8a" }}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <HeaderComponent
          title={"Select Voucher"}
          icLeft={"back"}
          onPressLeft={() => navigation.goBack()}
        />
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <Row style={styles.searchGroup}>
            <TextInput
              style={styles.searchField}
              placeholder={"Please enter voucher code"}
            />

            <Btn style={styles.btnApply} color={"#999999"}>
              <Text>Apply</Text>
            </Btn>
          </Row>
          {isWarning && (
            <View style={styles.warningContainer}>
              <Text>
                Select products from the basket before applying the voucher
              </Text>
            </View>
          )}

          {renderData.map((e, index) => {
            return (
              <VoucherItem
                key={index.toString()}
                item={e}
                // _onPress={() =>
                //   navigation.navigate("VoucherDetailScreen", { voucherId: e.id })
                // }
                _onPress={() => _selectVoucher(index)}
                _onPressDetail={() =>
                  navigation.navigate("VoucherDetailScreen", {
                    voucherId: e.id,
                  })
                }
                isSelected={index === voucherSelected}
                isShowRadio={true}
              />
            );
          })}
        </ScrollView>
        <BtnApply>
          <BtnTitle color={"#fff"} onPress={() => navigation.goBack()}>
            Apply voucher
          </BtnTitle>
        </BtnApply>
      </View>
    </SafeAreaView>
  );
};

type StyledProps = {
  color?: string;
};

const styles = StyleSheet.create({
  searchField: {
    flex: 1,
    padding: 12,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#D5D5D5",
    borderRadius: 5,
    backgroundColor: "#FAFAFA",
  },
  searchGroup: {
    padding: 12,
  },
  btnApply: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginLeft: 10,
  },
  warningContainer: {
    backgroundColor: "#FFF7EC",
    padding: 12,
    marginHorizontal: 12,
  },
  voucherLogo: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27A998",
    paddingVertical: 40,
  },
  voucherTitle: {
    fontWeight: "bold",
    color: "white",
  },
  voucherContent: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  radioBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#D5D5D5",
    justifyContent: "center",
    alignItems: "center",
  },
});
const Row = styled.View`
  flex-direction: row;
`;

const Btn = styled.TouchableOpacity<StyledProps>`
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

const BtnApply = styled.TouchableOpacity<StyledProps>`
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

export default Index;
