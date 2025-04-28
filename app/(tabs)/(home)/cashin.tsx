import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CashIn = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Cash In" }} />
      <Text>CashIn</Text>
    </View>
  );
};

export default CashIn;
