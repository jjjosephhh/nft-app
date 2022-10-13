import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { COLORS, FONTS, SIZES } from "../constants";

interface Props {
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
}
const RectButton: FC<Props> = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        minWidth,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.primary,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
