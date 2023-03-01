import {useDispatch} from "react-redux";
import {removeTodo,toggleTodoCompleted,selectTodo} from "../../store/todoSlice.js";
import './TodoIte.css';

const TodoItem =({id,completed,text,index,description})=>{
    const dispatch=useDispatch();
    function handleDoubleClick() {
        dispatch(selectTodo({id}));
        }
    return(
        <li>

            <input type='checkbox'
                   defaultChecked={completed}
                   onChange={()=>dispatch(toggleTodoCompleted({id}))}/>
                    <div className="form">
                        <div>
                            <p>ID</p>
                            <p>{index+1}</p>
                        </div>
                        <div>
                            TASK NAME
                            <div onDoubleClick={handleDoubleClick} id="myElement">
                        <span>{text}</span>
                        </div>
                        </div>


                        <span>{description}</span>
                    </div>

            <span className='delete' onClick={()=>dispatch(removeTodo({id}))}>&times;</span>

        </li>
    )
}

export default TodoItem;