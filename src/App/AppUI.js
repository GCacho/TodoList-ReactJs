import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    valorEstado,
    setValorEstado,
    buscarTodos,
    todoCompleto,
    todoBorrado,
}){
    return (
        <>
          <TodoCounter 
            completed={completedTodos} 
            total={totalTodos} 
          />
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
};

export { AppUI };