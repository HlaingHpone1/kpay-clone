import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const QRLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="qr" />
    </Stack>
  );
};

export default QRLayout;
