import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";

const calling = () => {
  return (
    <LinearGradient
      locations={[0, 0.6, 1]}
      colors={["#EC8305", "rgba(134, 74, 3, 0.77)", "#091057"]}
      style={styles.container}
    >
      <View style={styles.profileContainer}>
        <View style={styles.profileIcon}>
          <FontAwesome name="user" size={50} color="#000" />
        </View>
        <Text style={styles.callerName}>Mẹ</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rejectButton}>
          <FontAwesome
            name="phone"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <FontAwesome
            name="phone"
            size={24}
            color="white"
            style={styles.AcceptIcon}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default calling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff8c00", // Màu nền chuyển từ cam đến tím đậm
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 500,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  callerName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  rejectButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4cd964",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    transform: [{ rotate: "135deg" }],
  },
  AcceptIcon: {
    transform: [{ rotate: "-90deg" }],
  },
});
