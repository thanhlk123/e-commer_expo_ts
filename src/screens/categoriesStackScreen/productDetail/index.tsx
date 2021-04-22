import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Modal,
  Image,
  StatusBar
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

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

type MainProps = {
  navigation: any;
};

const BottomBar = ({ setShowPopup }) => {
  return (
    <Row>
      <Btn
        style={styles.bottomBtn}
        onPress={() => setShowPopup(true)}
        color="#3b5f8a"
      >
        <AntDesign name="shoppingcart" size={24} color="#fff" />
        <TitleBtn color="#fff">Add to Cart</TitleBtn>
      </Btn>
      <Btn
        style={styles.bottomBtn}
        onPress={() => setShowPopup(true)}
        color="red"
      >
        <TitleBtn color="#fff">Buy</TitleBtn>
      </Btn>
    </Row>
  );
};
const index = ({ navigation }: MainProps) => {
  const [isShowPopup, setShowPopup] = useState(false);
  const [totalOrder, setTotalOrder] = useState(0);
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
        <Modal transparent = {true} animationType={"fade"} visible={isShowPopup}>
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
                  resizeMode = "cover"
                />
                <View style={{ marginLeft: 10 }}>
                  <Txt color = {'red'}>20000 đ</Txt>
                  <Txt color = "#666666">Stock: 12</Txt>
                </View>
              </Row>
              <Btn onPress={() => setShowPopup(false)} color={"transparent"}>
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
            <Btn style={styles.btn_popUp} color="red">
              <Text style={{ color: "#fff", fontSize: 14 }}>Buy</Text>
            </Btn>
          </View>
        </Modal>
        <BottomBar setShowPopup={setShowPopup} />
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
  color : ${props => props.color}
`

export default index;
