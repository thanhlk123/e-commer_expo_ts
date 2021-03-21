import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import TrendingsData from "@demoData/Trendings";
import { styles } from "./common/Styles";
import {RenderTopic} from './common/RenderTopic'

const { width, height } = Dimensions.get("screen");



const RenderSale = (props) => {
  return (
    <View style={[styles.saleContainers, styles.shadowStyle]}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Sales")}
        style={[styles.saleButton, styles.centerItem]}
      >
        <Image
          source={require("../images/sale/sale.jpg")}
          resizeMode="cover"
          style={[styles.renderSaleImg]}
        />
      </TouchableOpacity>
    </View>
  );
};

const ItemTrending = (item) => {
  return (
    <View style={styles.centerItem}>
      <TouchableOpacity>
        <View style={[styles.itemTrending, styles.centerItem]}>
          <Image
            source={item.img}
            style={styles.trendingImg}
            resizeMode="cover"
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.trendingTitle}>{item.title}</Text>
            <Text style={styles.trendingDetails}>{item.details}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const RenderTrending = () => {
  return (
    <View style={[styles.renderTrendingContainer, styles.shadowStyle]}>
      <View style={[styles.trendingTitle, { padding: 10 }]}>
        <Text style={{ color: "grey" }}>Trending Now</Text>
      </View>
      <FlatList
        data={TrendingsData}
        style={[styles.renderTrendingFlatlist]}
        renderItem={({ item }) => (
          <ItemTrending
            img={item.img}
            title={item.title}
            details={item.details}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const RenderTodayPick = () => {
  return (
    <View
      style={[styles.todayPickContainer, styles.centerItem, styles.shadowStyle]}
    >
      <View style={[{ width: "100%", paddingVertical: 10 }, styles.marginL]}>
        <Text style={{ color: "grey" }}>Today's Pick</Text>
      </View>
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.45,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../images/today/today.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};
const QCItem = (item) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity>
        <View style={[styles.QCItem, styles.centerItem]}>
          <Image source={item.img} style={styles.QCImg} resizeMode="cover" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const RenderQC = () => {
  return (
    <View style={[styles.QCcontainer, styles.shadowStyle]}>
      <View style={[{ width: "100%", padding: 10 }]}>
        <Text style={{ color: "grey", fontSize: 13 }}>
          Since you've shown interest in Tshirts
        </Text>
      </View>
      <FlatList
        data={TrendingsData}
        style={{ width: width * 0.95 }}
        renderItem={({ item }) => <QCItem img={item.img} title="" details="" />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "60%" }}>
          <Text style={{ fontWeight: "bold" }}>United Colors of Benetton</Text>
          <Text style={{ fontSize: 9, color: "grey" }}>
            United Colors of Benetton Men Coral Red Solid Polo Callar T-shirt
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: 13 }}>$900</Text>
            <Text style={{ textDecorationLine: "line-through", color: "grey" }}>
              $1,499
            </Text>
            <Text style={{ color: "green" }}>40% off</Text>
          </View>
        </View>
        <View style={[{ width: "30%" }, styles.centerItem]}>
          <TouchableOpacity
            style={{
              width: 75,
              height: 35,
              borderRadius: 2,
              backgroundColor: "#42c945",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ItemJustIn = (item) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={[styles.junsInItem, styles.centerItem]}>
          <Image
            source={item.img}
            style={styles.trendingImg}
            resizeMode="cover"
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.trendingTitle}>{item.title}</Text>
            <Text style={styles.trendingDetails}>{item.details}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const RenderJustIn = () => {
  return (
    <View style={[styles.justInContainer, styles.shadowStyle]}>
      <View
        style={[
          {
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: width,
            justifyContent: "space-between",
            flexDirection: "row",
          },
          styles.marginL,
        ]}
      >
        <Text style={{ color: "grey" }}>Just In</Text>
      </View>
      <FlatList
        data={TrendingsData}
        style={[{ width: width - 40 }]}
        renderItem={({ item }) => (
          <ItemJustIn
            img={item.img}
            details={item.details}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

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
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          {this.state.isSearching ? (
            <View
              style={[
                {
                  backgroundColor: "white",
                  width: "100%",
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                },
                styles.shadowStyle,
              ]}
            >
              <TextInput
                style={{ width: "70%" }}
                placeholder="Type somethings here..."
                maxLength={30}
                value={this.state.valueSearch}
                onChangeText={(text) => this.setState({ valueSearch: text })}
                onBlur={() => this.setState({ isSearching: false })}
                underlineColorAndroid="transparent"
              />
              <SimpleLineIcons name="magnifier" color="black" size={18} />
            </View>
          ) : (
            <View
              style={[
                {
                  backgroundColor: "white",
                  width: "100%",
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                },
                styles.shadowStyle,
              ]}
            >
              <View
                style={[
                  styles.centerItem,
                  { width: "90%", flexDirection: "row" },
                ]}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>E-COMMERCE PRO</Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ isSearching: true })}
                >
                  <SimpleLineIcons name="magnifier" color="black" size={18} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={{ flex: 1, alignItems: "center" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginBottom: 30 }}>
                <RenderTopic navigation={this.props.navigation} />
                <RenderSale navigation={this.props.navigation} />
                <RenderTrending />
                <RenderTodayPick />
                <RenderJustIn />
                <RenderQC />
                <RenderJustIn />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
