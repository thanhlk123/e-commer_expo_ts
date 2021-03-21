import React, { Component } from "react";
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
import RenderItemChoosed from './Component/RenderItemChoosed'
import MyBagContainer from './container/myBagContainer'

export default class MyBagHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceTotal: 418000,
      itemTotal: 1,
      allItemTotal: 1,
      bagDiscount: 0,
      coupon: 0,
      subTotal: 0,
      totalPayable: 0,
    };
  }

  _MinusItem = (props) => {
    let item = props - 1;
    let priceTotal = this.state.priceTotal - 418000;
    let allItemTotal = this.state.allItemTotal - 1;
    this.setState({
      itemTotal: item,
      priceTotal: priceTotal,
      allItemTotal: allItemTotal,
    });
  };

  _PlusItem = (props) => {
    let item = props + 1;
    let priceTotal = this.state.priceTotal + 418000;
    let allItemTotal = this.state.allItemTotal + 1;
    this.setState({
      itemTotal: item,
      priceTotal: priceTotal,
      allItemTotal: allItemTotal,
    });
  };
  render() {
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
                fontSize: 15,
              }}
            >
              {" "}
              ITEMS ({this.state.allItemTotal}){" "}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              TOTAL: {this.state.priceTotal}
            </Text>
          </View>
         {/* task list data choose */}
          <MyBagContainer/>

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
              {this.state.priceTotal}đ
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
              - {this.state.bagDiscount}đ
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
              {this.state.subTotal}đ
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
              {this.state.coupon}đ
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
              {this.state.itemPrice - this.state.subTotal - this.state.coupon}đ
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
              this.props.navigation.navigate("AddressScreen");
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
  }
}
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
    textAlign: "center",
    fontSize: 20,
    color: "gray",
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
