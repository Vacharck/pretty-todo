import { useId } from "react";
import { type TodoT } from "../types";

export function Todo({ setSelf, ...props }: TodoT & { setSelf: (newTodo?: TodoT) => void }) {
    const todoIsCompletedCheckbox = useId()

    return (
        <li className="todo flex flex-col p-1 place-content-evenly w-40 h-40 hover:rotate-2 border-4 hover:border-sky-400 border-sky-300 rounded-tl-4xl">
            <h2 className="font-extrabold text-2xl overflow-hidden">
                {props.title}
            </h2>
            {props.description && <p className="text-xs overflow-hidden">{props.description}</p>}
            <div>
                {props.isCompleted ? 'Completed: ' : 'Complete: '}
                <input type="checkbox" name="isCompleted" id={todoIsCompletedCheckbox} checked={props.isCompleted}
                    onChange={() => {
                        setSelf({ ...props, isCompleted: !props.isCompleted })
                    }}
                />
            </div>
            {props.date.toDateString()}
            <button
                className="border-1 w-20 place-self-end rounded-2xl border-red-400 hover:bg-red-500"
                onClick={() => {
                    setSelf()
                }}>
                Delete
            </button>
        </li>
    )
}