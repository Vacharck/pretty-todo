export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]:{
        literal: 'All',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]:{
        literal: 'Active',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]:{
        literal: 'Completed',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const

export const TODO_SORT = {
    DATE_ASC: 'date-asc',
    DATE_DES: 'date-des',
    TITLE_ASC: 'title-asc',
    TITLE_DES: 'title-des'
} as const

export const SORT_BUTTONS = {
    [TODO_SORT.DATE_ASC]:{
        literal: 'Date: Oldest to Newest',
        href: `?sort=${TODO_SORT.DATE_ASC}`
    },
    [TODO_SORT.DATE_DES]:{
        literal: 'Date: Newest to Oldest',
        href: `?sort=${TODO_SORT.DATE_DES}`
    },
    [TODO_SORT.TITLE_ASC]:{
        literal: 'Title: A to Z',
        href: `?sort=${TODO_SORT.TITLE_ASC}`
    },
    [TODO_SORT.TITLE_DES]:{
        literal: 'Title: Z to A',
        href: `?sort=${TODO_SORT.TITLE_DES}`
    },
} as const