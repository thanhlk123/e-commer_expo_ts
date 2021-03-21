import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {styles} from './Styles'

export const RenderItemTopic = (props) => {
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

