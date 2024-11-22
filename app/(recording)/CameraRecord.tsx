import {
  ActivityIndicator,
  LogBox,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
  PhotoFile,
} from "react-native-vision-camera";
import { router, Stack, useFocusEffect, useRouter } from "expo-router";
import HeaderNavigate from "@/components/HeaderNavigate";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

const CameraRecord = () => {
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

  const { hasPermission, requestPermission } = useCameraPermission();
  const [isActive, setIsActive] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile>();

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
  }, [hasPermission]);

  const onTakePicturePressed = async () => {
    const photo = await camera.current?.takePhoto();
    setPhoto(photo);
  };

  const uploadPhoto = async () => {
    if (!photo) {
      return;
    }

    const result = await fetch(`file://${photo?.path}`);
    const data = await result.blob();
  };

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found!</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigate title="Camera" />
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
        isActive={isActive && !photo && mode === "camera"}
        photo
        video
        audio
      />
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
      )}
      {!photo && (
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
              <TouchableOpacity
                style={[styles.button, styles.defaultButton]}
                onPress={() => router.push("/(recording)/VideoRecording")}
              >
                <Text style={styles.defaultText}>Quay phim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.recordButton]}>
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

export default CameraRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#091057",
    position: "relative",
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
