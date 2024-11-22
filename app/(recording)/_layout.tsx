import React from "react";
import { Stack } from "expo-router";

const Recordinglayout = () => {
  return (
    <Stack>
      <Stack.Screen name="VideoRecording" options={{ headerShown: false }} />;
      <Stack.Screen name="CameraRecord" options={{ headerShown: false }} />;
      <Stack.Screen name="VoiceRecording" options={{ headerShown: false }} />;
    </Stack>
  );
};

export default Recordinglayout;
