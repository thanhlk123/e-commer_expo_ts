import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";

import {styles} from "./Styles";

type ScreenProps = {
  data: any;
};

const {width, height} = Dimensions.get('screen');

const ItemRender = (item) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={[styles.junsInItem, styles.centerItem]}>
          <Image
            source={item.img}
            style={styles.trendingImg}
            resizeMode="cover"
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.trendingTitle}>{item.title}</Text>
            <Text style={styles.trendingDetails}>{item.details}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const LimitedSaleComponent = ({ data }: ScreenProps) => {
  return (
    <View style={[styles.justInContainer, styles.shadowStyle]}>
      <View
        style={[
          {
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: width,
            justifyContent: "space-between",
            flexDirection: "row",
          },
          styles.marginL,
        ]}
      >
        <Text style={{ color: "grey" }}>Just In</Text>
      </View>
      <FlatList
        data={data}
        style={[{ width: width - 40 }]}
        renderItem={({ item }) => (
          <ItemRender
            img={item.img}
            details={item.details}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};


export default LimitedSaleComponent;
