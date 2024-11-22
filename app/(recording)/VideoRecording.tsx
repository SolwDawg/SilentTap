import {
  ActivityIndicator,
  Button,
  Image,
  LogBox,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
  PhotoFile,
  TakePhotoOptions,
  useMicrophonePermission,
  VideoFile,
  useCodeScanner,
} from "react-native-vision-camera";
import { Stack, useFocusEffect, useRouter } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import HeaderNavigate from "@/components/HeaderNavigate";
import { SafeAreaView } from "react-native-safe-area-context";

const VideoRecording = () => {
  LogBox.ignoreLogs([
    "Layout children must be of type Screen", // Thêm thông báo bạn muốn ẩn
  ]);

  const router = useRouter();
  const device = useCameraDevice("back", {
    physicalDevices: [
      "ultra-wide-angle-camera",
      "wide-angle-camera",
      "telephoto-camera",
    ],
  });

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  const { hasPermission, requestPermission } = useCameraPermission();
  const {
    hasPermission: microphonePermission,
    requestPermission: requestMicrophonePermission,
  } = useMicrophonePermission();
  const [isActive, setIsActive] = useState(false);
  const [flash, setFlash] = useState<TakePhotoOptions["flash"]>("off");
  const [isRecording, setIsRecording] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile>();
  const [video, setVideo] = useState<VideoFile>();

  const camera = useRef<Camera>(null);

  const [mode, setMode] = useState("camera");

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => {
        setIsActive(false);
      };
    }, [])
  );

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    if (!microphonePermission) {
      requestMicrophonePermission();
    }
  }, [hasPermission, microphonePermission]);

  const onTakePicturePressed = async () => {
    if (isRecording) {
      camera.current?.stopRecording();
      return;
    }
    const photo = await camera.current?.takePhoto({
      flash,
    });
    setPhoto(photo);
  };

  const onStartRecording = async () => {
    if (!camera.current) {
      return;
    }
    setIsRecording(true);
    camera.current.startRecording({
      flash: flash === "on" ? "on" : "off",
      onRecordingFinished: (video) => {
        console.log(video);
        setIsRecording(false);
        setVideo(video);
      },
      onRecordingError: (error) => {
        console.error(error);
        setIsRecording(false);
      },
    });
  };

  const uploadPhoto = async () => {
    if (!photo) {
      return;
    }

    const result = await fetch(`file://${photo?.path}`);
    const data = await result.blob();
  };

  if (!hasPermission || !microphonePermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found!</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigate title="Camera" />
      {mode === "qr" ? (
        <Camera
          device={device}
          codeScanner={codeScanner}
          isActive={mode === "qr" && isActive && !photo && !video}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 120,
            zIndex: 3, // works on ios
            elevation: 3, // works on android
          }}
        />
      ) : (
        <Camera
          ref={camera}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 120,
          }}
          device={device}
          isActive={isActive && !photo && !video && mode === "camera"}
          photo
          video
          audio
        />
      )}
      {/* {video && (
        <>
          <Video
            style={StyleSheet.absoluteFill}
            source={{ uri: video.path }}
            useNativeControls
            isLooping
          />
        </>
      )}
      {photo && (
        <>
          <Image source={{ uri: photo.path }} style={StyleSheet.absoluteFill} />
          <FontAwesome5
            onPress={() => setPhoto(undefined)}
            name="arrow-left"
            size={25}
            color="white"
            styles={{ position: "absolute", top: 50, left: 30 }}
          />
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              left: 0,
              paddingBottom: 50,
              backgroundColor: "rgba(0,0,0, 0.4)",
            }}
          >
            <Button title="upload" onPress={uploadPhoto} />
          </View>
        </>
      )} */}
      {!photo && !video && (
        <>
          <View
            style={{
              position: "absolute",
              right: 0,
              top: 600,
              bottom: 0,
              left: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                marginHorizontal: 32,
                paddingTop: 15,
              }}
            >
              <TouchableOpacity
                style={[styles.button, styles.defaultButton]}
                onPress={() => router.push("/(recording)/VoiceRecording")}
              >
                <Text style={styles.defaultText}>Ghi âm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.recordButton]}>
                <Text style={styles.defaultText}>Quay phim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.defaultButton]}
                onPress={() => router.push("/(recording)/CameraRecord")}
              >
                <Text style={styles.recordText}>Chụp hình</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recordCircle}>
              <Pressable
                onPress={onTakePicturePressed}
                // onLongPress={onStartRecording}
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: "#FF0000",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default VideoRecording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#091057",
    position: "relative",
    marginTop: 28,
  },
  button: {
    width: 105,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  recordButton: {
    backgroundColor: "#FF0000",
    borderColor: "#fff",
  },
  defaultButton: {
    backgroundColor: "#CFCFCF",
  },
  recordText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  defaultText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  recordCircle: {
    width: 88,
    height: 88,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    marginTop: 47,
    justifyContent: "center",
    alignItems: "center",
  },
});
