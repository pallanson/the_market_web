export const API_HOSTNAME = 'http://ec2-18-130-174-127.eu-west-2.compute.amazonaws.com:5000/'
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
    addresses: [],
    currentItem: [],
    currentStore: [],
    currentReviers: [],
    paymentMethods: [],
    vendors: [],
    searchResults: [],
    searchString: '',
    currentCategory: CategoryFilters.SHOW_ALL,
    password: '',
    email: '',
    loading: false,
    order: null,
    error: null,
    loggedIn: false,
    token: null
}
