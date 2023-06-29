import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch(){
  
  const {
    valorEstado,
    setValorEstado,
  } = React.useContext(TodoContext);

  return(
      <input 
        className="TodoSearch" 
        placeholder="Buscar..." 
        value={ valorEstado }
        onChange={(event) => {
          setValorEstado(event.target.value);
        }}
      />
  );
}

export { TodoSearch }