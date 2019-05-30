export const API_HOSTNAME = 'http://ec2-18-130-174-127.eu-west-2.compute.amazonaws.com:5000/'
export const CategoryFilters = {
    SHOW_FOOD: 'food',
    SHOW_CLOTHING: 'clothing',
    SHOW_TOYS: 'toys',
    SHOW_MISC: 'misc',
    SHOW_SERVICES: 'services'
};
export const CategoryPrettyNames = {
    SHOW_FOOD: 'Food & Groceries',
    SHOW_CLOTHING: 'Clothing',
    SHOW_TOYS: 'Toys',
    SHOW_MISC: 'Miscellaneous',
    SHOW_SERVICES: 'Services'
}
export const initialState = {
    currentUser: {},
    cart: [],
    items: {},
    users: {},
    addresses: [],
    currentItem: null,
    currentStore: [],
    currentReviews: [],
    currentVendor: null,
    paymentMethods: [],
    currentPaymentMethod: null,
    currentAddress: null,
    vendors: {},
    searchResults: [],
    searchString: '',
    currentCategory: CategoryFilters.SHOW_FOOD,
    password: '',
    email: '',
    request: null,
    requestPayload: {},
    itemsPerPage: 3,
    loading: false,
    order: {
        items: []
    },
    error: null,
    loggedIn: false,
    token: null
}
