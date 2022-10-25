import React from 'react';
import { Link } from 'react-router-dom'
import { useTodo } from '../context/todo';

function Todo() {
  const { todos, toggleTodoState } = useTodo();

  function handleChangeTodoState(id) {
    toggleTodoState(id)
  }

  return (
    <main>
      <h1>Todo List</h1>
      <ul>
        {todos.map(({ id, name, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              name={`checkbox_${id}`}
              checked={completed}
              onChange={() => handleChangeTodoState(id)}
            />
            {name}
            &nbsp;
            <Link to={`/todo/${id}`}>Info</Link>
          </li>
        ))}
      </ul>
      <Link to={`/todo/create`}>Criar Todo</Link>
    </main>
  );
}

export default Todo;