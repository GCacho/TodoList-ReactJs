import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  let message;

  if (total === 0 && completed === 0) {
    message = 'Agrega un Nuevo TODO';
  } else if (total === completed) {
    message = 'Terminaste los TODOS, Eres La Posha';
  } else {
    message = `Haz Completado ${ completed } de ${ total } TODOS`;
  }

  return (
    <h1 className='TodoCounter'>
      { message }
    </h1>
  );
}

export { TodoCounter };