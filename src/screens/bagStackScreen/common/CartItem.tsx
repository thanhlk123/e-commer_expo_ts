import React from "react";
import { View, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";

type ScreenProps = {
  item?: any;
};
const CartItem = ({ item }: ScreenProps) => {
  return (
    <Container
      style={styles.shadow}
    >
      <Row style ={{paddingHorizontal: 12}}>
        <Image
          source={{
            uri:
              "http://image.vietnamnews.vn/uploadvnnews/Article/2021/3/18/142705_hoa.jpg",
          }}
          style={styles.imgItem}
        />
        <View style={{ paddingVertical: 10, marginLeft: 10 }}>
          <Text>FabAlley Women Gray Classic Fit</Text>
          <Text>Casual Top</Text>
          <Text>Sold by: FunFash</Text>
          <Text color="#c2a959">Only 1 unit in Stock</Text>
          <Text
            style={{ fontWeight: "700", textDecorationLine: "line-through" }}
          >
            $1299
          </Text>
          <Text color="blue">$799</Text>
        </View>
      </Row>
      <View style={styles.separator} />
      <Row style={{ justifyContent: "space-around", paddingVertical: 10 }}>
        <Btn>
          <Text color="#666666"> REMOVE</Text>
        </Btn>
        <View style={styles.horizontalSeparator} />
        <Btn>
          <Text color="#666666"> MOVE TO WISHLIST</Text>
        </Btn>
      </Row>
    </Container>
  );
};

const styles = StyleSheet.create({
  imgItem: {
    width: 60,
    height: 90,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#D5D5D5",
  },
  horizontalSeparator: {
    width: 0.5,
    height: "100%",
    backgroundColor: "#D5D5D5",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

type StyledProps = {
  color?: string;
};

const Container = styled.View<StyledProps>`
    background-color: ${props => props.color || "#ffffff"};
    margin-horizontal: 12px;
    margin-top: 10px
`
const Row = styled.View`
  flex-direction: row;
`;
const Btn = styled.TouchableOpacity``;

const Text = styled.Text<StyledProps>`
  color: ${(props) => props.color || "#000"};
  line-height: 19px;
  font-size: 14px;
`;

export default CartItem;
