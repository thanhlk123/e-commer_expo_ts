import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";

import RenderItem from "./common/RenderItem";

const demoData = [
  {
    id: 1,
    channelId: "channel_1",
    name: "Lan Thao",
    isActive: true,
    lastMessage: {
      body:
        "Tui dang test 1 cai chat app xin xin, dung react-native-gifted-chat",
      time: "2020-11-20",
    },
    avatar: "",
  },
  {
    id: 2,
    channelId: "channel_2",
    name: "Hanh Nguyen",
    isActive: true,
    lastMessage: {
      body:
        "Nice to meet you every one, can i help uoi with some things",
      time: "2020-11-20",
    },
    avatar: "",
  },
  {
    id: 3,
    channelId: "channel_3",
    name: "Thanh Pham",
    isActive: false,
    lastMessage: {
      body:
        "Tui dang test 1 cai chat app xin xin, dung react-native-gifted-chat",
      time: "2020-11-20",
    },
    avatar: "",
  },
];

const ChannelScreen = () => {
  const [channels, setChannels] = useState(demoData);
  const [loading, setLoading] = useState(true);
  const [leaveChannel, setLeaveChannel] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3b5f8a" }}>
      <Container>
        <HeaderContainer>
          <TouchableOpacity
            style={{ paddingHorizontal: 10, paddingVertical: 5 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Chat</HeaderTitle>
        </HeaderContainer>
        <SearchContainer>
          <TextInput
            placeholder="Type some things to search"
            style={{ flex: 1, paddingLeft: 10 }}
          />
          <Feather name="search" size={24} color="#595959" />
        </SearchContainer>
        <FlatList
          data={channels}
          style={{ marginTop: 20 }}
          keyExtractor={(item: any) => item.id.toString()}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => {
            return RenderItem(item, navigation);
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

type StyledProps = {
  color?: string;
};
const HeaderContainer = styled.View<StyledProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  padding-left: 10px;
  background-color: #3b5f8a;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const HeaderTitle = styled.Text<StyledProps>`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
`;

const TextInput = styled.TextInput``;

const SearchContainer = styled.View`
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: #000;
`;

export default ChannelScreen;
