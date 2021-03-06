import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";

const ItemOfTopic = (props) => {
  let iconElement;

  if (props.typeVector === "AntDesign") {
    iconElement = (
      <AntDesign
        name={props.nameVector}
        size={16}
        color="gray"
        style={{ textAlign: "right" }}
      />
    );
  } else if (props.typeVector === "FontAwesome") {
    iconElement = (
      <FontAwesome name={props.nameVector} size={16} color="gray" />
    );
  } else if (props.typeVector === "Entypo") {
    iconElement = <Entypo name={props.nameVector} size={16} color="gray" />;
  }

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", width: "90%", marginBottom: 5 }}
    >
      {iconElement}
      <Text style={{ paddingLeft: 10 }}>{props.itemContent}</Text>
      <View style={{ marginLeft: "auto" }}>
        <AntDesign
          name="right"
          size={16}
          color="gray"
          style={{ textAlign: "right" }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default class ProfileMainScreen extends Component<
  { navigation: any },
  {}
> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeced" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View
              style={{
                height: 100,
                flexDirection: "row",
                marginBottom: 10,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("@assets/images/profile/user.png")}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRightWidth: 1,
                }}
              >
                <TouchableOpacity
                  style={{ padding: 5, borderRightWidth: 1 }}
                  onPress={() => this.props.navigation.navigate("LoginScreen")}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() =>
                    this.props.navigation.navigate("RegisterScreen")
                  }
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Ch????ng tr??nh khuy???n m??i */}
            <View
              style={{
                paddingVertical: 10,
                marginBottom: 10,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "90%",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  paddingVertical: 5,
                }}
              >
                <Image
                  source={require("@assets/images/profile/sale_icon.png")}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{ paddingLeft: 5 }}>S??n deal m???i ng??y</Text>
                <View style={{ marginLeft: "auto" }}>
                  <AntDesign
                    name="right"
                    size={16}
                    color="gray"
                    style={{ textAlign: "right" }}
                  />
                </View>
              </View>

              <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@assets/images/profile/naptiendienthoai.png")}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ textAlign: "center" }}>
                    N???p ti???n ??i???n tho???i
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@assets/images/profile/dulich.png")}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ textAlign: "center" }}>
                    Du l???ch b???n ph????ng
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@assets/images/profile/thanhtoanhoadon.png")}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ textAlign: "center" }}>
                    Thanh to??n h??a ????n
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@assets/images/profile/sales.png")}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ textAlign: "center" }}>FreeShip t??? 99K</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* T??i kho???n */}
            <View
              style={{
                paddingVertical: 10,
                marginBottom: 10,
                backgroundColor: "white",
              }}
            >
              <Text style={{ padding: 10, fontWeight: "bold" }}>T??i kho???n</Text>
              <View style={{ alignItems: "center" }}>
                <ItemOfTopic
                  typeVector="FontAwesome"
                  nameVector="shopping-basket"
                  itemContent="Theo d??i ????n h??ng"
                />

                <ItemOfTopic
                  typeVector="AntDesign"
                  nameVector="clockcircleo"
                  itemContent="????n h??ng d???ch v??? ti???n ??ch"
                />

                <ItemOfTopic
                  typeVector="FontAwesome"
                  nameVector="money"
                  itemContent="Theo d??i kho???n vay"
                />

                <ItemOfTopic
                  typeVector="AntDesign"
                  nameVector="staro"
                  itemContent="????nh gi?? c???a t??i"
                />

                <ItemOfTopic
                  typeVector="Entypo"
                  nameVector="location"
                  itemContent="Th??ng tin nh???n h??ng"
                />

                <ItemOfTopic
                  typeVector="Entypo"
                  nameVector="wallet"
                  itemContent="T??i kho???n Payment"
                />

                <ItemOfTopic
                  typeVector="AntDesign"
                  nameVector="creditcard"
                  itemContent="Th??? v?? t??i kho???n li??n k???t"
                />

                <ItemOfTopic
                  typeVector="AntDesign"
                  nameVector="setting"
                  itemContent="C??i ?????t th??ng b??o"
                />
              </View>
            </View>

            {/* ??a th??ch */}
            {/* <View>
              <Text>??a th??ch</Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Qu??t m?? QR</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>??u ????i c???a t??i</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>S???n ph???m y??u th??ch</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Shop theo d??i</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>S??? ki???n</Text>
              </View>
            </View> */}

            {/* Ng?????i b??n */}
            <View
              style={{
                paddingVertical: 10,
                marginBottom: 10,
                backgroundColor: "white",
              }}
            >
              <Text style={{ padding: 10, fontWeight: "bold" }}>
                D??nh cho ng?????i b??n
              </Text>
              <View style={{ alignItems: "center" }}>
                <ItemOfTopic
                  typeVector="Entypo"
                  nameVector="shop"
                  itemContent="B??n h??ng c??ng Sendo"
                />
              </View>
            </View>

            {/* H??? tr??? */}
            {/* <View>
              <Text>H??? tr???</Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>S??? ki???n</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>S??? ki???n</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>S??? ki???n</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>S??? ki???n</Text>
              </View>
            </View> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
