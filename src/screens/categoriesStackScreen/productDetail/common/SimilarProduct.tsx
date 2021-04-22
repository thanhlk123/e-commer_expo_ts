import React, {useMemo} from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./stylesCommon";

type MainProps = {
  data: any;
};

const SimilarProduct = ({ data }: MainProps) => {

  const RenderContainer = useMemo(() => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data && data.map((e) => (
          <TouchableOpacity style={{ margin: 5, flex: 1, width: 75 }}>
            <Image
              style={{ width: 75, height: 96 }}
              resizeMode="contain"
              source={e.productImg}
            />
            <View>
              <Text numberOfLines={2} style={{ fontSize: 12 }}>
                [Mã WAXANH22 giảm 15% đơn hàng 150k] Quần xinh đẹp
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "red", fontSize: 12 }}>60.000₫</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }, [data]);

  return (
    <View style={styles.paddingH_10}>
      <View style={{ flexDirection: "row", alignItems:"center" }}>
        <Text style={styles.similarProductText}>Similar Products</Text>
        <TouchableOpacity style={{ width: 100, alignItems:"flex-end" }}>
          <Text style={styles.seeAllText}>
            See All <AntDesign name="right" size={14} color="red" />
          </Text>
        </TouchableOpacity>
      </View>

      {RenderContainer}
    </View>
  );
};

export default SimilarProduct;
