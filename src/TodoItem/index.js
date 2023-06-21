import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <CompleteIcon />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.texto}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <DeleteIcon />
      </span>
    </li>
  );
}
export { TodoItem };
