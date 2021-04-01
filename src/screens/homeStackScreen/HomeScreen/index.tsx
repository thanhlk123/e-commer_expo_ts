import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import TrendingsData from "@demoData/Trendings";
import { styles } from "./common/Styles";
import { RenderTopic } from "./common/RenderTopic";
import SaleComponent from "./common/SaleComponent";
import TrendingComponent from "./common/TrendingComponent";
import TodayPickComponent from "./common/TodayPickComponent";
import LimitedSaleComponent from "./common/LimitedSaleComponent";
import QcComponent from "./common/QcComponent";

import { HOME_SEARCH_SCREEN } from "@constants/NavigationTypes";

export default class HomeMainScreen extends Component<
  { navigation: any },
  { isSearching: boolean; valueSearch: string }
> {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      valueSearch: "",
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#3b5f8a" }}>
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <View
            style={[
              {
                backgroundColor: "white",
                width: "100%",
                height: 40,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              },
              styles.shadowStyle,
            ]}
          >
            <TouchableOpacity
              style={[
                styles.centerItem,
                { width: "80%", flexDirection: "row" },
              ]}
              onPress={() => this.props.navigation.navigate(HOME_SEARCH_SCREEN)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>E-COMMERCE VIP PRO</Text>
              </View>
              <Feather name="search" size={24} color="#595959" />
            </TouchableOpacity>

            <BtnSmall>
              <AntDesign name="shoppingcart" size={24} color="#595959" />
              <PostTaggedContainer>
                <Text style={{ color: "white", fontSize: 11 }}>9</Text>
              </PostTaggedContainer>
            </BtnSmall>

            <BtnSmall>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color="#595959"
              />
              <PostTaggedContainer>
                <Text style={{ color: "white", fontSize: 12 }}>9</Text>
              </PostTaggedContainer>
            </BtnSmall>
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginBottom: 30 }}>
                <RenderTopic navigation={this.props.navigation} />
                <SaleComponent navigation={this.props.navigation} />
                <TrendingComponent data={TrendingsData} />
                <TodayPickComponent />
                <LimitedSaleComponent data={TrendingsData} />
                <QcComponent data={TrendingsData} />
                <LimitedSaleComponent data={TrendingsData} />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const BtnSmall = styled.TouchableOpacity`
  padding-right: 10px;
`;

const PostTaggedContainer = styled.View`
  position: absolute;
  top: -5px;
  right: 0px;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
