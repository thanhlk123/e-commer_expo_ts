import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class AddressScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View style={styles.headerContent}>
            <Text style={styles.textHeaderContent}>ADD NEW ADDRESS:</Text>
          </View>
          <View style={styles.shadowBox}>
            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>Pin code:</Text>
              <TextInput style={styles.textInput} placeholder="INPUT CODE" />
            </View>

            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>Locality:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="INPUT LOCALITY"
              />
            </View>

            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>City:</Text>
              <TextInput style={styles.textInput} placeholder="INPUT CITY" />
            </View>

            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>State:</Text>
              <TextInput style={styles.textInput} placeholder="INPUT STATE" />
            </View>
          </View>
          <View style={[styles.shadowBox, { marginTop: 15 }]}>
            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>Name:</Text>
              <TextInput style={styles.textInput} placeholder="INPUT NAME" />
            </View>

            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>Address:</Text>
              <TextInput style={styles.textInput} placeholder="INPUT ADDRESS" />
            </View>

            <View style={styles.priceDetail}>
              <Text style={styles.textPrice}>Mobile no:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="INPUT MOBILE NO"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(100, 151, 255)",
            }}
            onPress={() => {
              this.props.navigation.navigate("ConfirmScreen");
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
              }}
            >
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContent: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  textHeaderContent: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textPrice: {
    textAlign: "center",
    fontSize: 20,
    color: "gray",
    marginLeft: 20,
  },
  priceDetail: {
    borderWidth: 0.5,
    borderColor: "gray",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerOption: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  buttonOption: {
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor: 'blue'
  },
  textInput: {
    width: 260,
    height: 50,
  },
  shadowBox: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
