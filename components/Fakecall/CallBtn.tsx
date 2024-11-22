import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CallBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Gọi</Text>
    </TouchableOpacity>
  );
};

export default CallBtn;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    alignSelf: "center",
    zIndex: 10,
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.forthColor, 
  },
  buttonText: {
    fontSize: 32,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 3.84,
  },
});
