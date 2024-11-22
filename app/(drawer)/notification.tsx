import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const notification = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Thông báo");

  const renderContent = () => {
    if (activeTab === "Thông báo") {
      return (
        <ScrollView style={styles.notificationsContainer}>
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={styles.notificationItem}>
              <View style={styles.notificationIcon} />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>
                  Thông báo {index + 1}
                </Text>
                <Text style={styles.notificationText}>
                  Đây là nội dung của thông báo {index + 1}.
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else if (activeTab === "Tin tức") {
      return (
        <ScrollView style={styles.notificationsContainer}>
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={styles.notificationItem}>
              <View style={styles.notificationIcon} />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>
                  Tin tức {index + 1}
                </Text>
                <Text style={styles.notificationText}>
                  Đây là chi tiết của tin tức {index + 1}.
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign
            style={{ fontWeight: "bold" }}
            name="arrowleft"
            size={34}
            color="#DBD3D3"
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Thông báo</Text>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome5
            name="trash"
            style={{ fontWeight: "bold" }}
            size={32}
            color="#DBD3D3"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.settingContainer}>
        {/* Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Thông báo" ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab("Thông báo")}
          >
            <Text style={styles.tabText}>Thông báo</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Tin tức" ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab("Tin tức")}
          >
            <Text style={styles.tabText}>Tin tức</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Mark All */}
        <TouchableOpacity onPress={() => console.log("Marked all as read")}>
          <Text style={styles.markAllText}>Đánh dấu đã đọc tất cả</Text>
        </TouchableOpacity>

        {renderContent()}
      </View>
    </View>
  );
};

export default notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091057",
    padding: 20,
  },
  header: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 9,
    paddingTop: 25,
    alignItems: "center",
    flexDirection: "row",
    gap: 80,
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  backArrow: {
    fontSize: 18,
    color: "#fff",
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  settingContainer: {
    backgroundColor: "#DBD3D3",
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 135,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingLeft: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  settingText: {
    fontSize: 16,
    color: "#091057",
    fontWeight: "bold",
    marginRight: 10,
    letterSpacing: 1.2,
  },
  tabBar: {
    flexDirection: "row",
    marginBottom: 20,
    display: "flex",
    justifyContent: "center",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A7CC7",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10,
    position: "relative",
  },
  activeTab: {
    backgroundColor: "#024CAA",
  },
  tabText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 5,
  },
  badge: {
    backgroundColor: "#FF0000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 31,
    height: 31,
    position: "absolute",
    top: -10,
    right: -10,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  markAllText: {
    color: "#091057",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1.2,
    marginTop: 5,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#002F9E",
    borderRadius: 10,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "rgba(0,0,0,0.7)",
  },
  notificationText: {
    color: "rgba(0,0,0,0.7)",
    fontSize: 14,
    fontWeight: "semibold",
    marginTop: 5,
  },
});
