import { ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

interface Props {
  imgUrl: ImageSourcePropType;
  handlePress: () => void;
  top?: number;
  right?: number;
}
const CircleButton: FC<Props> = ({ handlePress, imgUrl, top, right }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        top,
        right,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
