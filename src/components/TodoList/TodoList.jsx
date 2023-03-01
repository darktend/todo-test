import TodoItem from "../TodoItem/TodoItem.jsx";
import {useSelector} from "react-redux";
import './TodoList.css';

const TodoList =()=>{
    const todos=useSelector(state => state.todos.todos);
    return(
        <ul>
            {
                todos.map((todo,i)=><TodoItem
                    key={todo.id}
                    // removeTodo={removeTodo}
                    // toggleTodoCompleted={toggleTodoCompleted}
                    {...todo}
                    index={i}
                />)
            }
        </ul>
    )
}

export default TodoList;