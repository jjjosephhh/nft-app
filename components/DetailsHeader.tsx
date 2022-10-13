import { View, Text, Image, StatusBar } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import INFT from "../interfaces/INFT";
import CircleButton from "./CircleButton";
import { assets } from "../constants";

interface Props {
  data: INFT;
  navigation: StackNavigationProp<any>;
}
const DetailsHeader: FC<Props> = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <CircleButton
        imgUrl={assets.left}
        right={15}
        top={StatusBar.currentHeight ?? 0 + 10}
        handlePress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default DetailsHeader;
