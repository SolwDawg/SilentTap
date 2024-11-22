import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MemoListItem, { Memo } from "@/components/MemoListItem";

export default function VoiceRecording() {
  const [recording, setRecording] = useState<Recording>();
  const [memos, setMemos] = useState<Memo[]>([]);

  const [audioMetering, setAudioMetering] = useState<number[]>([]);
  const metering = useSharedValue(-100);

  async function startRecording() {
    try {
      setAudioMetering([]);

      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
        undefined,
        100
      );
      setRecording(recording);

      recording.setOnRecordingStatusUpdate((status) => {
        if (status.metering) {
          metering.value = status.metering;
          setAudioMetering((curVal) => [...curVal, status.metering || -100]);
        }
      });
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    if (!recording) {
      return;
    }

    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    metering.value = -100;
    if (uri) {
      setMemos((existingMemos) => [
        { uri, metering: audioMetering },
        ...existingMemos,
      ]);
    }
  }

  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withTiming(recording ? "60%" : "100%"),
    borderRadius: withTiming(recording ? 5 : 35),
  }));

  const animatedRecordWave = useAnimatedStyle(() => {
    const size = withTiming(
      interpolate(metering.value, [-160, -60, 0], [0, 0, -30]),
      { duration: 100 }
    );
    return {
      top: size,
      bottom: size,
      left: size,
      right: size,
      backgroundColor: `rgba(255, 45, 0, ${interpolate(
        metering.value,
        [-160, -60, -10],
        [0.7, 0.3, 0.7]
      )})`,
    };
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />

      <View style={styles.footer}>
        <View>
          <Animated.View style={[styles.recordWave, animatedRecordWave]} />
          <Pressable
            style={styles.recordButton}
            onPress={recording ? stopRecording : startRecording}
          >
            <Animated.View style={[styles.redCircle, animatedRedCircle]} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  footer: {
    backgroundColor: "white",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,

    borderWidth: 3,
    borderColor: "gray",
    padding: 3,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  recordWave: {
    position: "absolute",
    top: -20,
    bottom: -20,
    left: -20,
    right: -20,
    borderRadius: 1000,
  },

  redCircle: {
    backgroundColor: "orangered",
    aspectRatio: 1,
  },
});

// import {
//   ActivityIndicator,
//   LogBox,
//   Pressable,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import {
//   useCameraPermission,
//   useCameraDevice,
//   useMicrophonePermission,
// } from "react-native-vision-camera";
// import { useFocusEffect, useRouter } from "expo-router";
// import { FontAwesome5, Ionicons } from "@expo/vector-icons";
// import HeaderNavigate from "@/components/HeaderNavigate";
// import { SafeAreaView } from "react-native-safe-area-context";

// const VoiceRecording = () => {
//   LogBox.ignoreLogs([
//     "Layout children must be of type Screen", // Thêm thông báo bạn muốn ẩn
//   ]);

//   const router = useRouter();
//   const device = useCameraDevice("back", {
//     physicalDevices: [
//       "ultra-wide-angle-camera",
//       "wide-angle-camera",
//       "telephoto-camera",
//     ],
//   });

//   const { hasPermission, requestPermission } = useCameraPermission();
//   const {
//     hasPermission: microphonePermission,
//     requestPermission: requestMicrophonePermission,
//   } = useMicrophonePermission();
//   const [isActive, setIsActive] = useState(false);

//   useFocusEffect(
//     useCallback(() => {
//       setIsActive(true);
//       return () => {
//         setIsActive(false);
//       };
//     }, [])
//   );

//   useEffect(() => {
//     if (!hasPermission) {
//       requestPermission();
//     }

//     if (!microphonePermission) {
//       requestMicrophonePermission();
//     }
//   }, [hasPermission, microphonePermission]);

//   if (!hasPermission || !microphonePermission) {
//     return <ActivityIndicator />;
//   }

//   if (!device) {
//     return <Text>Camera device not found!</Text>;
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <HeaderNavigate title="Camera" />
//       <>
//         <View
//           style={{
//             position: "absolute",
//             right: 0,
//             top: 600,
//             bottom: 0,
//             left: 0,
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             alignItems: "center",
//           }}
//         >
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 20,
//               marginHorizontal: 32,
//               paddingTop: 15,
//             }}
//           >
//             <TouchableOpacity style={[styles.button, styles.recordButton]}>
//               <Text style={styles.defaultText}>Ghi âm</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.button, styles.defaultButton]}
//               onPress={() => router.push("/(recording)/VideoRecording")}
//             >
//               <Text style={styles.defaultText}>Quay phim</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.button, styles.defaultButton]}
//               onPress={() => router.push("/(recording)/CameraRecord")}
//             >
//               <Text style={styles.recordText}>Chụp hình</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.recordCircle}>
//             <Pressable
//               style={{
//                 width: 80,
//                 height: 80,
//                 backgroundColor: "#FF0000",
//                 borderRadius: 100,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             />
//           </View>
//         </View>
//       </>
//     </SafeAreaView>
//   );
// };

// export default VoiceRecording;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "#091057",
//     position: "relative",
//     marginTop: 28,
//   },
//   button: {
//     width: 105,
//     height: 26,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     borderWidth: 1,
//     marginBottom: 10,
//   },
//   recordButton: {
//     backgroundColor: "#FF0000",
//     borderColor: "#fff",
//   },
//   defaultButton: {
//     backgroundColor: "#CFCFCF",
//   },
//   recordText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   defaultText: {
//     color: "#333",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   recordCircle: {
//     width: 88,
//     height: 88,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 100,
//     marginTop: 47,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
