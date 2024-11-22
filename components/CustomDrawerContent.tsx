import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const logout = () => {};
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.profileSection}>
        <View
          style={{
            display: "flex",
            alignItems: "stretch",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View style={{ display: "flex", alignItems: "flex-end" }}>
            <Text style={styles.name}>Nguyễn Nhật Hào</Text>
            <Text style={styles.phone}>0123456789</Text>
          </View>
          <TouchableOpacity style={styles.avatar}>
            <MaterialIcons name="person" size={42} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/(drawer)/notification")}
        >
          <Text style={styles.itemText}>Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push("/featureSettings")}
        >
          <Text style={styles.itemText}>Cài đặt ứng dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />
      <View>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Hỗ trợ tư vấn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Tin tức về bạo lực gia đình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Tùy chỉnh các chức năng nhanh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />
      <TouchableOpacity style={styles.item} onPress={logout}>
        <Text style={[styles.itemText]}>Đăng xuất</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E1E1",
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  profileSection: {
    alignItems: "center",
    display: "flex",
    marginVertical: 20,
  },
  avatar: {
    backgroundColor: "rgba(236, 131, 5, 0.6)",
    borderRadius: 50,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#091057",
    marginTop: 5,
    marginBottom: 10,
  },
  phone: {
    fontSize: 14,
    color: "#EC8305",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#EC8305",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#091057",
  },
});
