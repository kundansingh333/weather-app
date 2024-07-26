import {useState} from 'react';
import {useDispatch} from 'react-redux';    
import {addTodo} from '../features/todo/todoSlice';

export default function AddForm(){
    let[task,setTask] = useState("");
    const dispatch=useDispatch();

    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setTask(e.target.value)}/>
                <button >Add</button>
            </form>
            
        </div>
    )
}