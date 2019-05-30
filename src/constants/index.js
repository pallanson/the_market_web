export const API_HOSTNAME = 'http://ec2-18-130-174-127.eu-west-2.compute.amazonaws.com:5000/'
export const CategoryFilters = {
    SHOW_ALL: 'all',
    SHOW_GROCERIES: 'groceries',
    SHOW_CLOTHING: 'clothing',
    SHOW_TOYS: 'toys',
    SHOW_HOME_DECORATIONS: 'decorations',
    SHOW_BUILDING_MATERIAL: 'material'
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
    request: null,
    requestPayload: {},
    loading: false,
    order: null,
    error: null,
    loggedIn: false,
    token: null
}
