import { Image, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TapBtn } from "@/components/TapBtn";
import { useState } from "react";

export default function Index() {
  const [countTapBtn, setCountTapBtn] = useState(0);
  const [countToNavigate, setCountToNavigate] = useState(0);

  const handleTapBtn = () => {
    setCountTapBtn(countTapBtn + 1);
  };

  const handleCountNavigate = () => {
    setCountToNavigate(countToNavigate + 1);
    if (countToNavigate == 3) {
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#2B3467",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Pressable onPress={handleCountNavigate}>
        <Image source={require("../assets/images/react-logo.png")} />
      </Pressable>
      <View>
        <Text>Một cái chạm nhỏ</Text>
        <Text>Một tín hiệu to</Text>
      </View>
      <TapBtn onPress={handleTapBtn} />
      <Text>{countTapBtn}</Text>
    </SafeAreaView>
  );
}
