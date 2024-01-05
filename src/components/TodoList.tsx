
import { UseAppSelector } from "../store";
import Todo from "./Todo";

const TodoList = () => {
  const { todo, filter } = UseAppSelector((state) => state.todo);
 
 

  const filteredTodoList = () => {
    switch (filter) {
      case 'pending':
        return todo?.filter((item) => !item.isCompleted) || [];
      case 'completed':
        return todo?.filter((item) => item.isCompleted) || [];
      default:
        return todo || [];
    }
  };

  return (
    <div className="border-y p-4 pb-8">
      { filteredTodoList().length > 0 ? filteredTodoList()?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      )): <h1 className="bg-red-400 text-center mt-4 text-white">NO TOD's FOUND!</h1>}
    </div>
  );
};

export default TodoList;
