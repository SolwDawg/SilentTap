import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Camera from "@/app/(recording)/CameraRecord";

const recording = () => {
  return <Camera />;
};

export default recording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#091057",
    position: "relative",
  },
  button: {
    width: 105,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  recordButton: {
    backgroundColor: "#FF0000",
    borderColor: "#fff",
  },
  defaultButton: {
    backgroundColor: "#CFCFCF",
  },
  recordText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  defaultText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  recordCircle: {
    width: 88,
    height: 88,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    marginTop: 47,
    justifyContent: "center",
    alignItems: "center",
  },
});
