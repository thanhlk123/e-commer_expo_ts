import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import {styles} from "./stylesCommon"

type MainProps = {
  data: any;
};

const ProductOptions = ({ data }: MainProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style = {styles.mar_5}>
      <Title>
        Size:
      </Title>
      <Row>
        {data.map((e, index) => (
          <View key={e.id}>
            <TouchableOpacity
              onPress={() => {
                setActiveIndex(index);
              }}
            >
              <View
                style={{
                  width: 30,
                  marginRight: 10,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: activeIndex === index ? "red" : "#000",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: activeIndex === index ? "red" : "#000" }}>
                  {e.size}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </Row>
    </View>
  );
};

const Row = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 10px;
`

export default ProductOptions;
