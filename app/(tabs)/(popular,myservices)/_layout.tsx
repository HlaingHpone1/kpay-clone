import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ServicesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(popular)" />
      <Stack.Screen name="(myservices)" />
    </Stack>
  );
};

export default ServicesLayout;
