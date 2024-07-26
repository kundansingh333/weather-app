import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    const clickHandler =((id)=>{
        dispatch(deleteTodo(id));  
       
        
    })
    const handleDone = ((id)=>{
        console.log(id);
        dispatch(markAsDone(id));

    })
    return(
        <>
            <h2>Todos</h2>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span >
                                {todo.task}
                            </span>
                            
                            <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                            <button onClick={()=>handleDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}