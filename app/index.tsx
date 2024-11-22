import { Image, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TapBtn } from "@/components/TapBtn";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  const [countTapBtn, setCountTapBtn] = useState(0);
  const [countToNavigate, setCountToNavigate] = useState(0);

  const handleTapBtn = () => {
    setCountTapBtn(countTapBtn + 1);
  };

  const handleCountNavigate = () => {
    setCountToNavigate(countToNavigate + 1);
    if (countToNavigate == 3) {
      router.push("/(tabs)");
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

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ProgressBarAndroid,
// } from "react-native";

// export default function index() {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.time}>10:36</Text>
//         <View style={styles.statusIcons}>
//           <Text style={styles.icon}>📶</Text>
//           <Text style={styles.icon}>🔋</Text>
//         </View>
//       </View>

//       {/* Logo and Title */}
//       <View style={styles.titleContainer}>
//         <Image
//           source={{ uri: "https://via.placeholder.com/40" }} // Thay bằng link logo
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Silent Tap</Text>
//       </View>

//       {/* Tap Counter */}
//       <View style={styles.counterContainer}>
//         <Text style={styles.counter}>100</Text>
//         <Text style={styles.handIcon}>👋</Text>
//       </View>

//       {/* Progress Bar */}
//       <ProgressBarAndroid
//         styleAttr="Horizontal"
//         indeterminate={false}
//         progress={0.5}
//         color="#6200ee"
//         style={styles.progressBar}
//       />
//       <Text style={styles.level}>Cấp 1/10</Text>

//       {/* Circle */}
//       <View style={styles.circle}></View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.cartIcon}>🛒</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.settingsIcon}>⚙️</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#00154F",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 20,
//   },
//   header: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     alignItems: "center",
//   },
//   time: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   statusIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   icon: {
//     color: "#fff",
//     marginLeft: 10,
//   },
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     marginRight: 10,
//   },
//   title: {
//     color: "#fff",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   counterContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   counter: {
//     color: "#fff",
//     fontSize: 48,
//     fontWeight: "bold",
//   },
//   handIcon: {
//     marginLeft: 10,
//     fontSize: 24,
//     color: "#fff",
//   },
//   progressBar: {
//     width: "80%",
//     height: 10,
//     marginTop: 10,
//   },
//   level: {
//     color: "#fff",
//     fontSize: 16,
//     marginTop: 10,
//   },
//   circle: {
//     width: 200,
//     height: 200,
//     backgroundColor: "gold",
//     borderRadius: 100,
//     elevation: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.5,
//     shadowRadius: 10,
//   },
//   footer: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 40,
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: "#002766",
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cartIcon: {
//     fontSize: 24,
//     color: "#fff",
//   },
//   settingsIcon: {
//     fontSize: 24,
//     color: "#fff",
//   },
// });
