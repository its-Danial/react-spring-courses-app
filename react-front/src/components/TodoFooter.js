import { useState } from "react";
import useApiQuery from "./hooks/use-api-query";

const TodoFooter = () => {
  const { updateAllTodoMutation, deleteAllTodoMutation } = useApiQuery();

  const [checkAllState, setCheckAllState] = useState(false);

  const onDeleteAllHandler = () => {
    if (checkAllState) {
      deleteAllTodoMutation.mutate();
    }
    setCheckAllState(false);
  };

  const onCheckAllHandler = (event) => {
    setCheckAllState((prev) => !prev);
    updateAllTodoMutation.mutate(!checkAllState);
  };

  return (
    <div className="h-10 leading-10 pl-2 mt-2">
      <input
        onChange={onCheckAllHandler}
        checked={checkAllState}
        value={checkAllState}
        className="align-middle mr-3 ml-0 relative accent-black w-4 h-4 cursor-pointer"
        type="checkbox"
      />
      {/* completed {state.filter((course) => course.isChecked).length}/ all{" "}
      {state.length} */}
      <button className={btn} onClick={onDeleteAllHandler}>
        Remove Checked
      </button>
    </div>
  );
};

export default TodoFooter;

const btn = `float-right float-b rounded-md bg-black text-white 
hover:text-black hover:bg-slate-300 text-sm cursor-pointer 
shadow-lg px-3 py-1 mt-2`;
