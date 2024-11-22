import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Tiếng Việt", value: "vi" },
  { label: "Tiếng Anh", value: "en" },
];

const settings = () => {
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isRecordingEnabled, setRecordingEnabled] = useState(false);
  const [value, setValue] = useState(null);
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
          <Text style={styles.titleText}>Cài đặt</Text>
        </View>
      </View>

      <View style={styles.settingContainer}>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Giao diện tối</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Chế độ mù màu</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Tuỳ chỉnh giao diện</Text>
        </View>

        <View style={styles.settingRowLanguage}>
          <Text style={styles.settingText}>Ngôn ngữ</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Tiếng Việt"
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />
        </View>

        <View
          style={{ marginBottom: 15, paddingLeft: 20, paddingVertical: 20 }}
        >
          <Text style={styles.settingText}>
            Kết nối với Facebook để sử dụng các chức năng của ứng dụng
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              paddingVertical: 10, // Khoảng cách trên dưới
              paddingHorizontal: 35, // Khoảng cách hai bên
              borderRadius: 10,
              backgroundColor: "#024CAA",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "semibold",
                fontSize: 16,
                letterSpacing: 1.2,
              }}
            >
              Kết nối Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default settings;

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
  settingRowLanguage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    paddingLeft: 22,
  },
  settingText: {
    fontSize: 16,
    color: "#091057",
    fontWeight: "bold",
    marginRight: 10,
    letterSpacing: 1.2,
  },

  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    width: "40%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
