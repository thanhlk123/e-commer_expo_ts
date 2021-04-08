import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type ScreenMainProps = {
  title?: string;
  icLeft?: string;
  icRight?: string;
  onPressLeft?: any;
  onPressRight?: any;
};

const HeaderComponent = ({
  title,
  icLeft,
  icRight,
  onPressLeft = () => {},
  onPressRight = () => {},
}: ScreenMainProps) => {
  return (
    <View
      style={{
        backgroundColor: "#3b5f8a",
        flexDirection: "row",
        paddingVertical: 14,
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      }}
    >
      {!!icLeft ? (
        <TouchableOpacity onPress={onPressLeft}>
          <AntDesign name="arrowleft" size={28} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
        {title}
      </Text>

      {!!icRight ? (
        <TouchableOpacity onPress={onPressRight}>
          <AntDesign name="search1" size={28} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default HeaderComponent;
