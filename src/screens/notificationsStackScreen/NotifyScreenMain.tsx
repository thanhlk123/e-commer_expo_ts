import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

const notifyData = [
  {
    id: "1",
    title: "Click săn ngay mã Freeship đơn 0đ",
    contentImg: require('../images/Notify/promot.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "2",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/sale_Laptop_1.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "3",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/sale_Laptop.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "4",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/sale_Laptop_2.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "5",
    title: "Mua sắm: Đến ngày lại lên",
    contentImg: require('../images/Notify/sale_Laptop_2.png'),
    content: {
      icon1: "require('')",
      contentText: "Hãy đến với chúng tôi. 1 ngày duy nhất",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "6",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/sale_Laptop_3.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "7",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/shopee_Sale.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "8",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/shopee_Sale_1.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "9",
    title: "Điện tử: Tưng bừng ngày hội khai trường",
    contentImg: require('../images/Notify/shopee_Sale_1.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn sớm",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
  {
    id: "10",
    title: "Điện tử: Tôi đang học react native",
    contentImg: require('../images/Notify/sale_Laptop_2.png'),
    content: {
      icon1: "require('')",
      contentText: "Cả nhà ơi! Mã Miễn Phí Vận Chuyển sẽ hết hạn vào 23h59 ngày 16/07/2020, sử dụng ngay nhé",
      icon2: "require('')"
    },
    time: "00:13 14-07-20"
  },
]
const NotifyItem = ({ item }) => {
  return (
    <View style={[{ flex: 1, marginHorizontal: 5, marginBottom:5, borderBottomWidth: 0.5, borderColor: "gray", borderRadius: 5 }]}>
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
          <Image source={item.contentImg}
            style={{ width: 50, height: 50, margin: 5, borderRadius: 5 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, margin: 3 }}>
              {item.title}
            </Text>
            <View style={{ flexDirection: 'row', margin: 3 }}>
              <Text numberOfLines={2} ellipsizeMode='tail'>
                {item.content.contentText}
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 3 }}>
              <Feather name="clock" size={16} color="gray" />
              <Text>{item.time}</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default class NotifyScreenMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        
        <View style={{ flex: 1, marginTop: 5 }}>
          <FlatList
            data={notifyData}
            renderItem={NotifyItem}
            keyExtractor={item => item.id}

          />
        </View>
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
  shadowOffset5: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});
