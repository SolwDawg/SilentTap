import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  TextInput,
} from "react-native";
import React from "react";

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

  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? "red" : isFocused ? "blue" : "#ccc",
            alignItems: "center",
          },
        ]}
      >
        {/* <Icon
          name={iconName}
          style={{ color: COLORS.darkBlue, fontSize: 22, marginRight: 10 }}
        /> */}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: "blue", flex: 1 }}
          {...props}
        />
        {/* {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: COLORS.darkBlue, fontSize: 22 }}
          />
        )} */}
      </View>
      {/* {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )} */}
    </View>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "gray",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#ccc",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
