import { getAllTask } from "@/services/taskService";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
const TaskScreen = () => {
  const handleFetchData = async () => {
    await getAllTask()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  const router = useRouter();
  return (
    <View className="flex-1 w-full justify-center items-center">
      <Text className="text-4xl text-center">Task Screen</Text>
      <View className="absolute bottom-6 right-5">
        <Pressable onPress={() => router.push("/(dashboard)/tasks/new")}>
          <Ionicons name="add-circle-sharp" size={60} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskScreen;
