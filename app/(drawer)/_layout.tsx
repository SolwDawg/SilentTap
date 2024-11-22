import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { SafeAreaView } from "react-native-safe-area-context";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerPosition: "right",
            drawerStyle: {
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
            },
          }}
        >
          <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
          <Drawer.Screen
            name="featureSettings"
            options={{ headerShown: false }}
          />
          <Drawer.Screen name="settings" options={{ headerShown: false }} />
          <Drawer.Screen
            name="notification"
            options={{ headerShown: false }}
          />
        </Drawer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
