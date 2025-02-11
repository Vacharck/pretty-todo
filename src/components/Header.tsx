import { Filters } from "./Filters"
import { CreateTodo } from "./CreateTodo"
import { Sort } from "./Sort"

export function Header() {
    return(
        <header className="flex flex-col font-mono place-content-center place-items-center gap-10">
            <h1 className="font-bold text-4xl">
                To-do App
            </h1>
            <CreateTodo/>
            <div className="flex gap-12">
                <Filters/>
                <Sort/>
            </div>    
        </header>
    )
}