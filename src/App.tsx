import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  /*
  function toggleTodo(selectedTodo: Todo) {
    setTodos((preTodos) => {
      return {
        ...preTodos,
        complete: !selectedTodo.complete,
      };
    });
  } */

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleInput = (addedInput: string) => {
    let newTodos = todos.map((todo) => todo);
    newTodos = newTodos.concat({
      text: addedInput,
      complete: false,
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>

      <AddTodoForm  handleInput={handleInput}/>
    </>
  );
}

export default App;
