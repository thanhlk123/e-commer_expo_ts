import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

type CheckboxProps = {
  style?: any;
  value: boolean;
  color: string;
  onChange: () => void;
  disabled?: boolean;
};
const Checkbox = ({
  style = {},
  value = false,
  color,
  onChange,
  disabled = false,
}: CheckboxProps) => {
  const [isChecked, setChecked] = useState(value);

  return (
    <Container
      color={value ? "#3b5f8a" : "#fff"}
      style={[styles.defaultStyle, style]}
      onPress={onChange}
      disable={disabled}
    >
      <AntDesign name="check" size={20} color="#fff" />
    </Container>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#3b5f8a",
    alignItems:"center",
    justifyContent:"center"
  },
});

type StyledProps = {
  color?: string;
};

const Container = styled.TouchableOpacity<StyledProps>`
  background-color: ${(props) => props.color};
`;

export default Checkbox;
