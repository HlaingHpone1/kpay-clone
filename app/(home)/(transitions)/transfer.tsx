import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Transfer = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Transfer" }} />
      <Text>Transfer</Text>
    </View>
  );
};

export default Transfer;
