import { View } from "react-native";
import React, { FC } from "react";
import { assets } from "../constants";
import ImageCmp from "./ImageCmp";

const people = [assets.person02, assets.person03, assets.person04];
const People: FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {people.map((person, index) => {
        return <ImageCmp imgUrl={person} index={index} key={person} />;
      })}
    </View>
  );
};

export default People;
