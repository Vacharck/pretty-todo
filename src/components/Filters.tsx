import { FILTERS_BUTTONS } from "../consts"
import { type FilterT } from "../types"
import { useFilter } from "./hooks/useFilter"

export function Filters(){
    const {filter, setFilter} = useFilter()

    function handleClick(filter:FilterT){
        setFilter(filter)
    }   

    return(
        <section>
            <h2 className="font-bold text-2xl">
                Filters:
            </h2>
            <ul>
                {Object.entries(FILTERS_BUTTONS).map(([key, {literal, href}]) => {
                    const isSelected = key === filter
                    const selectedStyle = isSelected 
                                            ? 'underline'
                                            : ''

                    return (
                        <li key={key}>
                            <a 
                            href={href}
                            className={selectedStyle}
                            onClick={(e) => {
                                e.preventDefault()
                                handleClick(key as FilterT)
                            }}
                            >
                                {literal}
                            </a>    
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}