import React from "react";
import { View, Dimensions, FlatList } from "react-native";

import { styles } from "./Styles";
import topicsData from "@demoData/Topics";
import { RenderItemTopic } from "./RenderItemTopic";

const { width, height } = Dimensions.get("screen");

export const RenderTopic = (props) => {
  return (
    <View
      style={[
        styles.saleContainers,
        styles.shadowStyle,
        { width: width - 6, marginTop: 20 },
        styles.centerItem,
      ]}
    >
      <FlatList
        horizontal={true}
        style={[styles.topic]}
        showsHorizontalScrollIndicator={false}
        data={topicsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderItemTopic
            title={item.title}
            img={item.img}
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};
