import api from "./config/api";

export const getAllTask = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

export const addTasks = async (task: any) => {
  const res = await api.post("/tasks", task);
  return res.data;
};
