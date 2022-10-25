import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('@iamtheluiz/todo-list-test')

    if (storage !== null) {
      setTodos(JSON.parse(storage))
    } else {
      localStorage.setItem('@iamtheluiz/todo-list-test', JSON.stringify(todos))
    }
  }, [])

  function toggleTodoState(id) {
    let newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })
    
    setTodos(newTodoList)
    storageTodos(newTodoList)
  }

  function addNewTodo(todoData) {
    if (todoData.name !== null && todoData.completed !== null) {
      const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
      const { name, completed } = todoData;

      const newTodoList = [...todos, {
        id,
        name,
        completed
      }]
      setTodos(newTodoList)
      storageTodos(newTodoList)
    }
  }

  function storageTodos(todos) {
    localStorage.setItem('@iamtheluiz/todo-list-test', JSON.stringify(todos))
  }

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      addNewTodo,
      toggleTodoState
    }}>
      {children}
    </TodoContext.Provider>
  );
};

function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}

export { TodoProvider, useTodo };