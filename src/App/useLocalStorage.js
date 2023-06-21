import React from "react";

function useLocalStorage(itemName, initialValue){

    // Descompone los TODOS en strings para pasarlos al localStorage
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    // Manda el estado del parsedItem
    const [item, setItem] = React.useState(parsedItem);
  
    // Actualiza el estado de LocalStorage
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    // Se manda a *1
    return [item, saveItem];
  }

  export { useLocalStorage };