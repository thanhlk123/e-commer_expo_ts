import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styled from "styled-components/native";

import History from "./common/HistoryCommon";
import Popular from "./common/PopularCommon";
import {
  demoHistory,
  demoCategoryData,
  demoPopularData,
} from "./common/DemoData";
import HeaderSearch from "./common/HeaderSearchCommon";

type ScreenProps = {
  isDarkMode: boolean;
};

const SearchScreen = ({ isDarkMode }: ScreenProps) => {
  const [isExpandHistory, setExpandHistory] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3b5f8a" }}>
      <MainView>
        <HeaderSearch />
        <History
          isExpandHistory={isExpandHistory}
          setExpandHistory={setExpandHistory}
          data={demoHistory}
        />
        <SeparatorView />
        <Popular
          data={demoPopularData}
          isDarkMode
          title={"Tìm kiếm phổ biến"}
        />
        <SeparatorView />
        <Popular data={demoCategoryData} isDarkMode title={"Danh mục"} />
      </MainView>
    </SafeAreaView>
  );
};

type StyledProps = {
  color?: string;
  padding?: number;
};

const SeparatorView = styled.View<StyledProps>`
  width: 100%;
  height: 5px;
  background-color: #d5d5d5;
`;

const MainView = styled.ScrollView`
  flex: 1;
  padding-bottom: 50px;
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
