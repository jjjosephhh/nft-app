import { View } from "react-native";
import React, { FC } from "react";
import { SIZES } from "../constants";
import People from "./People";
import EndDate from "./EndDate";

const SubInfo: FC = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};

export default SubInfo;
