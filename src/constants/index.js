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
export const AccountOptions = {
    ACCOUNT_INFORMATION: 'account',
    SHOW_PAYMENT: 'payments',
    SHOW_ADDRESSES: 'addresses',
    VENDOR_PAGE: 'vendor',
}
export const AccountPrettyOptions = {
    ACCOUNT_INFORMATION: 'Account Information',
    SHOW_PAYMENT: 'Payment Options',
    SHOW_ADDRESSES: 'Address Options',
    VENDOR_PAGE: 'Vendor Options',
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
    paymentMethods: [],
    vendors: [],
    searchResults: [],
    searchString: '',
    currentCategory: CategoryFilters.SHOW_FOOD,
    password: '',
    email: '',
    request: null,
    requestPayload: {},
    itemsPerPage: 3,
    loading: false,
    order: null,
    error: null,
    loggedIn: false,
    token: null
}
