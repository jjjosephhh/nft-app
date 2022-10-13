import React, { FC, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
import { COLORS, NFTData } from "../constants";

const Home: FC = () => {
  const [nftData, setNFTData] = useState(NFTData);
  const handleSearch = (value: string) => {
    setNFTData(() => {
      if (!value) return NFTData;
      return NFTData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
