import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className="list">
      {/* Display message if no todos */}
      {todos.length === 0 && 'No Todos'}
      {/* Iterate through todos and render TodoItem component for each todo */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // Pass all properties of todo as props to TodoItem component
            key={todo.id} // Unique key for each TodoItem
            toggleTodo={toggleTodo} // toggle todo completion status
            editTodo={editTodo}
            deleteTodo={deleteTodo} // delete todo
          />
        );
      })}
    </ul>
  );
}

