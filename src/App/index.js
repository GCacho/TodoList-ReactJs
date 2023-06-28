import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import "./App.css";

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Tomar Agua', completed: false },
//   { text: 'Terminar Curso React', completed: false },
//   { text: 'Llorar Amargamente', completed: true },
//   { text: 'Llorar Agusto', completed: true },
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

// Custom Hooks


function App() {

  // *1 Crea los estados de los TODOS con React y procesa el useLocalStorage
  const {
    item: todos, //Renombra el item 
    saveItem: saveTodos,
    loading,
    error, 
  } = useLocalStorage('TODOS_V1', []);
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

  // Guarda los TODOS en un nuevo array y devuelve los completados
  const todoCompleto = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Guarda los TODOS en un nuevo array y devuelve cual borrar
  const todoBorrado = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading = { loading }
      error = { error }
      completedTodos = { completedTodos }
      totalTodos = { totalTodos }
      valorEstado = { valorEstado }
      setValorEstado = { setValorEstado }
      buscarTodos = { buscarTodos }
      todoCompleto = { todoCompleto }
      todoBorrado = { todoBorrado }
    />
  );
}



export default App;