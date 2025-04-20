import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TransitionNavbar from "@/components/TransitionNavbar";
import { Colors } from "@/constants/Colors";

const Receive = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Receive",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
        }}
      />
      <TransitionNavbar />

      <Text>Receive</Text>
    </View>
  );
};

export default Receive;
