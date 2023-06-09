import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  let message;

  if (total === 0 && completed === 0) {
    message = 'Agrega un nuevo TODO';
  } else if (total === completed) {
    message = 'Terminaste los TODOS, eres la posha';
  } else {
    message = `Haz completado ${ completed } de ${ total } TODOS`;
  }

  return (
    <h1 className='TodoCounter'>
      { message }
    </h1>
  );
}

export { TodoCounter };