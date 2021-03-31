import React, { useState } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styled from "styled-components/native";

import History from "./common/HistoryCommon";

type ScreenProps = {
  isDarkMode: boolean;
};

const demoHistory = [
  { id: 1, keyword: "Siêu hội mua sắm 4.4" },
  {
    id: 2,
    keyword: "Ao thun nu",
  },
  {
    id: 3,
    keyword: "tripod điện thoại",
  },
  {
    id: 4,
    keyword: "boot nữ",
  },
  {
    id: 5,
    keyword: "Áo thun",
  },
  {
    id: 6,
    keyword: "Tem rời dán xe ab",
  },
  {
    id: 7,
    keyword: "Dán limited xe máy",
  },
  {
    id: 8,
    keyword: "Dán limited",
  },
  {
    id: 9,
    keyword: "Miếng dán trang trí",
  },
  {
    id: 5,
    keyword: "Chỉ mũi ab 2020",
  },
];

const demoPopularData = [
  { id: 1, url: "", desc: "Kem che khuyết điểm cao cấp" },
  { id: 2, url: "", desc: "Áo thun cổ lọ" },
  { id: 3, url: "", desc: "Áo thun nữa" },
  { id: 4, url: "", desc: "Giày nữ" },
  { id: 5, url: "", desc: "Giày nam cao cấp" },
  { id: 6, url: "", desc: "Tai nghe cao  cấp" }
];

const styles = StyleSheet.create({
  historyItem: {
    width: "100%",
    paddingVertical: 5,
    borderBottomColor: "#D5D5D5",
    borderBottomWidth: 0.5,
  },
  btnShowMore: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#D5D5D5",
    borderBottomWidth: 0.5,
  },
});

const SearchScreen = ({ isDarkMode }: ScreenProps) => {
  const [isExpandHistory, setExpandHistory] = useState(false);
  return (
    <View>
      <History
        isExpandHistory={isExpandHistory}
        setExpandHistory={setExpandHistory}
        data={demoHistory}
      />
      <SeparatorView />
    </View>
  );
};

type StyledProps = {
  color?: string;
  padding?: number;
};

const HistoryText = styled.Text<StyledProps>`
  padding-left: ${(props) => props.padding}px;
`;

const SeparatorView = styled.View<StyledProps>`
  width: 100%;
  height: 5px;
  background-color: #d5d5d5;
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
