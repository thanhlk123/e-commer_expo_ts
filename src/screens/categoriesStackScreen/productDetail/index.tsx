import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";

import {
  listSimilarProducts,
  dataSlide,
  listOfSize,
  listOfCustomerComment,
} from "./common/demoDataJson";
import HeaderComponent from "@components/HeaderComponent";
import ProductImagesBar from "./common/ProductImagesBar";
import { styles } from "./common/stylesCommon";
import ProductInfo from "./common/ProductInfoComponent";
import SimilarProduct from "./common/SimilarProduct";
import ProductDetails from "./common/ProductDetails";
import CountItem from "./common/CountItemComponent";
import ProductOptions from "./common/ProductOptions";
import { AddItemToCartAction } from "@appRedux/actionTypes/bagScreenAction";
import { CartItem as CartItemProps } from "@constants/BagScreen";

type MainProps = {
  navigation: any;
  addItemInCart: (payload) => void;
};

const BottomBar = ({ setShowPopup }) => {
  return (
    <Row>
      <Btn
        style={styles.bottomBtn}
        onPress={() => setShowPopup({ isShow: true, typeId: 0 })}
        color="#3b5f8a"
      >
        <AntDesign name="shoppingcart" size={24} color="#fff" />
        <TitleBtn color="#fff">Add to Cart</TitleBtn>
      </Btn>
      <Btn
        style={styles.bottomBtn}
        onPress={() => setShowPopup({ isShow: true, typeId: 1 })}
        color="red"
      >
        <TitleBtn color="#fff">Buy</TitleBtn>
      </Btn>
    </Row>
  );
};
const index = ({ navigation, addItemInCart }: MainProps) => {
  const [isShowPopup, setShowPopup] = useState({ isShow: false, typeId: 0 });
  const [totalOrder, setTotalOrder] = useState(0);
  const [payload, setPayload] = useState<CartItemProps>({
    id: 0,
    url:
      "http://image.vietnamnews.vn/uploadvnnews/Article/2021/3/18/142705_hoa.jpg",
    totalInStock: 12,
    totalOrder: 1,
    name: "FabAlley Women Gray Classic Fit",
    shopName: "FunFash",
    price: 799,
    originPrice: 1299,
    type: "Casual Top",
    isSelected: true,
    options: {
      sizeId: 0
    }
  });
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#3b5f8a" }} />
      <SafeAreaView style={[styles.container]}>
        <HeaderComponent
          title={"Product Detail"}
          icLeft="back"
          onPressLeft={() => navigation.goBack()}
        />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <ProductImagesBar data={dataSlide} />

          <ProductInfo />

          <SeparatorView />

          <ProductDetails />

          <SeparatorView />

          <SimilarProduct data={listSimilarProducts} />
        </ScrollView>
        <Modal
          transparent={true}
          animationType={"fade"}
          visible={isShowPopup.isShow}
        >
          <BackgroundBlur />
          <View style={styles.contentPopup}>
            <Row
              style={{
                flex: 1,
                justifyContent: "space-between",
                paddingHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Row style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri:
                      "https://tuixachkimlong.vn/wp-content/uploads/balo-kim-long-kl-024-den-1.jpg",
                  }}
                  resizeMode="cover"
                />
                <View style={{ marginLeft: 10 }}>
                  <Txt color={"red"}>20000 đ</Txt>
                  <Txt color="#666666">Stock: 12</Txt>
                </View>
              </Row>
              <Btn
                onPress={() => setShowPopup({ isShow: false, typeId: 0 })}
                color={"transparent"}
              >
                <AntDesign name="close" size={24} color="black" />
              </Btn>
            </Row>

            <SeparatorView height={0.5} />

            <ProductOptions data={listOfSize} />

            <SeparatorView height={0.5} />
            <Row
              style={{
                justifyContent: "space-between",
                paddingHorizontal: 10,
                marginTop: 10,
              }}
            >
              <Text>Quantity</Text>
              <CountItem value={totalOrder} setValue={setTotalOrder} />
            </Row>
            {isShowPopup.typeId ? (
              <Btn
                disabled={totalOrder === 0}
                style={styles.btn_popUp}
                color={totalOrder === 0 ? "#D5D5D5" : "red"}
                onPress = {() => {
                  // addItemInCart({...payload, totalOrder:totalOrder});
                  // setShowPopup({isShow: false, typeId:0})
                  navigation.goBack();
                }}
              >
                <Text style={{ color: "#fff", fontSize: 14 }}>Buy</Text>
              </Btn>
            ) : (
              <Btn
                disabled={totalOrder === 0}
                style={styles.btn_popUp}
                color={totalOrder === 0 ? "#D5D5D5" : "red"}
                onPress = {() => {
                  addItemInCart({...payload, totalOrder:totalOrder});
                  setShowPopup({isShow: false, typeId:0})
                }}
              >
                <Text style={{ color: "#fff", fontSize: 14 }}>Add to Cart</Text>
              </Btn>
            )}
          </View>
        </Modal>
        <BottomBar setShowPopup={setShowPopup}/>
      </SafeAreaView>
    </>
  );
};

type StyledProps = {
  color?: string;
  height?: number;
};
const Row = styled.View`
  flex-direction: row;
`;

const Btn = styled.TouchableOpacity<StyledProps>`
  background-color: ${(props) => props.color};
`;

const TitleBtn = styled.Text<StyledProps>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

const SeparatorView = styled.View<StyledProps>`
  width: 100%;
  height: ${(props) => props.height || 8}px;
  background-color: #d5d5d5;
`;

const BackgroundBlur = styled.View`
  flex: 1;
  background-color: #d5d5d5cc;
`;

const Txt = styled.Text<StyledProps>`
  color: ${(props) => props.color};
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemInCart: (payload) => dispatch(AddItemToCartAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
