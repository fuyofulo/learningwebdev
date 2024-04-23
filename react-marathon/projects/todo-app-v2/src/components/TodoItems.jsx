
import TodoItem from "./TodoItem";

const TodoItems = ({ TodoItems }) => {
  return (
    <>
      <div class="items-container">
        <TodoItem todoName="Buy milk" todoDate="22/4/24"></TodoItem>
        <TodoItem todoName="Go to college" todoDate="22/4/24"></TodoItem>
      </div>
    </>
  );
};

export default TodoItems;
