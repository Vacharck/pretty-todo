import { createContext, PropsWithChildren, useState } from "react";
import { type SortT, type SortContextT} from "../types";
import { TODO_SORT } from "../consts";

export const SortContext = createContext<SortContextT>(
    {
        sort: TODO_SORT.DATE_ASC,
        setSort: () => {}
    }
)

export function SortProvider({children}:PropsWithChildren) {
    const [sort, setSort] = useState<SortT>(TODO_SORT.DATE_ASC)

    return(
        <SortContext.Provider value={{sort, setSort}}>
            {children}
        </SortContext.Provider>
    )
}