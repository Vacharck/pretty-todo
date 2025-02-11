import { useContext } from "react";
import { FilterContext } from "../../context/filter";
import { TODO_FILTERS } from "../../consts";
import { TodoT } from "../../types";

export function useFilter(){
    const {filter, setFilter} = useContext(FilterContext)

    const filterTodo = ({todo}:{todo:TodoT[]}) => {
        if(filter === TODO_FILTERS.COMPLETED) return [...todo].filter(todo => todo.isCompleted === true)
        
        if(filter === TODO_FILTERS.ACTIVE) return [...todo].filter(todo => todo.isCompleted === false)

        return todo
    }

    return {filter, setFilter, filterTodo}
}