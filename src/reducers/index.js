import Types from "../actions"
import { createReducer } from "reduxsauce"
import { CategoryFilters } from "../actions"

/* Default State */
const initialState = {
    category: CategoryFilters.SHOW_ALL,
    loggedIn: false,
    error: null,
    username: null,
    password: null,
    email: null,
    user: {
        userId: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    },
    vendor: {
        vendorId: 0,
        name: "",
        userId: 0,
    },
    searchString: "",
    searchResults: [],
    item: {
        itemId: 0,
        name: "",
        price: 0,
        description: "",
        rating: 0,
        category: "",
        vendorId: 0
    },
};

/* Selectors */


/* Reducers */
export const login = (state, { username, password }) => {
    return Object.assign({}, state, { username, password })
}

export const logout = (state) => {
    return Object.assign({}, state, { loggedIn: false, user: {
            userId: 0,
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        vendor: {
            vendorId: 0,
            name: "",
            userId: 0,
        }, username: null, email: null, password: null})
}

export const register = (state, {username, email, password}) => {
    return Object.assign({}, state, { username, email, password })
}

export const setCategory = (state, {category}) => {
    return Object.assign({}, state, {category})
}

/* Connect Reducers to Types */
export const reducer = createReducer(initialState, {
    [Types.LOGIN]: login,
    [Types.LOGOUT]: logout,
    [Types.REGISTER]: register,
    [Types.SET_CATEGORY]: setCategory,

})

    setCategory: ["category"],
    searchItem: ["itemName"],
    createVendor: ["name"],
    addItem: ["name", "price", "description", "category"],
    removeItem: ["itemId"],
    addAddress: ["lineOne", "lineTwo", "city", "country", "postcode"],
    removeAddress: ["addressId"],
    addPayment: ["name", "number", "expiration"],
    removePayment: ["paymentId"],
    addReview: ["title", "text", "rating"],