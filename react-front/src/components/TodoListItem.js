import useApiQuery from "./hooks/use-api-query";

const TodoListItem = (props) => {
  const { deleteTodoMutation, updateTodoMutation } = useApiQuery();

  const onCheckHandler = (event) => {
    updateTodoMutation.mutate({
      id: props.id,
      isChecked: event.target.checked,
    });
  };

  const onDeleteHandler = (event) => {
    deleteTodoMutation.mutate(props.id);
    // console.log(props.index);
  };

  return (
    <li className="list-none pr-1 border-b-2 p-2 h-11 hover:bg-gray-400">
      <label className="float-left cursor-pointer">
        <input
          className="align-middle mr-3 relative accent-black w-4 h-4"
          type="checkbox"
          onChange={onCheckHandler}
          checked={props.isChecked}
        />
        <span className="text-md">{props.courseName}</span>
      </label>
      <button onClick={onDeleteHandler} className={btn}>
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;

//Styles

const btn =
  "float-right rounded-md bg-black text-white hover:text-black hover:bg-slate-300 text-sm cursor-pointer shadow-lg px-3 py-1 mb-1 mt-0";
