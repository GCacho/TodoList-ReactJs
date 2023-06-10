import React from 'react';
import './TodoSearch.css'

function TodoSearch({
  valorEstado,
  setValorEstado,
}){
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