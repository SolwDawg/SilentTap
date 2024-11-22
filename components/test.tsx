import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
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
import { useFocusEffect } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import HeaderNavigate from "@/components/HeaderNavigate";
import { SafeAreaView } from "react-native-safe-area-context";

const recording = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderNavigate title="Camera" />
      {mode === "qr" ? (
        <Camera
          device={device}
          codeScanner={codeScanner}
          isActive={mode === "qr" && isActive && !photo && !video}
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive && !photo && !video && mode === "camera"}
          photo
          video
          audio
        />
      )}
      {video && (
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
      )}
      {!photo && !video && (
        <>
          <View
            style={{
              position: "absolute",
              right: 10,
              top: 50,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              gap: 30,
            }}
          >
            <Ionicons
              name={flash === "off" ? "flash-off" : "flash"}
              size={30}
              onPress={() =>
                setFlash((curValue) => (curValue === "off" ? "on" : "off"))
              }
              color="white"
            />
            <Ionicons
              name={mode === "camera" ? `qr-code-sharp` : "camera"}
              onPress={() => setMode(mode === "qr" ? "camera" : "qr")}
              size={30}
              color="white"
            />
          </View>

          <View
            style={{
              position: "absolute",
              right: 10,
              top: 50,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <Ionicons
              name={flash === "off" ? "flash-off" : "flash"}
              size={24}
              onPress={() =>
                setFlash((curValue) => (curValue === "off" ? "on" : "off"))
              }
              color="white"
            />
          </View>

          <Pressable
            onPress={onTakePicturePressed}
            onLongPress={onStartRecording}
            style={{
              position: "absolute",
              alignSelf: "center",
              bottom: 50,
              width: 75,
              height: 75,
              backgroundColor: isRecording ? "red" : "white",
              borderRadius: 75,
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default recording;

const styles = StyleSheet.create({});
