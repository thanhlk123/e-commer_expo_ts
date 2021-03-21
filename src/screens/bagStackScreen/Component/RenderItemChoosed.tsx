import React, {Component} from "react";
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

// export default function RenderItemChoosed(props) {
//     return (
export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { val, PlusItem, MinusItem } = this.props;
      console.log(this.props)

    return (
      <View style={[styles.containerItem, styles.shadowBox]}>
        <View
          style={{
            flex: 0.35,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Image
            source={require("../../images/goodsItemData/item2.jpg")}
            style={{ height: 127, width: 100 }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flex: 0.65,
            marginLeft: 10,
            marginRight: 5,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 0.7,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              props.itemName
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "grey",
                fontSize: 15,
                marginTop: 5,
              }}
            >
              props.itemPrice
            </Text>
          </View>
          <View
            style={{
              flex: 0.35,
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              width: 110,
            }}
          >
            <TouchableOpacity
              style={{ height: 20, width: 20, borderRadius: 10 }}
              onPress={() => MinusItem(val  - 1) }
            >
              <AntDesign name="minuscircleo" size={18} color="blue" />
            </TouchableOpacity>

            <Text
              style={{
                height: 30,
                width: 40,
                borderColor: "gray",
                borderWidth: 1,
                textAlign: "center",
                textAlignVertical: "center",
              }}
              size={20}
            >
              {val}
            </Text>
            <TouchableOpacity
              style={{ height: 20, width: 20, borderRadius: 10 }}
              onPress={() => PlusItem(val + 1)}
            >
              <AntDesign name="pluscircleo" size={18} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
