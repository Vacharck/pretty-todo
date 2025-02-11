import { createContext, PropsWithChildren, useState } from "react";
import { TODO_FILTERS } from "../consts";
import { FilterContextT, FilterT } from "../types";

export const FilterContext = createContext<FilterContextT>(
{
    filter: TODO_FILTERS.ALL,
    setFilter: () => {}
})

export function FilterProvider ({children}:PropsWithChildren) {
    const [filter, setFilter] = useState<FilterT>(TODO_FILTERS.ALL)

    return(
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}