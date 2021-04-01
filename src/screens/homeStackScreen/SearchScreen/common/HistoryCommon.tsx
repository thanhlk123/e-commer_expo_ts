import React from "react";
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
  data: any;
};

const TrendingComponent = ({
  isExpandHistory,
  setExpandHistory,
  data,
}: MainProps) => {
  return (
    <Container>
      {data.length > 0 &&
        data.map((e, i) => {
          if (isExpandHistory || (!isExpandHistory && i < 4))
            return (
              <BtnItem key={i.toString()}>
                <HistoryText padding={10}>{e.keyword}</HistoryText>
              </BtnItem>
            );
        })}
      <TouchableOpacity
        style={styles.btnShowMore}
        onPress={() => setExpandHistory(!isExpandHistory)}
      >
        <Text>
          {isExpandHistory ? "Hiển thị ít hơn" : "Hiển thị nhiều hơn"}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

type StyledProps = {
  color?: string;
  padding?: number;
};

const Container = styled.ScrollView`
  background-color: #fff;
`;

const HistoryText = styled.Text<StyledProps>`
  padding-left: ${(props) => props.padding}px;
  padding-vertical: 10px;
`;

const BtnItem = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #d5d5d5;
`;

const styles = StyleSheet.create({
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
