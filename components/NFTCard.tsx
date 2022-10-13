import { Image, View } from "react-native";
import React, { FC } from "react";
import INFT from "../interfaces/INFT";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import CircleButton from "./CircleButton";
import SubInfo from "./SubInfo";
import NFTTitle from "./NFTTitle";
import EthPrice from "./EthPrice";
import RectButton from "./RectButton";

interface Props {
  data: INFT;
}
const NFTCard: FC<Props> = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={() => console.log("in progress")}
        />
        <SubInfo />
      </View>
      <View
        style={{
          marginTop: 16,
          width: "100%",
          padding: SIZES.font,
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => {
              navigation.navigate("Details" as never, { data } as never);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
