import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const sos = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown <= 0) {
      //do something
    }
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Sau 5 giây, hệ thống sẽ gọi cứu trợ.
          {"\n"}
          Địa chỉ sẽ được gửi tới tất cả mọi người trong danh bạ và facebook.
          {"\n\n"}
          Hệ thống tự động ghi âm và tắt màn hình.
          {"\n"}
          Để bật màn hình, vui lòng nhấn phím nguồn 3 lần liên tục.
        </Text>
      </View>
      <View style={styles.countdownContainer}>
        <Text style={styles.countdownText}>{countDown}</Text>
      </View>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
        accessibilityLabel="Huỷ cảnh báo khẩn cấp"
        accessibilityRole="button"
      >
        <Text style={styles.cancelButtonText}>Huỷ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default sos;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 90,
    paddingBottom: 90,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  },
  messageContainer: {
    alignSelf: "stretch",
  },
  messageText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.2,
    color: "#fff",
    textAlign: "center",
  },
  countdownContainer: {
    borderRadius: 100,
    marginTop: 70,
    width: 196,
    height: 196,
    justifyContent: "center",
    alignItems: "center",
  },
  countdownText: {
    fontSize: 96,
    fontWeight: "800",
    letterSpacing: 11.52,
    color: "#fff",
  },
  cancelButton: {
    borderRadius: 10,
    marginTop: 98,
    width: 217,
    maxWidth: "100%",
    paddingVertical: 16,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 2.88,
    color: "#fff",
  },
});
