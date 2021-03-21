import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ListItems = (props) => {
  return (
    <View style={styles.marginLR}>
      <View style={[styles.swapperView, styles.shadowBox]}>
        <Image
          source={require("../images/goodsItemData/item2.jpg")}
          style={{ height: 70, width: 50, marginLeft: 15 }}
          resizeMode="cover"
        />
        <View
          style={[
            styles.CenterView,
            {
              marginLeft: 30,
            },
          ]}
        >
          <Text style={styles.textAdd}>Estimated Delivery</Text>
          <View
            style={[
              styles.swapperView,
              {
                justifyContent: "space-between",
              },
            ]}
          >
            <Text style={styles.textAdd}>Date:</Text>
            <Text
              style={[
                styles.textAdd,
                {
                  fontWeight: "bold",
                  fontSize: 18,
                },
              ]}
            >
              {props.itemDate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default class ConfonfirmScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.headerContent}>
            <Text style={styles.textHeaderContent}>CONFIRM ADDRESS:</Text>
          </View>
          <View style={styles.marginLR}>
            <View style={styles.shadowBox}>
              <View>
                <Text style={styles.textAdd}>Abc</Text>
                <Text style={styles.textAdd}>XYZ</Text>
                <Text style={styles.textAdd}>123 Gmh</Text>
                <Text style={styles.textAdd}>BBB city,</Text>
                <Text style={styles.textAdd}>state 1111</Text>
              </View>
              <View style={[styles.containerAdd, styles.marginLR]}>
                <TouchableOpacity
                  style={[
                    styles.buttonConfirm,
                    styles.boxContainer,
                    styles.CenterView,
                  ]}
                >
                  <Text style={{ textAlign: "center" }}>
                    EDIT/CHANGE ADDRESS
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonConfirm,
                    styles.boxContainer,
                    styles.CenterView,
                  ]}
                >
                  <Text style={{ textAlign: "center" }}>Add New Address</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.textHeaderContent}>
              ESTIMATED DELIVERY TIME:
            </Text>
          </View>
          <View>
            <ListItems itemID="12" itemDate="30/10/2020" />
            <ListItems itemID="12" itemDate="30/10/2020" />
          </View>
          <View>
            <View style={styles.headerContent}>
              <Text style={styles.textHeaderContent}>ORDER SUMMARY:</Text>
            </View>
            <View style={[styles.marginLR, styles.shadowBox]}>
              <View
                style={[
                  styles.boxContainer,
                  {
                    justifyContent: "center",
                    height: 40,
                  },
                ]}
              >
                <Text style={styles.textAdd}> Items</Text>
              </View>
              <View
                style={[
                  styles.boxContainer,
                  {
                    justifyContent: "center",
                    height: 40,
                  },
                ]}
              >
                <View
                  style={[
                    styles.swapperView,
                    {
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text style={styles.textAdd}>Order Total:</Text>
                  <Text style={styles.textAdd}>418000d</Text>
                </View>
              </View>
              <View
                style={[
                  styles.boxContainer,
                  {
                    justifyContent: "center",
                    height: 40,
                  },
                ]}
              >
                <View
                  style={[
                    styles.swapperView,
                    {
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text style={styles.textAdd}>Delivery:</Text>
                  <Text style={styles.textAdd}>0d</Text>
                </View>
              </View>
              <View
                style={[
                  styles.boxContainer,
                  {
                    justifyContent: "center",
                    height: 40,
                  },
                ]}
              >
                <View
                  style={[
                    styles.swapperView,
                    {
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text style={styles.textAdd}>Total Payable:</Text>
                  <Text style={styles.textAdd}>418000d</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10,
            marginTop: 40,
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
              this.props.navigation.navigate("PaymentSrceen");
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              CONTINE TO PAYMENT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
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
  textAdd: {
    textAlign: "left",
    color: "gray",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
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
  buttonConfirm: {
    height: 40,
    width: 130,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  containerAdd: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  marginLR: {
    marginRight: 20,
    marginLeft: 20,
  },
  boxContainer: {
    borderWidth: 0.3,
    borderColor: "rgb(176,196,222)",
  },
  swapperView: {
    flexDirection: "row",
  },
  CenterView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
