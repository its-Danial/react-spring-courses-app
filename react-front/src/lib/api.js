import axios from "axios";

const todosApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const getTodos = async () => {
  const response = await todosApi.get("/api/todos");
  return response.data;
};

export const addTodo = async (todo) => {
  return await todosApi.post("/api/todos", todo);
};

export const updateTodo = async (todo) => {
  return await todosApi.patch(
    `/api/todos/${todo.id}/${todo.isChecked}`,
    todo.isChecked
  );
};
export const updateAllTodo = async (isChecked) => {
  return await todosApi.patch(`/api/todos/check-all/${isChecked}`, isChecked);
};

export const deleteTodo = async (id) => {
  return await todosApi.delete(`/api/todos/${id}`, id);
};
export const deleteAllTodo = async () => {
  return await todosApi.delete(`/api/todos/delete-all`);
};

export default todosApi;
