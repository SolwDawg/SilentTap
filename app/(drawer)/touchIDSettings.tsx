import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import CustomSwitch from "@/components/CustomSwitch";

const touchIDSettings = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);
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
          <Text style={styles.titleText}>Cài đặt TouchID</Text>
        </View>
      </View>

      <View style={styles.settingContainer}>
        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingText}>Vào app bằng TouchID</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "medium",
                color: "#091057",
                letterSpacing: 1.2,
              }}
            >
              Sử dụng TouchID của bạn{"\n"}để truy cập app nhanh{"\n"}hơn
            </Text>
          </View>
          <View style={{paddingRight: 20}}>
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

export default touchIDSettings;

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
