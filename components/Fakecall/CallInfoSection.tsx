import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const CallInfoSection = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="call"
        size={64}
        style={{ marginBottom: 20 }}
        color="black"
      />
      <Text style={styles.infoText}>
        Điều này sẽ làm cho điện thoại của bạn đổ chuông và hiển thị màn hình
        cuộc gọi để có vẻ như người bạn đã chọn đang gọi cho bạn.
      </Text>
    </View>
  );
};

export default CallInfoSection;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 60,
    alignItems: "center",
  },
  callIcon: {
    width: 70,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    letterSpacing: 0.65,
    textAlign: "center",
  },
});
