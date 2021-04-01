import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";

import { styles } from "./Styles";

type ScreenProps = {
  data: any
};

const { width, height } = Dimensions.get("screen");

const RenderItem = (item) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity>
        <View style={[styles.QCItem, styles.centerItem]}>
          <Image source={item.img} style={styles.QCImg} resizeMode="cover" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const QcComponent = ({ data }: ScreenProps) => {
  return (
    <View style={[styles.QCcontainer, styles.shadowStyle]}>
      <View style={[{ width: "100%", padding: 10 }]}>
        <Text style={{ color: "grey", fontSize: 13 }}>
          Since you've shown interest in Tshirts
        </Text>
      </View>
      <FlatList
        data={data}
        style={{ width: width * 0.95 }}
        renderItem={({ item }) => <RenderItem img={item.img} title="" details="" />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "60%" }}>
          <Text style={{ fontWeight: "bold" }}>United Colors of Benetton</Text>
          <Text style={{ fontSize: 9, color: "grey" }}>
            United Colors of Benetton Men Coral Red Solid Polo Callar T-shirt
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: 13 }}>$900</Text>
            <Text style={{ textDecorationLine: "line-through", color: "grey" }}>
              $1,499
            </Text>
            <Text style={{ color: "green" }}>40% off</Text>
          </View>
        </View>
        <View style={[{ width: "30%" }, styles.centerItem]}>
          <TouchableOpacity
            style={{
              width: 75,
              height: 35,
              borderRadius: 2,
              backgroundColor: "#42c945",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default QcComponent;
