import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTodo } from '../context/todo';

function TodoDetails() {
  const params = useParams();
  const [todo, setTodo] = useState(null);

  const { todos } = useTodo();

  useEffect(() => {
    setTodo(todos.filter(todo => todo.id === parseInt(params.id))[0])
  }, [params])

  return (
    <main>
      <Link to="/todo">Voltar para Lista</Link>
      <h1>Todo List</h1>
      {todo && (
        <>
          <strong>ID: </strong> {todo.id}<br />
          <strong>Name: </strong> {todo.name}<br />
          <strong>Completed: </strong> {todo.completed ? 'Completo' : 'Em progresso'}<br />
        </>
      )}
    </main>
  );
}

export default TodoDetails;