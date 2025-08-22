import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TaskFormScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const isNew = !id || id === "new";

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <Text className="text-2xl font-bold text-gray-800 text-center mb-8 tracking-tight">
        {isNew ? "Add New Task" : "Edit Task"}
      </Text>

      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        className="border border-gray-200 rounded-xl px-5 py-4 mb-5 bg-white shadow-sm text-gray-700 text-base font-medium"
        placeholderTextColor="#9CA3AF"
      />

      <TextInput
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
        className="border border-gray-200 rounded-xl px-5 py-4 mb-5 bg-white shadow-sm text-gray-700 text-base font-medium h-36"
        multiline
        placeholderTextColor="#9CA3AF"
      />

      <TouchableOpacity className="bg-indigo-600 py-4 rounded-xl shadow-md">
        <Text className="text-white text-center font-semibold text-lg tracking-wide">
          {isNew ? "Create Task" : "Update Task"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskFormScreen;
