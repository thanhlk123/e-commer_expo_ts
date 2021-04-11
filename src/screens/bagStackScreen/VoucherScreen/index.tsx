import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styled from "styled-components/native";

const index = () => {
  return (
    <View>
      <Row>
        <TextInput
          style={styles.searchField}
          placeholder={"Please enter voucher code"}
        />

        <Btn color ={"#999999"}>
          <Text>Apply</Text>
        </Btn>
      </Row>
    </View>
  );
};

type StyledProps = {
  color?: string;
};

const styles = StyleSheet.create({
  searchField: {
    flex: 1,
    padding: 12,
  },
});
const Row = styled.View`
  flex-direction: row;
  padding: 12px;
`;

const Btn = styled.TouchableOpacity<StyledProps>`
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

export default index;
