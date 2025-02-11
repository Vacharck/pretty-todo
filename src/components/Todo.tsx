import { useContext, useId } from "react";
import { type TodoT } from "../types";
import { TodoContext } from "../context/todo";

export function Todo({id, title, description, isCompleted, date}:TodoT){
    const todoIsCompletedCheckbox = useId()
    const {setTodo} = useContext(TodoContext)

    return(
        <li className="todo flex flex-col p-1 place-content-evenly
                        w-40 h-40 hover:rotate-2
                        border-4 hover:border-sky-400
                       border-sky-300 rounded-tl-4xl">
            <h2 className="font-extrabold text-2xl overflow-hidden"> 
                {title}
            </h2>
            {description && <p className="text-xs overflow-hidden">{description}</p>}

            <div>
                {isCompleted 
                            ? 'Completed: '
                            : 'Complete: '
                }
                <input 
                type="checkbox" 
                name="isCompleted" 
                id={todoIsCompletedCheckbox} 
                checked={isCompleted}
                onChange={() => {
                    setTodo(prevState => {return prevState.map(todo => {
                        return todo.id === id ? {...todo, isCompleted: !isCompleted} : todo
                    })})
                }}
                />
                
            </div>
            
            
            {date.toDateString()}
            <button 
            className="border-1 w-20 place-self-end rounded-2xl border-red-400 hover:bg-red-500" 
            onClick={() => {
                setTodo(prevState => 
                    {return prevState.filter(todo => todo.id !== id)}
                )}}>
                Delete
            </button>
        </li>
    )
}