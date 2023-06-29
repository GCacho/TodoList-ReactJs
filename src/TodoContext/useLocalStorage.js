import React from "react";

function useLocalStorage(itemName, initialValue){
  // Manda el estado del initialValue
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // useEffect es para la asincronisidad de la app
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Descompone los TODOS en strings para pasarlos al localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  
  // Actualiza el estado de LocalStorage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  // Se manda a *1
  return {
    item, 
    saveItem, 
    loading, 
    error,
  }
}

export { useLocalStorage };

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