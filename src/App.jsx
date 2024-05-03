import { useEffect, useState } from 'react';
import './App.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditTodoForm';

export default function App() {
  // State to manage todos
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from local storage on initial render
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return []; // If no todos found in local storage, initialize with an empty array
    return JSON.parse(localValue); // Parse and return todos from local storage
  });

  // Update local storage when todos state changes
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  function addTodo(title) {
    setTodos(currentTodos => {
     // console.log('Todo: ', currentTodos);
      return [
        ...currentTodos,
        { id: uuidv4(), title, completed: false, isEditing: false }, // Add new todo with generated UUID
      ];
    });
  }

  // Function to toggle todo completion status
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {// update state
      return currentTodos.map(todo => { // use map method to map over currentTodos array
        if (todo.id === id) { // check if id of current todo matches id of specified id
          return { ...todo, completed }; // Update completed status of the todo with the specified id to true
        }
        return todo; // if id does not match, return todo unchanged
      });
    });
  }

  const editTodo = (id, newTitle) => {
    // Update the todos state
    setTodos(currentTodos => {
        // Map over the current todos array to create a new array with updated todos
        return currentTodos.map(todo => {
            // Check if the current todo has the same id as the id passed to the function
            if (todo.id === id) {
                // If the id matches, create a new todo object with the updated title and set isEditing to false
                return { ...todo, title: newTitle, isEditing: false };
            }
            // If the id does not match, return the current todo unchanged
            return todo;
        });
    });
};

  

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      // use filter method to create new array that contains todos with id that does not match the id we're deleting
      return currentTodos.filter(todo => todo.id !== id); // Remove the todo with the specified id from the todos array
    });
  }

  return (
    <div className='card'>
    <h1 className='header'>Todo List</h1>
      <TodoForm onSubmit={addTodo} /> 
      {todos.map(todo => (
      <EditTodoForm key={todo.id} editTodo={editTodo} id={todo.id}/> 
      ))}
      <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}


