import { StyleSheet, Image, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Home/Header";
import Map from "@/components/Map";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const index = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/real-logo.png")}
          style={{ width: 75, height: 75 }}
        />
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <View style={styles.icon}>
            <FontAwesome name="cog" size={34} color="#111" />
          </View>
        </Pressable>
      </View>
      <Map haveData={false} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(9,16,87,0.9)",
  },
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
