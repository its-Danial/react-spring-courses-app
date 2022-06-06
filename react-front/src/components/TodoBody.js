import TodoListItem from "./TodoListItem";

const TodoBody = ({ todosData }) => {
  return (
    <ul className="ml-0 border-2 rounded-lg m-auto">
      {todosData.map((course, index) => (
        <TodoListItem
          key={index}
          id={course.id}
          courseName={course.courseName}
          isChecked={course.checked}
        />
      ))}
    </ul>
  );
};

export default TodoBody;
