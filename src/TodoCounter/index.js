import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  let message;

  if (totalTodos === 0 && completedTodos === 0) {
    message = 'Agrega un Nuevo TODO';
  } else if (totalTodos === completedTodos) {
    message = 'No Tienes TODOS Pendientes';
  } else {
    message = `Haz Completado ${ completedTodos } de ${ totalTodos } TODOS`;
  }

  return (
    <h1 className='TodoCounter'>
      { message }
    </h1>
  );
}

export { TodoCounter };