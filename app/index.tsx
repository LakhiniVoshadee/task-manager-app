import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 w-full justify-content-center align-items-center">
      <Pressable
        className="bg-blue-500 p-4 rounded"
        onPress={() => router.push("/login")}
      >
        <Text className="text-4xl">Press Me</Text>
      </Pressable>
    </View>
  );
};

export default Index;
