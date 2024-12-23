import { StyleSheet, Image, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Image
          source={require("@/assets/images/real-logo.png")}
          style={{ width: 75, height: 75 }}
        />
      </TouchableOpacity>

      <View style={styles.icon}>
        <FontAwesome name="cog" size={34} color="#111" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    display: "flex",
    marginTop: 20,
    marginBottom: 30,
    width: "100%",
    maxWidth: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
