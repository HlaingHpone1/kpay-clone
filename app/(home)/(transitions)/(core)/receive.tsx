import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React, { useRef } from "react";
import { Stack } from "expo-router";
import TransitionNavbar from "@/components/TransitionNavbar";
import { Colors } from "@/constants/Colors";
import QRCode from "react-native-qrcode-svg";
import * as FileSystem from "expo-file-system";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { SvgXml } from "react-native-svg";

const Receive = () => {
  const viewShotRef = useRef<ViewShot | null>(null);

  const saveQRCode = async () => {
    try {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (!permission.granted) {
        Alert.alert(
          "Permission required",
          "Please allow access to media library."
        );
        return;
      }

      if (viewShotRef.current) {
        if (viewShotRef.current && viewShotRef.current.capture) {
          const uri = await viewShotRef.current.capture();
          if (!uri) {
            Alert.alert("Error", "Failed to capture QR Code.");
            return;
          }
          const asset = await MediaLibrary.createAssetAsync(uri);
          await MediaLibrary.createAlbumAsync("QR Codes", asset, false);
          Alert.alert("Success", "QR Code saved to gallery!");
        } else {
          Alert.alert("Error", "QR Code reference is not available.");
        }
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while saving the QR Code.");
      console.error(error);
    }
  };

  return (
    <View style={style.container}>
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

      <View style={style.qrBox}>
        <Text style={style.qrName}>U Hlaing Hpone (******2767)</Text>
        <Text style={style.qrText}>Scan to pay me</Text>

        <View style={style.qrCode}>
          <ViewShot
            ref={viewShotRef}
            options={{ format: "png", quality: 1 }}
            style={{
              backgroundColor: Colors.white,
              borderRadius: 7,
              padding: 15,
            }}
          >
            <QRCode
              value="https://github.com/HlaingHpone1?tab=repositories"
              size={180}
              color="black"
              backgroundColor="white"
            />
          </ViewShot>
        </View>
        <Button title="Save QR Code" onPress={saveQRCode} />
      </View>
    </View>
  );
};

export default Receive;

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
  qrCode: { flex: 1, alignItems: "center" },
  qrBox: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,

    height: "50%",

    borderRadius: 7,
    backgroundColor: Colors.white,
  },
  qrName: {
    marginBottom: 10,

    textTransform: "uppercase",
    fontSize: 16,

    color: "#777",
  },
  qrText: {
    textAlign: "center",
  },
});
