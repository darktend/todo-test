import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos:[],
        selectedTodo: null
    },
    reducers:{
        selectTodo(state,action){
            const selectedTodos = state.todos.find(todo => todo.id === action.payload.id);


                state.selectedTodo=selectedTodos;

        },


        addTodo(state,action) {
            const trimmedText = action.payload.text.trim();
            if (trimmedText.length) {
                state.todos.push({
                    id: new Date().toISOString(),
                    text: trimmedText,
                    description: action.payload.description,
                    completed: false
                });
            }

        },
        removeTodo(state,action){
            state.todos=state.todos.filter(todo=>todo.id !==action.payload.id)
        },
        toggleTodoCompleted(state,action){
            const toggleTodo=state.todos.find(todo=>todo.id === action.payload.id);
            toggleTodo.completed = !toggleTodo.completed;
        }
    }
});

export const {addTodo,removeTodo,toggleTodoCompleted,selectTodo,handleDoubleClick}=todoSlice.actions;

export default todoSlice.reducer;