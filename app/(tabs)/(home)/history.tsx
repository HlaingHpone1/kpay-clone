import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const History = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "History",
        }}
      />
      <Text>History</Text>
    </View>
  );
};

export default History;
