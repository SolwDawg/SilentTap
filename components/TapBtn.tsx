import { PropsWithChildren, useState } from "react";
import { View, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";

type TapBtnProps = PropsWithChildren<{
  onPress?: () => void;
}>;

export const TapBtn: React.FC<TapBtnProps> = ({ onPress }) => {
  const [colorBackground, setColorBackground] = useState("#EB455F");
  const [colorText, setColorText] = useState("#FCFFE7");
  const isActive = useSharedValue(false);

  const changeColorBackground = (color: string) => {
    setColorBackground(color);
  };
  const changeColorText = (color: string) => {
    setColorText(color);
  };

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      runOnJS(changeColorBackground)("#FF0028");
      runOnJS(changeColorText)("#F1FDA0");
      isActive.value = true;
    })
    .onTouchesUp(() => {
      runOnJS(changeColorBackground)("#EB455F");
      runOnJS(changeColorText)("#FCFFE7");
      if (onPress) runOnJS(onPress)();
    })
    .onFinalize(() => {
      isActive.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          backgroundColor: `${colorBackground}`,
          borderRadius: 99999,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            letterSpacing: 0.25,
            color: `${colorText}`,
          }}
        >
          TAP
        </Text>
      </View>
    </GestureDetector>
  );
};
