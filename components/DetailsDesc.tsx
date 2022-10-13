import { View, Text } from "react-native";
import React, { FC, useMemo, useState } from "react";
import INFT from "../interfaces/INFT";
import NFTTitle from "./NFTTitle";
import { COLORS, FONTS, SIZES } from "../constants";
import EthPrice from "./EthPrice";
interface Props {
  data: INFT;
}
const readMoreMax = 100;
const DetailsDesc: FC<Props> = ({ data }) => {
  const shortText = useMemo(
    () => data.description.slice(0, readMoreMax),
    [data.description]
  );
  const [text, setText] = useState(shortText);
  const readMore = useMemo(() => {
    return text.length < data.description.length;
  }, [data.description, text]);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {readMore && "..."}
            <Text
              onPress={() => {
                setText(readMore ? data.description : shortText);
              }}
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
            >
              {readMore ? " Read More" : " Show Less"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
