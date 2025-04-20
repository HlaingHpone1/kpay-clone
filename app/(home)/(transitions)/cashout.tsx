import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CashOut = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Cash Out" }} />
      <Text>CashOut</Text>
    </View>
  );
};

export default CashOut;
