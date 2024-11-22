import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const chat = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#1C3E8A",
          position: "absolute",
          paddingTop: 20,
          bottom: 0,
          left: 0,
          right: 0,
          top: 100,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tư vấn</Text>
        </View>

        {/* Chat Messages */}
        <View style={styles.chatContainer}>
          <View style={styles.messageContainer}>
            <View style={styles.avatarContainer}>
              <FontAwesome name="user-md" size={32} color="black" />
            </View>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>
                Xin chào, đây là trung tâm cứu trợ{"\n"}
                Hãy nói câu hỏi của bạn chúng tôi sẽ trả lời lại{"\n\n"}
                Xin cảm ơn
              </Text>
            </View>
          </View>

          <View style={styles.userMessageContainer}>
            <View style={styles.userMessageBubble}>
              <Text style={styles.userMessageText}>Xin Chào</Text>
            </View>
            <Text style={styles.statusText}>đã xem</Text>
          </View>
        </View>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="image" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="camera-alt" size={30} color="#fff" />
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Nhắn tin" />
          <TouchableOpacity>
            <MaterialIcons name="send" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#091057",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    paddingLeft: 120,
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  messageBubble: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    maxWidth: "70%",
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
  userMessageContainer: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  userMessageBubble: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    maxWidth: "70%",
  },
  userMessageText: {
    color: "black",
    fontSize: 16,
  },
  statusText: {
    fontSize: 12,
    color: "#8A8A8A",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: "#2A4F9C",
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 8,
    color: "black",
  },
});

export default chat;
