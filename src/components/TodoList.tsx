import { type TodoT } from "../types";
import { Todo } from "./Todo";
import { TodoContext } from "../context/todo";
import { useFilter } from "./hooks/useFilter";
import { useSort } from "./hooks/useSort";
import { useContext } from "react";

export function TodoList(){
    const {todo} = useContext(TodoContext)

    const {filterTodo} = useFilter()
    const {sortTodo} = useSort()
    
    const sortedTodo = sortTodo({todo})
    const filteredTodo = filterTodo({todo: sortedTodo})

    return (
            <ul className="flex flex-wrap place-content-evenly
            gap-5 border-5 border-sky-400 p-5
            font-mono overflow-auto
            ">
                {filteredTodo.map(({
                        id,
                        title,
                        description, 
                        isCompleted,
                        date
                    }:TodoT
                    )=>(
                    <Todo 
                        key={id} 
                        id={id} 
                        title={title} 
                        description={description}
                        isCompleted={isCompleted}
                        date={date}
                    />))}
            </ul> 
    )
}