import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";

import { styles } from "./Styles";

const {width, height} = Dimensions.get('screen');

const TodayPickComponent = () => {
  return (
    <View
      style={[styles.todayPickContainer, styles.centerItem, styles.shadowStyle]}
    >
      <View style={[{ width: "100%", paddingVertical: 10 }, styles.marginL]}>
        <Text style={{ color: "grey" }}>Today's Pick</Text>
      </View>
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.45,
          alignItems: "center",
        }}
      >
        <Image
          source={require("@assets/images/today/today.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodayPickComponent;
