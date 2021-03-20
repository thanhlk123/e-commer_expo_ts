import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput, Dimensions } from 'react-native';
import { FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window')

const ListSimilarProducts = [
  {
    id: 1,
    price: "60.000₫",
    productTitle: "[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp",
    productImg: require('../images/ProductsDetail/bag-1.jpg')
  },
  {
    id: 2,
    price: "20.000₫",
    productTitle: "[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp",
    productImg: require('../images/ProductsDetail/bag-1.jpg')
  },
  {
    id: 3,
    price: "40.000₫",
    productTitle: "[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp",
    productImg: require('../images/ProductsDetail/bag-1.jpg')
  },
  {
    id: 5,
    price: "60.000₫",
    productTitle: "[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp",
    productImg: require('../images/ProductsDetail/bag-1.jpg')
  },
  {
    id: 6,
    price: "80.000₫",
    productTitle: "[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp",
    productImg: require('../images/ProductsDetail/bag-1.jpg')
  }
]

const dataSlide = [
  {
    id: 1,
    imgUrl: require('../images/ProductsDetail/bag-1.jpg')
  },
  {
    id: 2,
    imgUrl: require('../images/ProductsDetail/bag-2.jpg')
  },
  {
    id: 3,
    imgUrl: require('../images/ProductsDetail/bag-3.jpg')
  },
  {
    id: 4,
    imgUrl: require('../images/ProductsDetail/bag-4.jpg')
  },
  {
    id: 5,
    imgUrl: require('../images/ProductsDetail/bag-1.jpg')
  },
  {
    id: 6,
    imgUrl: require('../images/ProductsDetail/bag-1.jpg')
  }
]
const ListOfSize = [
  {
    id: 1,
    size: "S"
  },
  {
    id: 2,
    size: "M"
  },
  {
    id: 3,
    size: "L"
  },
  {
    id: 4,
    size: "XL"
  },
  {
    id: 5,
    size: "XXL"
  },
]
const ListOfCustomerComment = [
  {
    id: 1,
    content: ""
  },
  {
    id: 2,
    content: ""
  },
]
const ProductImage = ({ item }) => {
  return (
    <View>
      <Image
        style={styles.productImg}
        resizeMode="contain"
        source={item.imgUrl} />
    </View>
  )
}
const ProductThumnail = (data) => {
  let _press = () => {
    data.onPressX(data.index, data.slide._carousel._snapToItem(data.index, true, true, true, true))
  }
  return (
    <View>
      {data.index == data.activeIndex ?
        <TouchableOpacity
          style={styles.mar_5}
          onPress={() => _press()}>
          <Image style={styles.thumnailImg}
            resizeMode="contain"
            source={data.url} />
          <View
            style={{ position: "absolute", top: 0, width: 100, height: 128, backgroundColor: "gray", opacity: 0.6 }}
          />
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.mar_5}
          onPress={() => _press()}>
          <Image style={styles.thumnailImg}
            resizeMode="contain"
            source={data.url} />
        </TouchableOpacity>
      }
    </View>
  )
}

const ProductVotes = (data) => {
  return (
    <View style={styles.commonContentContainer}>
      <FontAwesome name="star" size={16} color="#FFAA43" />
      <FontAwesome name="star" size={16} color="#FFAA43" />
      <FontAwesome name="star" size={16} color="#FFAA43" />
      <FontAwesome name="star-half-empty" size={16} color="#FFAA43" />
      <FontAwesome name="star-o" size={16} color="#FFAA43" />
      <Text style={{ paddingHorizontal: 5, borderRightWidth: 1, borderRightColor: 'gray', fontSize: 16, color: "gray" }}>4.9</Text>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 2, fontSize: 16, color: "gray" }}>Đã bán 2.4k</Text>
    </View>
  )
}

const ProductPrice = (data) => {
  return (
    <View style={styles.commonContentContainer}>
      <Text style={styles.promotionPriceText}> 418.000₫ ~ 500.000₫</Text>
      <Text>
        (<Text style={styles.costPriceText}> 618.000₫ </Text>)
    </Text>
    </View>
  )
}

const ProductDesc = (data) => {
  return (
    <View style={styles.mb_10}>
      <Text style={{ color: "gray" }}>
        Lacinia porta aenean conubia a ut integer ultrices cras a laoreet erat iaculis mollis cursus ante consectetur consectetur qisque vel rutrum elementum dis a class tempus a.Adipiscing a condimentum condimentum.
      </Text>
    </View>
  )
}

const ProductSize = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: '400', paddingBottom: 3 }}>Size:</Text>
      {ListOfSize.map((data, index) => (
        props.sizeSelected === index ?
          <View>
            <TouchableOpacity
              onPress={() => props.onPressX(index)}>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'red', justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: 'red' }}>{data.size}</Text>
              </View>
            </TouchableOpacity>
          </View>
          :
          <View>
            <TouchableOpacity
              onPress={() => props.onPressX(index)}>
              <View style={{ marginHorizontal: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>{data.size}</Text>
              </View>
            </TouchableOpacity>
          </View>
      ))}
    </View>
  )
}

const SimilarProduct = (data) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        ListSimilarProducts.map(data => (
          <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
            <Image style={{ width: 75, height: 96 }}
              resizeMode="contain"
              source={data.productImg} />
            <View>
              <Text numberOfLines={2} style={{ fontSize: 12 }}>[Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
              </View>
            </View>
          </TouchableOpacity>))
      }
    </ScrollView>
  )
}

const CommentOfCustomer = (data) => {
  return (
    <View>
      {ListOfCustomerComment.map(data => (
        <View style={{ flexDirection: 'row', paddingVertical: 5, borderBottomColor: "gray", borderBottomWidth: 0.5 }}>
          <View style={{ marginHorizontal: 10, marginVertical: 5, width: 20, height: 20, borderRadius: 10, backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="user-alt" size={10} color="#2f435c" />
          </View>
          <View style={{ flex: 1, margin: 5 }}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: "gray" }}>User</Text>
              </View>
              <View style={{ flexDirection: "row", alignSelf: 'flex-end', width: 40, justifyContent: "space-between" }}>
                <AntDesign name="like1" size={16} color="gray" />
                <Entypo name="dots-three-horizontal" size={16} color="gray" />
              </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 5 }}>
              <FontAwesome name="star" size={10} color="#FFAA43" />
              <FontAwesome name="star" size={10} color="#FFAA43" />
              <FontAwesome name="star" size={10} color="#FFAA43" />
              <FontAwesome name="star-half-empty" size={10} color="#FFAA43" />
              <FontAwesome name="star-o" size={10} color="#FFAA43" />
            </View>
            <View style={{ margin: 5 }}>
              <Text>
                E chào cô. Do một số lý do gì đó mà tài khoản của e không được quét nộp tiền học. Cô cho e hỏi giờ e làm sao ạ. Vì mai e thi mà kiểm tra thấy tài khoản vẫn còn tiền ạ
          </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('../images/ProductsDetail/bag-2.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('../images/ProductsDetail/bag-2.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                <Image style={{ width: 75, height: 96 }}
                  resizeMode="contain"
                  source={require('../images/ProductsDetail/bag-2.jpg')} />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{ color: 'gray', fontSize: 13 }}>2020/07/02 12:42</Text>
            </View>

            <View style={{ backgroundColor: "#e6e7e8", padding: 5 }}>
              <Text style={{ fontSize: 14, color: "red", marginVertical: 5 }}>Phản hồi của người bán</Text>
              <Text style={{ fontSize: 13 }}>
                Shop cảm ơn bạn nhé!
          </Text>
            </View>
          </View>
        </View>
      ))}

    </View>
  )
}
export default class ProductDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      sizeIndex: 0
    }
  }

  _changeActiveIndex = (index, func) => {
    this.setState({ activeIndex: index }, func)
  }

  _changeSizeIndex = (index, func) => {
    this.setState({ sizeIndex: index }, func)
  }
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "90%" }}>

          {/* Product Image */}
          <Carousel
            layout={'default'}
            ref={(c) => { this._carousel = c; }}
            keyExtractor={(item, index) => `${item.id}`}
            data={dataSlide}
            loop={false}
            renderItem={ProductImage}
            itemWidth={0.9 * width}
            itemHeight={250}
            sliderWidth={0.9 * width}
            enableSnap={true}
            onSnapToItem={index => this.setState({ activeIndex: index })}
            scrollEndDragDebounceValue={1000}
          />

          {/* More Produc Images */}
          <View style={styles.w_100}>
            <ScrollView
              horizontal={true}
              style={styles.w_100}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}>

              {dataSlide.length ? dataSlide.map((data, index) => (
                <ProductThumnail
                  url={data.imgUrl}
                  index={index}
                  slide={this}
                  onPressX={this._changeActiveIndex}
                  activeIndex={this.state.activeIndex} />
              ))
                :
                <View />}
            </ScrollView>
          </View>

          {/* ProductName */}
          <View style={styles.commonContentContainer}>
            <Text style={styles.productNameText}>Backpack double strap</Text>
          </View>

          {/* Product Votes */}
          <ProductVotes />

          {/* Product Price */}
          <ProductPrice />

          {/* Product Description */}
          <ProductDesc />

          {/* Product Size */}
          <ProductSize sizeSelected={this.state.sizeIndex} onPressX={this._changeSizeIndex} />

          {/* Customer Comment */}
          <View >
            <View style={{ flexDirection: 'row', paddingVertical: 10, borderBottomColor: 'gray', borderBottomWidth: 0.5, alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '400', fontSize: 16, paddingBottom: 5 }}>ĐÁNH GIÁ SẢN PHẨM</Text>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome name="star" size={16} color="#FFAA43" />
                  <FontAwesome name="star" size={16} color="#FFAA43" />
                  <FontAwesome name="star" size={16} color="#FFAA43" />
                  <FontAwesome name="star-half-empty" size={16} color="#FFAA43" />
                  <FontAwesome name="star-o" size={16} color="#FFAA43" />
                  <Text style={{ paddingRight: 5 }}>4.9/5</Text>
                  <Text>(235 đánh giá)</Text>
                </View>
              </View>
              <View style={{ width: 100 }}>
                <Text>Xem tất cả <AntDesign name="right" size={16} color="black" /></Text>
              </View>
            </View>

            <View style={{ paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: "gray" }}>
              <Text style={{ fontSize: 16 }}>
                Hình ảnh từ người mua
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('../images/ProductsDetail/bag-1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('../images/ProductsDetail/bag-2.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('../images/ProductsDetail/bag-3.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5, flex: 1 }}>
                  <Image style={{ width: 75, height: 96 }}
                    resizeMode="contain"
                    source={require('../images/ProductsDetail/bag-4.jpg')} />

                  <View style={{ position: "absolute", top: 0, width: 75, height: 96, opacity: 0.5, backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>+44</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* <CommentComponent /> */}
            <CommentOfCustomer />

            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 14, color: 'red' }}>Xem Tất Cả (851)</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Similar Product */}
          <View style={styles.mb_10}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.similarProductText}>Sản phẩm tương tự</Text>
              <TouchableOpacity style={{ width: 100 }}>
                <Text style={styles.seeAllText}>Xem tất cả <AntDesign name="right" size={14} color="red" /></Text>
              </TouchableOpacity>
            </View>

            <SimilarProduct />
          </View>
        </ScrollView>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  productImg: {
    width: "100%",
    height: 250
  },
  thumnailImg: {
    width: 100,
    height: 128
  },
  mar_5: {
    margin: 5
  },
  w_100: {
    width: "100%"
  },
  mb_10: {
    marginBottom: 10
  },
  productNameText: {
    fontWeight: "400",
    fontSize: 28
  },
  commonContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  promotionPriceText: {
    color: "red",
    fontSize: 20,
    fontWeight: "400",
    paddingRight: 10
  },
  costPriceText: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 20
  },
  similarProductText: {
    fontWeight: '500',
    flex: 1,
    fontSize: 14
  },
  seeAllText: {
    fontSize: 14,
    color: 'red',
    paddingBottom: 3
  }
});




