import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

const ItemOfTopic = (props) => {
  let iconElement;

  if (props.typeVector === "AntDesign") {
    iconElement = <AntDesign name={props.nameVector} size={16} color="gray" style={{ textAlign: 'right' }} />
  } else if (props.typeVector === "FontAwesome") {
    iconElement = <FontAwesome name={props.nameVector} size={16} color="gray" />
  } else if (props.typeVector === "Entypo") {
    iconElement = <Entypo name={props.nameVector} size={16} color="gray" />
  }

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', width: "90%", marginBottom: 5 }}>
      {iconElement}
      <Text style={{ paddingLeft: 10 }}>{props.itemContent}</Text>
      <View style={{ marginLeft: "auto" }}>
        <AntDesign name="right" size={16} color="gray" style={{ textAlign: 'right' }} />
      </View>
    </TouchableOpacity>
  )
}

export default class ProfileMainScreen extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#eeeced" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{ height: 100, flexDirection: 'row', marginBottom: 10, backgroundColor: "white" }}>
              <Image source={require('../images/profile/user.png')}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderRightWidth: 1 }}>
                <TouchableOpacity style={{ padding: 5, borderRightWidth: 1 }}
                onPress = {()=>this.props.navigation.navigate('LoginScreen')}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5 }}
                onPress = {()=>this.props.navigation.navigate('RegisterScreen')}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Chương trình khuyến mãi */}
            <View style={{ paddingVertical: 10, marginBottom: 10, backgroundColor: "white", alignItems: "center" }}>
              <View style={{ flexDirection: 'row', width: "90%", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "gray", paddingVertical: 5 }}>
                <Image source={require('../images/profile/sale_icon.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{ paddingLeft: 5 }}>Săn deal mỗi ngày</Text>
                <View style={{ marginLeft: "auto" }}>
                  <AntDesign name="right" size={16} color="gray" style={{ textAlign: 'right' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                  <Image source={require('../images/profile/naptiendienthoai.png')}
                    style={{ width: 50, height: 50 }} />
                  <Text style={{ textAlign: 'center' }}>Nạp tiền điện thoại</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                  <Image source={require('../images/profile/dulich.png')}
                    style={{ width: 50, height: 50 }} />
                  <Text style={{ textAlign: 'center' }}>Du lịch bốn phương</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                  <Image source={require('../images/profile/thanhtoanhoadon.png')}
                    style={{ width: 50, height: 50 }} />
                  <Text style={{ textAlign: 'center' }}>Thanh toán hóa đơn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                  <Image source={require('../images/profile/sales.png')}
                    style={{ width: 50, height: 50 }} />
                  <Text style={{ textAlign: 'center' }}>FreeShip từ 99K</Text>
                </TouchableOpacity>

              </View>
            </View>

            {/* Tài khoản */}
            <View style={{ paddingVertical: 10, marginBottom: 10, backgroundColor: "white" }}>
              <Text style={{ padding: 10, fontWeight:"bold" }}>Tài khoản</Text>
              <View style={{ alignItems: "center" }}>

                <ItemOfTopic typeVector="FontAwesome" nameVector="shopping-basket" itemContent="Theo dõi đơn hàng" />

                <ItemOfTopic typeVector="AntDesign" nameVector="clockcircleo" itemContent="Đơn hàng dịch vụ tiện ích" />

                <ItemOfTopic typeVector="FontAwesome" nameVector="money" itemContent="Theo dõi khoản vay" />

                <ItemOfTopic typeVector="AntDesign" nameVector="staro" itemContent="Đánh giá của tôi" />

                <ItemOfTopic typeVector="Entypo" nameVector="location" itemContent="Thông tin nhận hàng" />

                <ItemOfTopic typeVector="Entypo" nameVector="wallet" itemContent="Tài khoản Payment" />

                <ItemOfTopic typeVector="AntDesign" nameVector="creditcard" itemContent="Thẻ và tài khoản liên kết" />

                <ItemOfTopic typeVector="AntDesign" nameVector="setting" itemContent="Cài đặt thông báo" />

              </View>

            </View>

            {/* Ưa thích */}
            {/* <View>
              <Text>Ưa thích</Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Quét mã QR</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Ưu đãi của tôi</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Sản phẩm yêu thích</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Shop theo dõi</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Sự kiện</Text>
              </View>
            </View> */}

            {/* Người bán */}
            <View style={{ paddingVertical: 10, marginBottom: 10, backgroundColor: "white" }}>
              <Text style={{ padding: 10, fontWeight:"bold" }}>
                Dành cho người bán
                </Text>
              <View style={{alignItems:'center'}}>
                <ItemOfTopic typeVector="Entypo" nameVector="shop" itemContent="Bán hàng cùng Sendo" />
              </View>

            </View>

            {/* Hỗ trợ */}
            {/* <View>
              <Text>Hỗ trợ</Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Sự kiện</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Sự kiện</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Sự kiện</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="arrow-back" size={16} color="gray" />
                <Text>Sự kiện</Text>
              </View>
            </View> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
