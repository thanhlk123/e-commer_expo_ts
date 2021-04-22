import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  productImg: {
    width: "100%",
    height: 250,
  },
  thumnailImg: {
    width: 100,
    height: 128,
  },
  mar_5: {
    margin: 5,
  },
  w_100: {
    width: "100%",
  },
  mb_10: {
    marginBottom: 10,
  },
  productNameText: {
    fontWeight: "400",
    fontSize: 28,
  },
  commonContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  promotionPriceText: {
    color: "red",
    fontSize: 20,
    fontWeight: "400",
    paddingRight: 10,
  },
  costPriceText: {
    textDecorationLine: "line-through",
    color: "gray",
    fontSize: 20,
  },
  similarProductText: {
    fontWeight: "500",
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },
  seeAllText: {
    fontSize: 14,
    color: "red",
    paddingBottom: 3,
  },
  bottomBar: {
    paddingVertical: 16,
  },
  gradienView: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  hiddenView: {
    height: 100,
    overflow: "hidden",
  },
  paddingH_10: {
    paddingHorizontal: 10,
  },
  bottomBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flex: 1,
  },
  btn_popUp: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  contentPopup: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 20,
  },
});
