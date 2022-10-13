import { View, Text } from "react-native";
import React, { FC } from "react";
import { COLORS, FONTS } from "../constants";

interface Props {
  title: string;
  subtitle: string;
  titleSize: number;
  subtitleSize: number;
}
const NFTTitle: FC<Props> = ({ title, subtitle, titleSize, subtitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subtitleSize,
          color: COLORS.primary,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default NFTTitle;
