import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar: FC<{
  backgroundColor: string;
  barStyle?: string;
  translucent?: boolean;
}> = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} style="auto" {...props} />
  ) : null;
};

export default FocusedStatusBar;
