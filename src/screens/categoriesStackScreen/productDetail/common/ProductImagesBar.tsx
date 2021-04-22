import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { styles } from "./stylesCommon";

type RenderItemProps = {
  url: any;
  index: number;
  onPressX: any;
  activeIndex: number;
};

type MainProps = {
  data: any;
};

const RenderItem = ({ index, activeIndex, url, onPressX }: RenderItemProps) => {
  let _press = () => {
    onPressX();
  };
  return (
    <View>
      {index == activeIndex ? (
        <TouchableOpacity style={styles.mar_5} onPress={() => _press()}>
          <Image style={styles.thumnailImg} resizeMode="contain" source={url} />
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
          <Image style={styles.thumnailImg} resizeMode="contain" source={url} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const ProductImagesBar = ({ data }: MainProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ContainerProductImage>
      <Image
        style={styles.productImg}
        resizeMode="contain"
        source={data[activeIndex].imgUrl}
      />
      <ScrollView horizontal>
        {data &&
          data.map((e, index) => {
            return (
              <RenderItem
                key={e.id}
                activeIndex={activeIndex}
                url={e.imgUrl}
                onPressX={() => {
                  setActiveIndex(index);
                }}
                index={index}
              />
            );
          })}
      </ScrollView>
    </ContainerProductImage>
  );
};

const ContainerProductImage = styled.View`
  margin-top: 10px;
  padding-horizontal: 10px;
`;

export default ProductImagesBar;
