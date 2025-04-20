import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { Colors } from "@/constants/Colors";

const TransitionNavbar = () => {
  const router = useRouter();
  const segments = useSegments();

  // Determine the active route
  const activeRoute = segments[segments.length - 1];

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[styles.navItem, activeRoute === "scan" && styles.activeNavItem]}
        onPress={() => router.replace("/scan")}
      >
        <Text
          style={[
            styles.navText,
            activeRoute === "scan" && styles.activeNavText,
          ]}
        >
          Scan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeRoute === "receive" && styles.activeNavItem,
        ]}
        onPress={() => router.replace("/receive")}
      >
        <Text
          style={[
            styles.navText,
            activeRoute === "receive" && styles.activeNavText,
          ]}
        >
          Receive
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeRoute === "manual" && styles.activeNavItem,
        ]}
        onPress={() => router.replace("/manual")}
      >
        <Text
          style={[
            styles.navText,
            activeRoute === "manual" && styles.activeNavText,
          ]}
        >
          Manual
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, activeRoute === "pay" && styles.activeNavItem]}
        onPress={() => router.replace("/pay")}
      >
        <Text
          style={[
            styles.navText,
            activeRoute === "pay" && styles.activeNavText,
          ]}
        >
          Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransitionNavbar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.primary,
    paddingVertical: 10,
  },
  navItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  navText: {
    color: "#ccc",
    fontSize: 16,
  },
  activeNavText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
