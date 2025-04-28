import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MessageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="message" />
    </Stack>
  );
};

export default MessageLayout;
