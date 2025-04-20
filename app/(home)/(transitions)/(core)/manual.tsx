import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import TransitionNavbar from "@/components/TransitionNavbar";
import { Colors } from "@/constants/Colors";

const Manual = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Manual",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
        }}
      />
      <TransitionNavbar />

      <Text>Manual</Text>
    </View>
  );
};

export default Manual;
