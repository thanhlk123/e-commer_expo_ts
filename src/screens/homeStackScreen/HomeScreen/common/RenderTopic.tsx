import React from "react";
import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import { styles } from "./Styles";
import topicsData from "@demoData/Topics";

const { width, height } = Dimensions.get("screen");

const RenderItemTopic = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Shop")}>
      <View style={styles.itemTopic}>
        <Image
          source={props.img}
          style={styles.topicItemImg}
          resizeMode="cover"
        />
        <Text style={styles.topicText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
