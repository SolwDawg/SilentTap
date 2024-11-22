import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "react-native-linear-gradient";

const incoming = () => {
  return (
    <LinearGradient
      locations={[0, 0.6, 1]}
      colors={["#EC8305", "rgba(134, 74, 3, 0.77)", "#091057"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.callerName}>Mẹ</Text>
        <Text style={styles.callDuration}>07:00</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={{ marginTop: 80 }}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="volume-up" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="mic-off" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="videocam-off" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="plus" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="th" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="person-circle-sharp" size={44} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.endCallButton}>
          <FontAwesome
            name="phone"
            size={32}
            color="white"
            style={{ transform: [{ rotate: "135deg" }] }}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default incoming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    marginTop: 150,
    alignItems: "center",
  },
  callerName: {
    fontSize: 48,
    fontWeight: "semibold",
    color: "white",
  },
  callDuration: {
    fontSize: 24,
    fontWeight: "medium",
    color: "white",
    marginTop: 5,
  },
  buttonsContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 0.7,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 40,
  },
  iconButton: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  endCallButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
});
