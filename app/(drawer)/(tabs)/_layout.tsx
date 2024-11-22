import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const TabStructure = () => {
  const pagesToHideTabBar = ["fakecall", "recording", "chat", "sos"];
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "#DBD3D3",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 90,
          backgroundColor: "#091057",
          display: pagesToHideTabBar.includes(route.name) ? "none" : "flex",
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          marginTop: -10,
          marginBottom: 8,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="sensors"
        options={{
          headerShown: false,
          tabBarLabel: "cứu trợ",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sensors" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fakecall"
        options={{
          headerShown: false,
          tabBarLabel: "gọi giả",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call" size={32} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sos"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: -50,
                width: 100,
                height: 100,
                borderRadius: 99999,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EC8305",
                shadowColor: "#FFC400",
                shadowOffset: { width: 30, height: 20 },
                shadowOpacity: 60,
                elevation: 18,
              }}
            >
              <Text
                style={{ fontSize: 32, color: "white", fontWeight: "bold" }}
              >
                SOS
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarLabel: "Hỗ trợ",
          tabBarActiveTintColor: "#DBD3D3",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="support-agent" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recording"
        options={{
          headerShown: false,
          tabBarLabel: "Camera",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="camera" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabStructure;

const styles = StyleSheet.create({});
