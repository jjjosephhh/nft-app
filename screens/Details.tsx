import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { Text, FlatList, SafeAreaView, View } from "react-native";
import {
  DetailsBid,
  DetailsDesc,
  DetailsHeader,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from "../components";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import INFT from "../interfaces/INFT";

const Details: FC<any> = ({ route, navigation }) => {
  const { data } = route.params as { data: INFT };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          handlePress={() => null}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => `details-${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailsDesc data={data} />
              {Boolean(data.bids.length) && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
