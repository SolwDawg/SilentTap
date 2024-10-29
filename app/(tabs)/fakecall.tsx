import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import HeaderNavigate from "@/components/HeaderNavigate";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import CustomInputText from "@/components/CustomInputText";

const fakecall = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderNavigate title="Cuộc gọi giả" />
      <View style={{ paddingHorizontal: 6 }}>
        <View
          style={{
            height: 160,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="phone" size={75} color="black" />
        </View>
        <Text style={{ fontSize: 18, letterSpacing: 1.05 }}>
          Điều này sẽ làm cho điện thoại của bạn đổ chuông và hiển thị màn hình
          cuộc gọi để có vẻ như người bạn đã chọn đang gọi cho bạn.
        </Text>
        <View
          style={{
            marginTop: 10,
            height: 2,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.54)",
            borderRadius: 10,
          }}
        />

        <Text style={styles.label}>Cuộc gọi đến từ:</Text>

        {/* <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Nhập tên người gọi"
            placeholderTextColor="rgba(194, 195, 203, 1)"
          />
        </View> */}
        <CustomInputText label="email" />
      </View>
    </SafeAreaView>
  );
};

export default fakecall;

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   backgroundColor: "#2B3467",
  // },
  label: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.72,
    marginTop: 10,
  },
  inputContainer: {
    borderRadius: 13,
    borderColor: "rgba(0, 0, 0, 0.37)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    marginTop: 16,
    paddingHorizontal: 34,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  userIcon: {
    width: 18,
    aspectRatio: 0.9,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    letterSpacing: -0.32,
  },
});
