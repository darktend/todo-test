import  './Modal.css';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {toggleTodoCompleted} from "../../store/todoSlice.js";

const Modal = ({onClose,open=false})=>{
  const dispatch=useDispatch();
  const selectedTodo=useSelector(state => (state.todos.selectedTodo??{}));
    return(
        <dialog className="modal" open={open}>
          <div className="modal-header">
    <h3 className="modal-title">{selectedTodo.text}</h3>

    <button className="close-button">&times;</button>
  </div>
  <div className="modal-body">
    <p>{selectedTodo.description}</p>
  </div>
  <div className="modal-footer">
    <p > Status: {selectedTodo.completed ? "Done" : "Don't done"}</p>

  </div>
  <button onClick={onClose}>Close</button>
</dialog>
    )
};

export default Modal;