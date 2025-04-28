import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="bank" />
      <Stack.Screen name="billpayment" />
      <Stack.Screen name="cashin" />
      <Stack.Screen name="cashout" />
      <Stack.Screen name="donation" />
      <Stack.Screen name="foodanddrink" />
      <Stack.Screen name="giftcard" />
      <Stack.Screen name="history" />
      <Stack.Screen name="hotel" />
      <Stack.Screen name="loan" />
      <Stack.Screen name="manual" />
      <Stack.Screen name="miniapp" />
      <Stack.Screen name="mymarket" />
      <Stack.Screen name="mymedicine" />
      <Stack.Screen name="nearby" />
      <Stack.Screen name="pay" />
      <Stack.Screen name="pocketmoney" />
      <Stack.Screen name="quickpay" />
      <Stack.Screen name="receive" />
      <Stack.Screen name="scan" />
      <Stack.Screen name="shop" />
      <Stack.Screen name="topup" />
      <Stack.Screen name="subscription" />
      <Stack.Screen name="taxi" />
      <Stack.Screen name="ticket" />
      <Stack.Screen name="transfer" />
      <Stack.Screen name="travel" />
    </Stack>
  );
};

export default HomeLayout;
