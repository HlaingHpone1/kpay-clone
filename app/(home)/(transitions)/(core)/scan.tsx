import { Stack } from "expo-router";
import TransitionNavbar from "@/components/TransitionNavbar";
import { Colors } from "@/constants/Colors";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import {
  Camera,
  CameraType,
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { StatusBar } from "expo-status-bar";

const Scan = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
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

      <View style={styles.camerContainer}>
        <StatusBar />
        <CameraView style={styles.camera} facing={facing}>
          <View style={styles.overlay}>
            <View style={styles.frame}>
              <Text style={styles.instructionText}>
                Align front of QR code within frame to scan
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: { height: "100%" },
  camerContainer: {
    // margin: 15,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 120,
    alignItems: "center",
    zIndex: 55,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  frame: {
    width: 275,
    height: 275,
    borderWidth: 2,
    borderColor: "#00FFFF",
    backgroundColor: "transparent",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  overlayBottom: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  instructionText: {
    position: "absolute",
    bottom: -60,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
