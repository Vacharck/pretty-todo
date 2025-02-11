import { SORT_BUTTONS } from "../consts"
import { type SortT } from "../types"
import { useSort } from "./hooks/useSort"

export function Sort(){
    const {sort, setSort} = useSort()
    
        function handleClick(sort:SortT){
            setSort(sort)
        }   
    
        return(
            <section>
                <h2 className="font-bold text-2xl">
                    Sort by:
                </h2>
                <ul>
                    {Object.entries(SORT_BUTTONS).map(([key, {literal, href}]) => {
                        const isSelected = key === sort
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
                                    //Prevents reload but doesn't update url
                                    handleClick(key as SortT)
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