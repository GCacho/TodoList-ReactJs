import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import "./MainBox.css";

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar Agua', completed: false },
  { text: 'Terminar Curso React', completed: false },
  { text: 'Llorar Amargamente', completed: true },
  { text: 'Llorar Agusto', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [valorEstado, setValorEstado] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const buscarTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valorEstado.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  console.log('Los Usuarios Buscan TODOS de: ' + valorEstado);

  const todoCompleto = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const todoBorrado = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <div className='MainBox'>
        <TodoSearch 
          valorEstado = {valorEstado}
          setValorEstado = {setValorEstado}
        />

        <TodoList>
          {buscarTodos.map(todo => (
            <TodoItem 
              key = { todo.text } 
              texto = { todo.text }
              completed = { todo.completed }
              onComplete = { () => todoCompleto(todo.text) }
              onDelete = { () => todoBorrado(todo.text) }
            />
          ))}
        </TodoList>

        <CreateTodoButton />
        </div>
    </>
  );
}



export default App;