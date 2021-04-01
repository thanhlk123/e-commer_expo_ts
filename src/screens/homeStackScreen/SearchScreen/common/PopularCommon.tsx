import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

type ScreenProps = {
  title: string;
  data: any;
  isDarkMode: boolean;
};
const PopularCommon = ({ data, isDarkMode, title }: ScreenProps) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {data.length > 0 &&
          data.map((e) => {
            return (
              <BtnItem onPress={() => {}}>
                <DescText color={"#666666"} style={{ flex: 1 }}>
                  {e.desc}
                </DescText>
                <Image
                  source={{ uri: e.url }}
                  style={{ width: 60, height: 60 }}
                  resizeMode="stretch"
                />
              </BtnItem>
            );
          })}
      </View>
    </Container>
  );
};

type StyledProps = {
  color?: string;
  bgColor?: string;
  borderColor?: string;
};

const Container = styled.View`
  background-color: #fff;
`;
const TitleText = styled.Text<StyledProps>`
  font-weight: 700;
  font-size: 14px;
  padding-vertical: 16px;
  padding-left: 16px;
`;

const DescText = styled.Text<StyledProps>`
  font-size: 14px;
  color: ${(props) => props.color};
`;

const BtnItem = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  padding-vertical: 10px;
  padding-horizontal: 10px;
  border-width: 0.5px;
  border-color: #d5d5d5;
  align-items: center;
`;

export default PopularCommon;
