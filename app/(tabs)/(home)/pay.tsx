import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TransitionNavbar from "@/components/TransitionNavbar";
import { Colors } from "@/constants/Colors";

const Pay = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Pay",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
        }}
      />
      <TransitionNavbar />

      <Text>Pay</Text>
    </View>
  );
};

export default Pay;
