import { Image, ImageSourcePropType } from "react-native";
import React, { FC } from "react";
import { SIZES } from "../constants";

interface Props {
  imgUrl: ImageSourcePropType;
  index: number;
}
const ImageCmp: FC<Props> = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export default ImageCmp;
