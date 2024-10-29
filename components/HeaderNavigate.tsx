import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type HeaderNavigateProps = {
  title: string;
};

const HeaderNavigate = (props: HeaderNavigateProps) => {
  return (
    <View style={styles.header}>
      <AntDesign
        style={{ fontWeight: "bold" }}
        name="arrowleft"
        size={32}
        color="#FCFFE7"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </View>
  );
};

export default HeaderNavigate;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 9,
    paddingVertical: 18,
    alignItems: "center",
    flexDirection: "row",
    gap: 90,
    backgroundColor: "#2B3467",
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    color: "#FCFFE7",
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
