import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const LifeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="life" />
    </Stack>
  );
};

export default LifeLayout;
