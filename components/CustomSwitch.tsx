import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useState, useEffect } from "react";
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";

const CustomSwitch = ({ activeColor, inActiveColor }: any) => {
  // value for Switch Animation
  const switchTranslate = useSharedValue(0);
  // state for activate Switch
  const [active, setActive] = useState(false);
  // Progress Value
  const progress = useDerivedValue(() => {
    return withTiming(active ? 40 : 0);
  });

  // useEffect for change the switchTranslate Value
  useEffect(() => {
    if (active) {
      switchTranslate.value = 40;
    } else {
      switchTranslate.value = 4;
    }
  }, [active, switchTranslate]);

  // Circle Animation
  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  // Background Color Animation
  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 40],
      [inActiveColor, activeColor]
    );
    return {
      backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setActive(!active);
      }}
    >
      <Animated.View style={[styles.container, backgroundColorStyle]}>
        <Animated.View style={[styles.circle, customSpringStyles]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 33,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "#F2F5F7",
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
  },
});
