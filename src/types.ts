import { type TODO_FILTERS, type TODO_SORT } from "./consts"

export type TodoT = {
    id: string,
    title: string,
    description?: string
    isCompleted: boolean
    date: Date
}

export type TodoContextT = {
    todo: TodoT[]
    setTodo: React.Dispatch<React.SetStateAction<TodoT[]>>
}

export type FilterT = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type FilterContextT = {
    filter: FilterT
    setFilter: React.Dispatch<React.SetStateAction<FilterT>>
}

export type SortT = typeof TODO_SORT[keyof typeof TODO_SORT]

export type SortContextT = {
    sort: SortT
    setSort: React.Dispatch<React.SetStateAction<SortT>>
}