import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Transfer = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Transfer",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => router.navigate("/history")}>
              <Text
                style={{ color: Colors.white, marginRight: 14, fontSize: 20 }}
              >
                History
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={{ backgroundColor: Colors.primary, padding: 16 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Transfer to Phone Number</Text>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#007BFF"
          />
        </View>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter phone number"
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-circle-outline" size={24} color="#007BFF" />
          </TouchableOpacity>
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transfers */}
      <Text style={styles.sectionTitle}>Recent Transfers</Text>
      <ScrollView horizontal style={styles.tabContainer}>
        <Text style={[styles.tab, styles.activeTab]}>All</Text>
        <Text style={styles.tab}>Family</Text>
        <Text style={styles.tab}>Friends</Text>
        <Text style={styles.tab}>Other</Text>
      </ScrollView>

      {/* Transfer List */}
      <ScrollView style={styles.listContainer}>
        {["Leo", "Kyaw"].map((name, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Ionicons name="person-circle-outline" size={40} color="#007BFF" />
            <Text style={styles.listItemText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    // padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  iconButton: {
    padding: 8,
  },
  nextButton: {
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 16,
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    fontSize: 14,
    color: "#A9A9A9",
    marginRight: 16,
  },
  activeTab: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  listItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#000",
  },
});

export default Transfer;
