import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { styles } from "./Styles";

const SaleComponent = (props) => {
  return (
    <View style={[styles.saleContainers, styles.shadowStyle]}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Sales")}
        style={[styles.saleButton, styles.centerItem]}
      >
        <Image
          source={require("@assets/images/sale/sale.jpg")}
          resizeMode="cover"
          style={[styles.renderSaleImg]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SaleComponent;
