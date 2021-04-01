import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

import { styles } from "./Styles";

const ItemTrending = (item) => {
  return (
    <View style={styles.centerItem}>
      <TouchableOpacity>
        <View style={[styles.itemTrending, styles.centerItem]}>
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

type ScreenProps = {
    data: any
}

const TrendingComponent = ({ data }: ScreenProps) => {
  return (
    <View style={[styles.renderTrendingContainer, styles.shadowStyle]}>
      <View style={[styles.trendingTitle, { padding: 10 }]}>
        <Text style={{ color: "grey" }}>Trending Now</Text>
      </View>
      <FlatList
        data={data}
        style={[styles.renderTrendingFlatlist]}
        renderItem={({ item }) => (
          <ItemTrending
            img={item.img}
            title={item.title}
            details={item.details}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingComponent;
