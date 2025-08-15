import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Login = () => {
  const router = useRouter();
  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center">Login</Text>
      <Pressable>
        <Text
          className="text-white text-center"
          onPress={() => router.push("/home")}
        >
          Go to Home
        </Text>
      </Pressable>
      <Pressable
        className="bg-blue-500 p-4 rounded"
        onPress={() => router.push("/register")}
      >
        <Text className="text-white text-center">Go to Register</Text>
      </Pressable>
    </View>
  );
};

export default Login;
