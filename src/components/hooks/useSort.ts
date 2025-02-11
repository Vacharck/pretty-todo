import { useContext } from "react";
import { SortContext } from "../../context/sort";
import { TODO_SORT } from "../../consts";
import { TodoT } from "../../types";

export function useSort(){
    const {sort, setSort} = useContext(SortContext)

    const sortTodo = ({todo}:{todo:TodoT[]}) => {
        if (sort === TODO_SORT.TITLE_ASC) return [...todo].sort((a,b) => a.title.localeCompare(b.title))

        if (sort === TODO_SORT.TITLE_DES) return [...todo].sort((a,b) => b.title.localeCompare(a.title))
        
        if (sort === TODO_SORT.DATE_DES)  return [...todo].sort((a,b) => { 
            return a.date.getDate() - b.date.getDate()
        })
        
        if (sort === TODO_SORT.DATE_ASC) return [...todo].sort((a,b) => {
            return b.date.getDate() - a.date.getDate()
        })

        return todo
    }

    return {sort, setSort, sortTodo}
}