import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

const TabStructure = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "black",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          display: route.name === "fakecall" ? "none" : "flex",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          marginTop: -10,
          marginBottom: 8,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fakecall"
        options={{
          headerShown: false,
          tabBarLabel: "Cuộc gọi giả",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sos"
        options={{
          tabBarLabel: () => null,
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: -30,
                width: 90,
                height: 90,
                borderRadius: 99999,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#16247d",
              }}
            >
              <Text
                style={{ fontSize: 24, color: "white", fontWeight: "bold" }}
              >
                SOS
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarLabel: "Setting",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recording"
        options={{
          tabBarLabel: "Search",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabStructure;

const styles = StyleSheet.create({});
