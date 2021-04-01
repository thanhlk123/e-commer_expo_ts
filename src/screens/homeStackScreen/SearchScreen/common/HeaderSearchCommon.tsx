import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const demoListKeyword = [
  {
    id: 1,
    keyword: "Áo thun nữ",
  },
  {
    id: 2,
    keyword: "Áo thun nam",
  },
  {
    id: 3,
    keyword: "Áo Hoodie nữ",
  },
  {
    id: 4,
    keyword: "Áo khoác",
  },
  {
    id: 5,
    keyword: "Áo sơ mi",
  },
];

const HeaderSearchCommon = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <Row>
      <Ionicons name="arrow-back" size={24} color="white" />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingLeft: 10,
            paddingVertical: 5,
          }}
          onChangeText={(text) => setKeyword(text)}
          placeholder={"Nhập để tìm kiếm"}
        />
        {!!keyword && (
          <View
            style={{
              width: "100%",
              backgroundColor: "#D5D5D5",
              position: "absolute",
              top: 26,
            }}
          >
            {demoListKeyword.map((e, index) => {
              return (
                <BtnItemSearch key={index.toString()}>
                  <ResultText> {e.keyword}</ResultText>
                </BtnItemSearch>
              );
            })}
          </View>
        )}
      </View>
    </Row>
  );
};

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #3b5f8a;
  overflow: visible;
  z-index: 10;
`;

const ResultText = styled.Text`
  color: #000;
  padding-vertical: 8px;
  padding-left: 10px;
  font-size: 14px;
`;

const BtnItemSearch = styled.TouchableOpacity``;

export default HeaderSearchCommon;
