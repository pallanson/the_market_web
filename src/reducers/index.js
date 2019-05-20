import { Types } from "../actions"
import { createReducer } from "reduxsauce"
import { initialState } from "../constants"
import {
    login,
    register,
    logout,
    fetchUser
} from './user'
import {
    getAddresses,
    addAddress,
    editAddress,
    removeAddress
} from './address'
import {
    getCart,
    addToCart,
    removeFromCart,
    checkout
} from './cart'
import {
    addPaymentOption,
    getPaymentOption,
    editPaymentOption,
    deletePaymentOption,
} from './payment'
import {
    getReviews,
    postReview,
    editReview,
    removeReview,
    updateRating
} from './review'
import {
    getAllVendors,
    getVendor,
    getVendorByName,
    getStore,
    createVendor,
    updateVendor
} from './vendor'
import {
    getAllItems,
    getItem,
    getItemByName,
    createItem,
    updateItem,
    deleteItem,
} from './item'

const {
    LOGIN,
    REGISTER,
    LOGOUT,
    GET_ADDRESSES,
    ADD_ADDRESS,
    EDIT_ADDRESS,
    REMOVE_ADDRESS,
    GET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT,
    GET_REVIEWS,
    POST_REVIEW,
    EDIT_REVIEW,
    REMOVE_REVIEW,
    UPDATE_RATING,
    ADD_PAYMENT_OPTION,
    GET_PAYMENT_OPTION,
    EDIT_PAYMENT_OPTION,
    DELETE_PAYMENT_OPTION,
    GET_ALL_VENDORS,
    GET_VENDOR,
    GET_VENDOR_BY_NAME,
    GET_STORE,
    CREATE_VENDOR,
    UPDATE_VENDOR,
    GET_ALL_ITEMS,
    GET_ITEM,
    GET_ITEM_BY_NAME,
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    SET_CATEGORY,
    FETCH_USER,
    SEARCH
} = Types

/* Selectors */


/* Reducers */
export const setCategory = (state = initialState, {category}) => ({
    ...state,
    category
})

export const search = (state = initialState, {searchString}) => ({
    ...state,
    searchString
})

/* Connect Reducers to Types */
export default createReducer(initialState, {
    [LOGIN]: login,
    [REGISTER]: register,
    [LOGOUT]: logout,
    [FETCH_USER]: fetchUser,
    [GET_ADDRESSES]: getAddresses,
    [ADD_ADDRESS]: addAddress,
    [EDIT_ADDRESS]: editAddress,
    [REMOVE_ADDRESS]: removeAddress,
    [GET_CART]: getCart,
    [ADD_TO_CART]: addToCart,
    [REMOVE_FROM_CART]: removeFromCart,
    [CHECKOUT]: checkout,
    [GET_REVIEWS]: getReviews,
    [POST_REVIEW]: postReview,
    [EDIT_REVIEW]: editReview,
    [REMOVE_REVIEW]: removeReview,
    [UPDATE_RATING]: updateRating,
    [ADD_PAYMENT_OPTION]: addPaymentOption,
    [GET_PAYMENT_OPTION]: getPaymentOption,
    [EDIT_PAYMENT_OPTION]: editPaymentOption,
    [DELETE_PAYMENT_OPTION]: deletePaymentOption,
    [GET_ALL_VENDORS]: getAllVendors,
    [GET_VENDOR]: getVendor,
    [GET_VENDOR_BY_NAME]: getVendorByName,
    [GET_STORE]: getStore,
    [CREATE_VENDOR]: createVendor,
    [UPDATE_VENDOR]: updateVendor,
    [GET_ALL_ITEMS]: getAllItems,
    [GET_ITEM]: getItem,
    [GET_ITEM_BY_NAME]: getItemByName,
    [CREATE_ITEM]: createItem,
    [UPDATE_ITEM]: updateItem,
    [DELETE_ITEM]: deleteItem,
    [SET_CATEGORY]: setCategory,
    [SEARCH]: search
})