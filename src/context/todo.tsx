import { createContext, PropsWithChildren, useState } from "react";
import { TodoContextT, TodoT } from "../types";

export const TodoContext = createContext<TodoContextT>({
    todo: [],
    setTodo: () => {}
})

export function TodoProvider({children}:PropsWithChildren) {
    const [todo, setTodo] = useState<TodoT[]>([])

    return(
        <TodoContext.Provider value={{todo, setTodo}}>
            {children}
        </TodoContext.Provider>
    )
}