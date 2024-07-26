import { createSlice ,nanoid} from '@reduxjs/toolkit'

//define the initial state
const initialState = {
    todos:[{id:"abc",task:"demo_todo",isDone:false}],
}
//create a slice
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        //addtodo reducer
        addTodo:(state,action)=>{
            const newTodo = {
                id:nanoid(),
                task:action.payload,
                isDone:false,
            }
            state.todos.push(newTodo);
        },
        //deleteTodo reducer
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!=action.payload);
        },
        //markAsDone reducer
        markAsDone:(state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone = true;
                }
            });
        },

    },
});
export const {addTodo,deleteTodo,markAsDone} = todoSlice.actions; //actions export
export default todoSlice.reducer;  //individual reducer export