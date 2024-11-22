import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import CustomSwitch from "@/components/CustomSwitch";

const featureSettings = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isRecordingEnabled, setRecordingEnabled] = useState(false);
  const [isEmergencyEnabled, setEmergencyEnabled] = useState(false);
  const router = useRouter();

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
          <Text style={styles.titleText}>Chức năng</Text>
        </View>
      </View>

      <View style={styles.settingContainer}>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Nhấn giữ nút nguồn để{"\n"}gửi vị trí
          </Text>
          <View style={{ paddingRight: 20 }}>
            <CustomSwitch
              activeColor={"#00A700"}
              inActiveColor="rgba(0, 0, 0, 0.6)"
            />
          </View>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Bấm 2 lần giảm âm lượng{"\n"}để ghi âm
          </Text>
          <View style={{ paddingRight: 20 }}>
            <CustomSwitch
              activeColor={"#00A700"}
              inActiveColor="rgba(0, 0, 0, 0.6)"
            />
          </View>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>
            Gọi khẩn cấp khi có tác{"\n"}động mạnh
          </Text>
          <View style={{ paddingRight: 20 }}>
            <CustomSwitch
              activeColor={"#00A700"}
              inActiveColor="rgba(0, 0, 0, 0.6)"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default featureSettings;

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
    gap: 90,
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
    paddingTop: 73,
    paddingHorizontal: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 135,
    paddingLeft: 20,
  },
  settingRow: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
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
});
