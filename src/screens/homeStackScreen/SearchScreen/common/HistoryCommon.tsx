import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

type MainProps = {
  isExpandHistory: boolean;
  setExpandHistory: (value: boolean) => void;
  data: any
};

const TrendingComponent = ({
  isExpandHistory,
  setExpandHistory,
  data,
}: MainProps) => {
  return (
    <ScrollView>
      {data.length > 0 &&
        data.map((e, i) => {
          if (isExpandHistory || (!isExpandHistory && i < 4))
            return (
              <View key={i.toString()} style={styles.historyItem}>
                <HistoryText padding={10}>{e.keyword}</HistoryText>
              </View>
            );
        })}
      <TouchableOpacity
        style={styles.btnShowMore}
        onPress={() => setExpandHistory(!isExpandHistory)}
      >
        <Text>Hiển thị nhiều hơn</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

type StyledProps = {
  color?: string;
  padding?: number;
};

const HistoryText = styled.Text<StyledProps>`
  padding-left: ${(props) => props.padding}px;
`;

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

export default TrendingComponent;
