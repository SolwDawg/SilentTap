import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  TextInput,
  Image,
} from "react-native";
import React from "react";

import Feather from "@expo/vector-icons/Feather";

type CustomInputTextProps = {
  label: string;
  iconName?: string;
  error?: string;
  password?: boolean;
  onFocus?: () => void;
} & TextInputProps;

const CustomInputText = (props: CustomInputTextProps) => {
  const {
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...restProps
  } = props;

  return (
    <View>
      <View style={styles.inputContainer}>
        <Feather name="user" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Nhập tên người gọi"
          accessibilityLabel="Enter caller's name"
        />
      </View>
    </View>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  // container: {
  //   borderTopLeftRadius: 0,
  //   borderTopRightRadius: 0,
  //   borderBottomRightRadius: 0,
  //   borderBottomLeftRadius: 0,
  //   display: "flex",
  //   maxWidth: 340,
  //   flexDirection: "column",
  //   alignItems: "stretch",
  //   fontFamily: "Roboto, sans-serif",
  //   fontSize: 16,
  //   color: "rgba(9, 16, 87, 0.7)",
  //   fontWeight: "500",
  //   letterSpacing: -0.32,
  // },
  inputContainer: {
    borderRadius: 13,
    borderColor: "rgba(2, 76, 170, 0.44)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 13,
    paddingBottom: 13,
    alignItems: "center",
    flexDirection: "row",
    gap: 19,
  },
  userIcon: {
    width: 16,
    aspectRatio: 0.94,
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
    width: 268,
    flexBasis: "auto",
  },
});
