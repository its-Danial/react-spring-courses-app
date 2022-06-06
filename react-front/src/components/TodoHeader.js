import { useRef } from "react";
import useApiQuery from "./hooks/use-api-query";

const TodoHeader = () => {
  const { addTodoMutation } = useApiQuery();

  const enteredCourseRef = useRef();

  const onAddHandler = (event) => {
    const courseName = enteredCourseRef.current.value;
    if (event.key === "Enter") {
      console.log(courseName);
      addTodoMutation.mutate({
        courseName,
        isChecked: false,
      });
    }
  };

  return (
    <input
      ref={enteredCourseRef}
      onKeyUp={onAddHandler}
      className={input}
      type="text"
      placeholder="Please enter your course"
    />
  );
};

export default TodoHeader;

const input = `h-8 text-base border-2 
rounded-md p-2 w-full mb-2 
focus:shadow-md & outline-0 focus:border-stone-900`;
