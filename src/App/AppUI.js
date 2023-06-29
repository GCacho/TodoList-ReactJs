import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';


function AppUI() {
    const {
      loading,
      error,
      buscarTodos,
      todoCompleto,
      todoBorrado,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <>
          <TodoCounter />
          <div className='MainBox'>
            <TodoSearch />
              <TodoList>
              { loading && (
                <>
                  <TodosLoading /> 
                  <TodosLoading /> 
                  <TodosLoading /> 
                </>
              )
              }
              { error && <TodosError /> }
              {( !loading && buscarTodos.length === 0 ) && <EmptyTodos /> }

              { buscarTodos.map(todo => (
                <TodoItem 
                  key = { todo.text } 
                  texto = { todo.text }
                  completed = { todo.completed }
                  onComplete = { () => todoCompleto(todo.text) }
                  onDelete = { () => todoBorrado(todo.text) }
                />
              )) }
            </TodoList>
    
            <CreateTodoButton 
              setOpenModal = { setOpenModal }
            />

            { openModal && (
              <Modal>
                La funcionalidad de Agregar TODOS
              </Modal>
            )}
          
            </div>
        </>
    );
};

export { AppUI };