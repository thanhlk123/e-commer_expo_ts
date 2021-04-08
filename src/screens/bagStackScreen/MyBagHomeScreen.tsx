import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import RenderItemChoosed from "./Component/RenderItemChoosed";
import CartItem from "./common/CartItem";

const MyBagHomeScreen = (props: any) => {
  const [priceTotal, setPriceTotal] = useState(418000);
  const [itemTotal, setItemTotal] = useState(1);
  const [allItemTotal, setAllItemTotal] = useState(1);
  const [bagDiscount, setBagDiscount] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  const _MinusItem = (props) => {
    setPriceTotal(priceTotal - 418000);
    setAllItemTotal(allItemTotal - 1);
    setItemTotal(props - 1);
  };

  const _PlusItem = (props) => {
    setPriceTotal(priceTotal + 418000);
    setAllItemTotal(allItemTotal + 1);
    setItemTotal(props + 1);
  };
  return (
    <ScrollView>
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
        <CartItem/>
        <CartItem/>
        {/* task list data choose */}
      </View>
      <View>
        <View style={styles.headerContent}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            OPTIONS
          </Text>
        </View>
        <View style={[styles.containerOption, styles.shadowBox]}>
          <TouchableOpacity style={styles.buttonOption}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <AntDesign name="setting" size={22} color="gray" />
              <Text style={styles.textPrice}>Apply coupon</Text>
            </View>
            <AntDesign name="caretright" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={[styles.containerOption, styles.shadowBox]}>
          <TouchableOpacity style={styles.buttonOption}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <FontAwesome name="shopping-bag" size={22} color="gray" />
              <Text style={styles.textPrice}>Gift Wrap for </Text>
            </View>
            <AntDesign name="caretright" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.headerContent}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            PRICE DETAILS
          </Text>
        </View>
        <View style={[styles.priceDetail, styles.shadowBox]}>
          <Text
            style={[
              styles.textPrice,
              {
                paddingLeft: 20,
              },
            ]}
          >
            Bag Total:{" "}
          </Text>
          <Text
            style={[
              styles.textPrice,
              {
                paddingRight: 10,
              },
            ]}
          >
            {priceTotal}đ
          </Text>
        </View>
        <View style={[styles.priceDetail, styles.shadowBox]}>
          <Text
            style={[
              styles.textPrice,
              {
                paddingLeft: 20,
              },
            ]}
          >
            Bag Discounts:{" "}
          </Text>
          <Text
            style={[
              styles.textPrice,
              {
                paddingRight: 10,
              },
            ]}
          >
            - {bagDiscount}đ
          </Text>
        </View>
        <View style={[styles.priceDetail, styles.shadowBox]}>
          <Text
            style={[
              styles.textPrice,
              {
                paddingLeft: 20,
              },
            ]}
          >
            Sub Total:{" "}
          </Text>
          <Text
            style={[
              styles.textPrice,
              {
                paddingRight: 10,
              },
            ]}
          >
            {subTotal}đ
          </Text>
        </View>
        <View style={[styles.priceDetail, styles.shadowBox]}>
          <Text
            style={[
              styles.textPrice,
              {
                paddingLeft: 20,
              },
            ]}
          >
            Counpon Discounts:{" "}
          </Text>
          <Text
            style={[
              styles.textPrice,
              {
                paddingRight: 10,
              },
            ]}
          >
            {coupon}đ
          </Text>
        </View>
        <View style={[styles.priceDetail, styles.shadowBox]}>
          <Text
            style={[
              styles.textPrice,
              {
                paddingLeft: 20,
              },
            ]}
          >
            Total Payable:{" "}
          </Text>
          <Text
            style={[
              styles.textPrice,
              {
                paddingRight: 10,
              },
            ]}
          >
            {priceTotal - subTotal - coupon}đ
          </Text>
        </View>
      </View>
      <View
        style={{
          marginRight: 20,
          marginLeft: 20,
          marginTop: 100,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(100, 151, 255)",
          }}
          onPress={() => {
            props.navigation.navigate("AddressScreen");
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            PLACE ORDER
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    height: 130,
    borderColor: "black",
    borderWidth: 0.2,
  },
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
  headerContent: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  textHeaderContent: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textPrice: {
    fontSize: 14,
    color: "gray",
    flex: 1,
    paddingLeft: 10
  },
  priceDetail: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: "gray",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerOption: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  buttonOption: {
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor: 'blue'
  },
});

export default MyBagHomeScreen;
