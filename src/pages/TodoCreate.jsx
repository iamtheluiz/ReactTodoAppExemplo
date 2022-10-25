import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTodo } from '../context/todo';

function TodoCreate() {
  const { addNewTodo } = useTodo();
  const navigate = useNavigate()

  function handleSubmitForm() {
    const name = document.getElementById("name").value
    let completed = document.getElementById("completed").value

    if (completed === "true") {
      console.log('asdda')
      completed = true
    } else {
      console.log('asdda1')
      completed = false
    }
    console.log(completed)

    addNewTodo({ name, completed })
    navigate('/todo')
  }

  return (
    <main>
      <Link to="/todo">Voltar para Lista</Link>
      <h1>Todo Create</h1>
      <input type="text" id="name" placeholder='Nome' /><br />
      <select name="completed" id="completed">
        <option value="false">Em progresso</option>
        <option value="true">Completo</option>
      </select><br />
      <button onClick={handleSubmitForm}>Submit</button>
    </main>
  );
}

export default TodoCreate;