import { View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: Boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2B3467",
      }}
    >
      <AnimatedLottieView
        exiting={ZoomOut.duration(300)}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        autoPlay
        loop={false}
        style={{ width: "100%", height: "100%", maxWidth: 500 }}
        source={require("../assets/lottie/AnimatedIntro.json")}
      />
    </View>
  );
};

export default AnimatedSplashScreen;
