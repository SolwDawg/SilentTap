import AnimatedSplashScreen from "@/components/AnimatedSplashScreen";
import { Stack } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Montserrat: Montserrat_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  // if (showAnimatedSplash) {
  //   return (
  //     <AnimatedSplashScreen
  //       onAnimationFinish={(isCancelled) => {
  //         if (!isCancelled) {
  //           setSplashAnimationFinished(true);
  //         }
  //       }}
  //     />
  //   );
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="(recording)" options={{ headerShown: false }} />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
