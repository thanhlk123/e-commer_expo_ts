import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./stylesCommon";

const demoData = [
  { id: 1, title: "Stock", value: "3865" },
  { id: 2, title: "Brands", value: "HARA" },
  { id: 3, title: "Meterial", value: "Polyester" },
  { id: 4, title: "Origin", value: "Viet Nam" },
  { id: 5, title: "Ships From", value: "Quan Thu Duc, TP. HCM" },
];

const introduceData = `Balo thời trang nam nữ ulzzang🍀FREESHIP🍀balo đi học vừa đi làm đựng được laptop 15.6 in
- Balo thời trang nam nữ là mẫu balo đi học đang được các bạn trẻ yêu thích nhất hiện nay.Với thiết kế đơn giản và chất liệu vải dày dặn chống thấm nước cao cấp,trẻ trung năng động sẽ giúp bạn tạo nên phong cách riêng của mình khi sử dụng, kiểu dáng balo thời trang chuẩn from phù hợp cho cả nam và nữ khi sử dụng,kích thước balo rộng kèm ngăn laptop riêng biệt phù hợp cho việc đi học,đi chơi hoặc du lịch.
Balo uzzlang
THÔNG TIN SẢN PHẨM :
✅ Tên Sản Phẩm : Balo đi học nam nữ thời trang hàn quốc unisex chống thấm nước hàng quảng châu cao cấp
✅ Kích thước : 43 x 31 x 12 cm ( cao x dài x rộng ), đựng vừa laptop 16 inch
✅ Màu sắc : Đen
✅ Chất liệu : Vải chuẩn Hàn Quốc 900Pvc chống nước loại 1 , chuyên dụng được dùng làm cho balo cao cấp/xuất khẩu
✅ Xuất Xứ Việt Nam
✅ Tất cả hình ảnh tại Shop đều là ảnh thật kèm video
✅ Bao đổi trả nếu hàng lỗi / không giống ảnh`;

const { width, height } = Dimensions.get("screen");

const RenderItem = () => {
    return (
        <View>

        </View>
    )
}
const ProductDetails = () => {
  const [renderData, setRenderData] = useState([{}]);
  const [isExpand, setExpand] = useState(false);

  return (
    <View style = {styles.paddingH_10}>
      <Title>Product Details</Title>
      <SeparatorView style={styles.mar_5} />
      <View>
        <TextDes style={!isExpand && styles.hiddenView}>{introduceData}</TextDes>
        {!isExpand && (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <LinearGradient
              colors={["#ffffff00", "#ffffff"]}
              style={{ width: width, height: 20 }}
            ></LinearGradient>
          </View>
        )}
      </View>
      <SeparatorView style={styles.mar_5} />
      {isExpand ? (
        <Btn onPress = {() => setExpand(!isExpand)}>
          <TitleBtn>See Less</TitleBtn>
        </Btn>
      ) : (
        <Btn onPress = {() => setExpand(!isExpand)}>
          <TitleBtn>See More</TitleBtn>
        </Btn>
      )}
    </View>
  );
};

const Title = styled.Text`
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TextDes = styled.Text`
  font-size: 14px;
  line-height: 19px;
  color: #666666;
`;

const SeparatorView = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #d5d5d5;
`;

const Btn = styled.TouchableOpacity`
    padding-vertical: 16px;
    justify-content:center;
    align-items:center;
`;

const TitleBtn = styled.Text`
    color: red;
`

export default ProductDetails;
