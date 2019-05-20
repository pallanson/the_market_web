export const API_HOSTNAME = 'localhost:5051/'
export const CategoryFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_GROCERIES: 'SHOW_GROCERIES',
    SHOW_CLOTHING: 'SHOW_CLOTHING',
    SHOW_TOYS: 'SHOW_TOYS',
    SHOW_HOME_DECORATIONS: 'SHOW_HOME_DECORATIONS',
    SHOW_BUILDING_MATERIAL: 'SHOW_BUILDING_MATERIAL'
};
export const initialState = {
    currentUser: null,
    cart: [],
    items: {},
    users: {},
    paymentMethods: [],
    vendors: [],
    searchResults: [],
    searchString: '',
    currentCategory: CategoryFilters.SHOW_ALL,
    password: '',
    email: '',
    error: null,
    loggedIn: false,
    token: null
}
