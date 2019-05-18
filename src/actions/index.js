/*
    Action Types
 */
export const SET_CATEGORY = 'SET_CATEGORY'

// Category Constants
export const CategoryFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_GROCERIES: 'SHOW_GROCERIES',
    SHOW_CLOTHING: 'SHOW_CLOTHING',
    SHOW_TOYS: 'SHOW_TOYS',
    SHOW_HOME_DECORATIONS: 'SHOW_HOME_DECORATIONS',
    SHOW_BUILDING_MATERIAL: 'SHOW_BUILDING_MATERIAL'
};

/*
    Action Creators
 */
export const setCategory = setCategory => ({
    type: 'SET_CATEGORY',
    setCategory
});

export function setCategoryFilter(category) {
    return { type: SET_CATEGORY, category }
}