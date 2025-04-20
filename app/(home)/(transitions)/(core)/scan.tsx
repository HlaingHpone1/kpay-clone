import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TransitionNavbar from "@/components/TransitionNavbar";
import { Colors } from "@/constants/Colors";

const Scan = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Scan",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
        }}
      />
      <TransitionNavbar />
      <Text>SCAN</Text>
    </View>
  );
};

export default Scan;
