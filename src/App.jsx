import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList/TodoList.jsx";
import InputField from "./components/InputField/InputField.jsx";
import {useDispatch} from "react-redux";
import {addTodo, selectTodo} from "./store/todoSlice.js";
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';


function App() {

  const selectedTodo=useSelector(state => state.todos.selectedTodo);
  const [text,setText]=useState('');
  const [description,setDescription] = useState('');
    const dispatch=useDispatch();

    const addTask=()=> {
        dispatch(addTodo({text,description}))
        // dispatch(selectedTodo({select}))
        setText('');
        setDescription('')
    };

const onClose = ()=>{
  dispatch(selectTodo({id:''}));

}


  return (
    <div className="App">
        <Modal open={selectedTodo!=null} onClose={onClose} />

        <InputField
            text={text}
            handleInput={setText}
            description={description}
            handleDescription={setDescription}
            handleSubmit={addTask}
            />
        {/* <Description
           description={description}
           handleDescription={setDescription}
           handleSubmit={addTask}
        /> */}
        <TodoList  />

    </div>
  )
}

export default App
