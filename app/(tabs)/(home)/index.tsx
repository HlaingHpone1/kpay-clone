import { Colors } from "@/constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Popular");
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const router = useRouter();

  const totalBalance = 50000;
  const currencyRateUSD = "1 USD = ";
  const currencyRateMMK = "2094 MMK";

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      {/* Total Balance and Transfer Section*/}
      <View style={styles.topContainer}>
        {/* Total Balance */}
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.balanceText}>e-Wallet Balance (MMK) </Text>
          <TouchableOpacity
            style={styles.balanceContainer}
            onPress={toggleBalanceVisibility}
          >
            {isBalanceVisible ? (
              <Text style={styles.balance}>
                {totalBalance.toLocaleString()}
              </Text>
            ) : (
              <Text style={styles.balance}>******</Text>
            )}
            <Ionicons
              name={isBalanceVisible ? "eye-off" : "eye"}
              size={18}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>

          <Text style={styles.balanceText}>
            Total Balance (MMK):{" "}
            {isBalanceVisible ? `${totalBalance.toLocaleString()}` : "******"}
          </Text>
        </View>

        {/* Currency Rate */}
        <View style={styles.currencyWrapper}>
          <View style={styles.currencyRateContainer}>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.flagIcon}
            />
            <Text style={styles.currencyRateText}>{currencyRateUSD}</Text>
            <Image
              source={{
                uri: "https://pixabay.com/get/g8a141a9ebb054b909134b4cdf55e0aeb214761e45e71feb45069fb8f30275b1af84ceda568c5b8a9f0b2926858109beb67ef2e9cc54532c4317b379c7657be61_1280.jpg",
              }}
              style={styles.flagIcon}
            />
            <Text style={styles.currencyRateText}>{currencyRateMMK}</Text>
          </View>
        </View>

        {/* Transfer */}
        <View style={styles.transferContainer}>
          <TouchableOpacity
            style={styles.transferItem}
            onPress={() => router.navigate("/scan")}
          >
            <Ionicons name="scan" size={24} color="#fff" />
            <Text style={styles.transferText}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.transferItem}
            onPress={() => router.navigate("/transfer")}
          >
            <Ionicons name="swap-horizontal" size={24} color="#fff" />
            <Text style={styles.transferText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.transferItem}
            onPress={() => router.navigate("/cashin")}
          >
            <Ionicons name="cash" size={24} color="#fff" />
            <Text style={styles.transferText}>Cash In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.transferItem}
            onPress={() => router.navigate("/cashout")}
          >
            <Ionicons name="log-out" size={24} color="#fff" />
            <Text style={styles.transferText}>Cash Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Service Section */}
      <View style={styles.bottomContainer}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Popular" && styles.activeTab]}
            onPress={() => setActiveTab("Popular")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Popular" && styles.activeTabText,
              ]}
            >
              Popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "My Services" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("My Services")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "My Services" && styles.activeTabText,
              ]}
            >
              My Services
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        <View style={styles.serviceGrid}>
          {activeTab === "Popular" ? (
            <>
              {/* Popular Tab Icons */}
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/topup")}
              >
                <Ionicons
                  name="phone-portrait-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/receive")}
              >
                <Ionicons
                  name="qr-code-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Receive</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/bank")}
              >
                <Ionicons
                  name="card-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Bank A/C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/history")}
              >
                <Ionicons
                  name="time-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/quickpay")}
              >
                <MaterialCommunityIcons
                  name="motion"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Quick Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/giftcard")}
              >
                <Ionicons
                  name="gift-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Gift Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/billpayment")}
              >
                <Ionicons
                  name="receipt-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Bill Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/miniapp")}
              >
                <Ionicons
                  name="apps-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Mini Apps</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/donation")}
              >
                <Ionicons
                  name="heart-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Donation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/mymedicine")}
              >
                <Ionicons
                  name="medkit-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>My Medicine</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* My Services Tab Icons */}
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/mymarket")}
              >
                <MaterialCommunityIcons
                  name="storefront-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>My Market</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/ticket")}
              >
                <MaterialCommunityIcons
                  name="ticket-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>H20 Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/foodanddrink")}
              >
                <MaterialCommunityIcons
                  name="food-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Food & Drink</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/topup")}
              >
                <Ionicons
                  name="phone-portrait-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/nearby")}
              >
                <Ionicons
                  name="location-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Nearby</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/travel")}
              >
                <Ionicons
                  name="airplane-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Travel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/hotel")}
              >
                <MaterialCommunityIcons
                  name="bed-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Hotels</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/taxi")}
              >
                <MaterialCommunityIcons
                  name="taxi"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Taxi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/shop")}
              >
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Shops</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/subscription")}
              >
                <MaterialCommunityIcons
                  name="credit-card-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Subscriptions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/loan")}
              >
                <MaterialCommunityIcons
                  name="bank-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Loans</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.serviceItem}
                onPress={() => router.navigate("/pocketmoney")}
              >
                <MaterialCommunityIcons
                  name="wallet-outline"
                  size={30}
                  color={Colors.primary}
                />
                <Text style={styles.serviceText}>Pocket Money</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  topContainer: {
    padding: 15,

    height: "28%",
  },
  bottomContainer: {
    padding: 15,

    height: "72%",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",

    overflow: "hidden",
  },
  currencyWrapper: { display: "flex", alignItems: "center" },
  currencyRateContainer: {
    width: "43%",

    marginTop: 8,
    marginBottom: 10,
    padding: 2,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 5,

    backgroundColor: "#f4f4f440",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    color: "#fff",
    marginBottom: 5,
  },
  currencyRateText: {
    color: "#fff",
    fontSize: 11,
  },
  balance: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",

    color: "#fff",
  },
  balanceText: {
    textAlign: "center",

    color: "#fff",
    fontSize: 12,
  },
  icon: {
    marginLeft: 10,
  },
  flagIcon: {
    width: 12,
    height: 12,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  transferContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  transferItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  transferText: {
    marginTop: 5,
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 5,
    marginBottom: 10,

    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: "#aaa",
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  serviceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  serviceItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  serviceText: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.primary,
    textAlign: "center",
  },
});
