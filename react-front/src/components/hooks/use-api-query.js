import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  updateAllTodo,
  deleteAllTodo,
} from "../../lib/api";

const useApiQuery = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteAllTodoMutation = useMutation(deleteAllTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });
  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });
  const updateAllTodoMutation = useMutation(updateAllTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  return {
    isLoading,
    isError,
    error,
    data,
    addTodoMutation,
    deleteTodoMutation,
    deleteAllTodoMutation,
    updateTodoMutation,
    updateAllTodoMutation,
  };
};

export default useApiQuery;
