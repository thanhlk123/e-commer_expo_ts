import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  topicItemImg: {
    width: 75,
    height: 75,
    borderRadius: 38,
  },
  centerItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  marginL: {
    marginLeft: 15,
  },
  itemTopic: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  topicText: {
    color: "#24588c",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },
  itemTrending: {
    width: width * 0.7,
    height: height * 0.33,
    marginRight: 10,
  },
  trendingTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    width: "100%",
  },
  trendingDetails: {
    fontSize: 9,
    color: "grey",
  },
  trendingImg: {
    width: "100%",
    height: "75%",
  },
  QCItem: {
    width: width * 0.7,
    height: height * 0.27,
    marginRight: 10,
  },
  QCImg: {
    width: "100%",
    height: height * 0.27,
  },
  junsInItem: {
    width: width * 0.5,
    height: height * 0.2,
    marginRight: 10,
  },
  topic: {
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  saleButton: {
    width: width * 0.9,
    height: 0.45 * height,
  },
  renderSaleImg: {
    height: "80%",
    width: "95%",
  },
  renderTrendingContainer: {
    width: width - 6,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#d6d2d2",
    borderRadius: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
  renderTrendingFlatlist: {
    width: "90%",
    height: height * 0.3,
  },
  saleContainers: {
    width: width - 6,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#d6d2d2",
    borderRadius: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
  todayPickContainer: {
    width: width - 6,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#d6d2d2",
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 10,
  },
  justInContainer: {
    width: width - 6,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#d6d2d2",
    borderRadius: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
  QCcontainer: {
    width: width - 6,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#d6d2d2",
    borderRadius: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
});
