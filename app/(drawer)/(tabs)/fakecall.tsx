import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import HeaderNavigate from "@/components/HeaderNavigate";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";  
import CustomInputText from "@/components/CustomInputText";
import CallBtn from "@/components/Fakecall/CallBtn";
import CallInfoSection from "@/components/Fakecall/CallInfoSection";

// const fakecall = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <HeaderNavigate title="Cuộc gọi giả" />
//       <View style={{ paddingHorizontal: 6 }}>
//         {/* <View
//           style={{
//             height: 160,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <FontAwesome name="phone" size={75} color="black" />
//         </View>
//         <Text style={{ fontSize: 18, letterSpacing: 1.05 }}>
//           Điều này sẽ làm cho điện thoại của bạn đổ chuông và hiển thị màn hình
//           cuộc gọi để có vẻ như người bạn đã chọn đang gọi cho bạn.
//         </Text>
//         <View
//           style={{
//             marginTop: 10,
//             height: 2,
//             width: "100%",
//             backgroundColor: "rgba(0,0,0,0.54)",
//             borderRadius: 10,
//           }}
//         /> */}
//         {/* <Text style={styles.label}>Cuộc gọi đến từ:</Text> */}

//         {/* <View style={styles.inputContainer}>
//           <Feather name="user" size={24} color="black" />
//           <TextInput
//             style={styles.input}
//             placeholder="Nhập tên người gọi"
//             placeholderTextColor="rgba(194, 195, 203, 1)"
//           />
//         </View> */}
//         {/* <CustomInputText label="email" /> */}
//       </View>
//       {/* <CallBtn /> */}
//     </SafeAreaView>
//   );
// };

// export default fakecall;

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     flex: 1,
//     alignItems: "center",
//   },
//   // label: {
//   //   color: "rgba(0, 0, 0, 1)",
//   //   fontSize: 18,
//   //   fontWeight: "bold",
//   //   letterSpacing: 0.72,
//   //   marginTop: 10,
//   // },
//   // inputContainer: {
//   //   borderRadius: 13,
//   //   borderColor: "rgba(0, 0, 0, 0.37)",
//   //   borderStyle: "solid",
//   //   borderWidth: 1,
//   //   display: "flex",
//   //   marginTop: 16,
//   //   paddingHorizontal: 34,
//   //   paddingVertical: 15,
//   //   flexDirection: "row",
//   //   alignItems: "center",
//   //   gap: 12,
//   // },
//   // userIcon: {
//   //   width: 18,
//   //   aspectRatio: 0.9,
//   // },
//   // input: {
//   //   flex: 1,
//   //   fontSize: 16,
//   //   color: "rgba(0, 0, 0, 1)",
//   //   fontWeight: "500",
//   //   letterSpacing: -0.32,
//   // },
// });

const fakecall = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigate title="Cuộc gọi giả" />
      <View style={styles.content}>
        <CallInfoSection />
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Tên người gọi cần giả:</Text>
          <CustomInputText label="Tên người gọi cần giả:" />
        </View>
        <View
          style={{ width: "100%", height: 120, marginHorizontal: 80 }}
        ></View>
        <View
          style={{
            marginTop: 90,
            alignSelf: "center",
            position: "absolute",
            top: "70%",
          }}
        >
          <CallBtn />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default fakecall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#091057",
  },
  content: {
    width: "100%",
    maxWidth: 380,
    alignItems: "stretch",
    backgroundColor: "#DBD3D3",
    position: "relative",
  },
  inputWrapper: {},
  inputLabel: {},
});
