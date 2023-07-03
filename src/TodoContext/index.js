import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider( { children } ){
    // *1 Crea los estados de los TODOS con React y procesa el useLocalStorage
  const {
    item: todos, //Renombra el item 
    saveItem: saveTodos,
    loading,
    error, 
  } = useLocalStorage('TODOS_V1', []);
  const [valorEstado, setValorEstado] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const buscarTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valorEstado.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  }

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
        <TodoContext.Provider value= {{
            loading,
            error,
            completedTodos,
            totalTodos,
            valorEstado,
            setValorEstado,
            buscarTodos,
            todoCompleto,
            todoBorrado,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };