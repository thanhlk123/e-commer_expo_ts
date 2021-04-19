import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { styles } from "../index";

const dataSlide = [
  {
    id: 1,
    imgUrl: require("@assets/images/ProductsDetail/bag-1.jpg"),
  },
  {
    id: 2,
    imgUrl: require("@assets/images/ProductsDetail/bag-2.jpg"),
  },
  {
    id: 3,
    imgUrl: require("@assets/images/ProductsDetail/bag-3.jpg"),
  },
  {
    id: 4,
    imgUrl: require("@assets/images/ProductsDetail/bag-4.jpg"),
  },
  {
    id: 5,
    imgUrl: require("@assets/images/ProductsDetail/bag-1.jpg"),
  },
  {
    id: 6,
    imgUrl: require("@assets/images/ProductsDetail/bag-1.jpg"),
  },
];

const ProductImage = ({ item }) => {
  return (
    <View>
      <Image
        style={styles.productImg}
        resizeMode="contain"
        source={item.imgUrl}
      />
    </View>
  );
};

const ProductThumnail = (data) => {
  let _press = () => {
    data.onPressX(
      data.index,
      data.slide._carousel._snapToItem(data.index, true, true, true, true)
    );
  };
  return (
    <View>
      {data.index == data.activeIndex ? (
        <TouchableOpacity style={styles.mar_5} onPress={() => _press()}>
          <Image
            style={styles.thumnailImg}
            resizeMode="contain"
            source={data.url}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              width: 100,
              height: 128,
              backgroundColor: "gray",
              opacity: 0.6,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.mar_5} onPress={() => _press()}>
          <Image
            style={styles.thumnailImg}
            resizeMode="contain"
            source={data.url}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const { width, height } = Dimensions.get("screen");

const ProductInfoComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const _changeActiveIndex = (index, func) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Carousel
        layout={"default"}
        ref={(c) => {
          this._carousel = c;
        }}
        keyExtractor={(item, index) => `${item.id}`}
        data={dataSlide}
        loop={false}
        renderItem={ProductImage}
        itemWidth={0.9 * width}
        itemHeight={250}
        sliderWidth={0.9 * width}
        enableSnap={true}
        onSnapToItem={(index) => setActiveIndex(index)}
        scrollEndDragDebounceValue={1000}
      />

      {/* More Product Images */}
      <View style={styles.w_100}>
        <ScrollView
          horizontal={true}
          style={styles.w_100}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {dataSlide.length ? (
            dataSlide.map((data, index) => (
              <ProductThumnail
                url={data.imgUrl}
                index={index}
                slide={this}
                onPressX={_changeActiveIndex}
                activeIndex={activeIndex}
              />
            ))
          ) : (
            <View />
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default ProductInfoComponent;
