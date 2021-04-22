import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

type ComponentProps = {
  value: number;
  setValue: any;
};

const CountItemComponent = ({ value, setValue }: ComponentProps) => {
  const [countNumber, setCountNumber] = useState<any>(value);

  useEffect(() => {
    setValue(countNumber);
  }, [countNumber]);
  return (
    <Row>
      <Btn
        onPress={() => {
          if (countNumber) {
            setCountNumber(countNumber - 1);
          }
        }}
        disabled={countNumber === 0}
        color={countNumber === 0 ? "#FAFAFA" : "#D5D5D5"}
      >
        <Text>-</Text>
      </Btn>
      <TextInput
        style={styles.inputField}
        value={value.toString()}
        onChangeText={(text) => setCountNumber(parseInt(text))}
        keyboardType={"numeric"}
      />
      <Btn onPress={() => setCountNumber(countNumber + 1)} color={"#D5D5D5"}>
        <Text>+</Text>
      </Btn>
    </Row>
  );
};

type StyledProps = {
  color?: string;
};

const Btn = styled.TouchableOpacity<StyledProps>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

const Row = styled.View`
  flex-direction: row;
`;
const styles = StyleSheet.create({
  inputField: {
    paddingHorizontal: 12,
    borderColor: "#D5D5D5",
    borderWidth: 0.5,
  },
});
export default CountItemComponent;
