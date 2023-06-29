import React from "react";
import ReactDOM from 'react-dom';
import './modal.css';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
    const {
        TodosLoading,
      } = React.useContext(TodoContext);
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };