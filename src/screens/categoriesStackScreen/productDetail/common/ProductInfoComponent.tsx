import React from "react";
import { View, Text } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

import { styles } from "./stylesCommon";

const ProductVotes = (data) => {
  return (
    <View style={styles.commonContentContainer}>
      <FontAwesome name="star" size={16} color="#FFAA43" />
      <FontAwesome name="star" size={16} color="#FFAA43" />
      <FontAwesome name="star" size={16} color="#FFAA43" />
      <FontAwesome name="star-half-empty" size={16} color="#FFAA43" />
      <FontAwesome name="star-o" size={16} color="#FFAA43" />
      <Text
        style={{
          paddingHorizontal: 5,
          borderRightWidth: 1,
          borderRightColor: "gray",
          fontSize: 16,
          color: "gray",
        }}
      >
        4.9
      </Text>
      <Text
        style={{
          paddingHorizontal: 5,
          paddingBottom: 2,
          fontSize: 16,
          color: "gray",
        }}
      >
        Đã bán 2.4k
      </Text>
    </View>
  );
};

const ProductInfoComponent = () => {
  return (
    <View style = {styles.paddingH_10}>
      <Text style={styles.productNameText}>Backpack double strap</Text>

      <ProductVotes />

      <View style={styles.commonContentContainer}>
        <Text style={styles.promotionPriceText}> 418.000₫ ~ 500.000₫</Text>
        <Text>
          (<Text style={styles.costPriceText}> 618.000₫ </Text>)
        </Text>
      </View>

      <View style={styles.mb_10}>
        <Text style={{ color: "gray" }}>
          Lacinia porta aenean conubia a ut integer ultrices cras a laoreet erat
          iaculis mollis cursus ante consectetur consectetur qisque vel rutrum
          elementum dis a class tempus a.Adipiscing a condimentum condimentum.
        </Text>
      </View>
    </View>
  );
};

export default ProductInfoComponent;
