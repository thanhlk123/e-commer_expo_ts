import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

import { CHAT_SCREEN } from "@constants/NavigationTypes";

const KimSoHuyn_Img = [
  {
    id: 1,
    url:
      "https://static2.yan.vn/YanNews/2167221/201710/20171002-090535-14908196_1141984935879625_2656760192485172468_n_desktop.jpg",
  },
  {
    id: 2,
    url:
      "https://revelogue.com/wp-content/uploads/2020/03/kha-nang-dien-xuat-cua-co-duoc-boc-lo-tu-rat-som-e1583477740141.jpg",
  },
  {
    id: 3,
    url:
      "https://static2.yan.vn/YanNews/2167221/201904/nhan-sac-khac-la-cua-em-gai-quoc-dan-kim-so-hyun-trong-bo-anh-moi-8cd28d29.jpg",
  },
  {
    id: 4,
    url:
      "https://6.viki.io/image/081052ab0f6340b38f73d3d1a0f2b6d5.jpeg?s=900x600&e=t",
  },
];

const RenderItem = (item: any, navigation) => {
  const randomImg = Math.floor(Math.random() * 4);
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
      }}
      onPress={() => {
        navigation.navigate(CHAT_SCREEN, {
          url: KimSoHuyn_Img[randomImg].url,
          name: item.name,
        });
      }}
    >
      <View>
        <Image
          source={{
            uri: KimSoHuyn_Img[randomImg].url,
          }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
          resizeMode="cover"
        />
        {item.isActive && <IconAction />}
      </View>

      <View style={{ flex: 1, paddingLeft: 16 }}>
        <TitleChatGroup>{item.name}</TitleChatGroup>
        <TextDescription
          style={{ paddingTop: 10 }}
          numberOfLines={2}
          color="#666666"
        >
          {item.lastMessage.body}
        </TextDescription>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextDescription color="#666666">5 min</TextDescription>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            backgroundColor: "#567AF3",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TextDescription color="#fff">5</TextDescription>
        </View>
      </View>
    </TouchableOpacity>
  );
};

type StyledProps = {
  color?: string;
};
const TitleChatGroup = styled.Text`
  font-weight: 700;
  font-size: 15px;
`;
const TextDescription = styled.Text<StyledProps>`
  color: ${(props) => props.color};
`;

const IconAction = styled.View`
  position: absolute;
  bottom: 0px;
  right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #56f398;
`;

export default RenderItem;
