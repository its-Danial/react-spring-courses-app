import TodoBody from "./components/TodoBody";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import useApiQuery from "./components/hooks/use-api-query";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const { data: todos, isLoading } = useApiQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-11">
        <div className="flex justify-center  p-3 border-4 rounded-md w-1/3 shadow-md">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-11">
      <div className="flex-none p-3 border-4 rounded-md w-1/3 shadow-md">
        <TodoHeader />
        <TodoBody todosData={todos ? todos : []} />
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
