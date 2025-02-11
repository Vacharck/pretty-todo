import { useContext, useId } from "react"
import { TodoContext } from "../context/todo"
import { isString } from "./services/type-check"

export function CreateTodo(){
    const {setTodo} = useContext(TodoContext)

    const inputTitle = useId()
    const inputDate = useId()
    const inputDescription = useId()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fields = new FormData(e.currentTarget)

        const id = crypto.randomUUID()
        const title = fields.get(inputTitle) ?? ''
        const tempDate = fields.get(inputDate)
        const date = isString(tempDate)
                        ? new Date(tempDate)
                        : new Date(Date.now())
        const description = fields.get(inputDescription) ?? ''
        const isCompleted = false

        if (isString(title) && isString(description)
            ) 
            {
                setTodo(prevState => [...prevState, {
                    id, 
                    title, 
                    date, 
                    description, 
                    isCompleted
                }])
        }
    }

    return(
        <form className="grid h-48 w-72 grid-cols-2 
        gap-4 p-1 place-content-evenly
        border-4 border-sky-400" onSubmit={handleSubmit} >

            <label htmlFor={inputTitle}>
                Title:
            </label>
            <input className="border-b-2 border-sky-400" name={inputTitle} type="text" />
            
            <label htmlFor={inputDate}>
                Date:
            </label>
            <input className="border-b-2 border-sky-400" name={inputDate} type="date"/>
            
            <label htmlFor={inputDescription}>
                Description:
            </label>
            <input className="border-b-2 border-sky-400" name={inputDescription} type="text"/>
        
            <input className="col-span-2 border-b-2 hover:bg-sky-400 border-sky-400" type="submit" />
        </form>
    )
}