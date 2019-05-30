import { call, put, takeLatest, all } from 'redux-saga/effects'
import { put as putReq, post, get, del } from '../request'
import { Types } from '../actions'
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
    GET_PAYMENT_OPTIONS,
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
    SEARCH,
    LOAD_LOCAL_USER
} = Types

function * login(action) { 
    const res = await post(`user/login`, {
            email,
            password
        })
        const { token, userId } = res.data
        auth.setToken(token, true)
        const userRes = await get(`user/${userId}`)
        const { data: currentUser } = userRes
        auth.setUserInfo(currentUser)
}
function * register(action) { 
    try {
        const registerRes = await post(`user/`, {
            email,
            firstName,
            lastName,
            password
        })
        const { data: currentUser } = registerRes
        const res = await post(`user/login`, {
            email,
            password
        })
        const { token } = res.data
        return {
            ...state,
            token,
            email,
            password,
            currentUser
        }
    } catch (error) {
        return {
            ...state,
            error
        }
    }
}
function * logout(action) { }
function * get_addresses(action) { }
function * add_address(action) { }
function * edit_address(action) {
    const {
        addressId,
        name,
        addressLineOne,
        addressLineTwo,
        city,
        country,
        postcode
    } = action
    try {
        const { currentUser } = state
        await put(`address/${addressId}`, {
            name,
            addressLineOne,
            addressLineTwo,
            city,
            country,
            postcode
        })
        const { data } = await get(`address/user/${currentUser.userId}`)
        return {
            ...state,
            addresses: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
 }
function * remove_address(action) { 
    const { addressId } = action
    try {
        const { currentUser } = state
        await del(`address/user/${addressId}`)
        const { data } = await get(`address/user/${currentUser.userId}`)
        return {
            ...state,
            addresses: [ ...data ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
function * get_cart(action) { 
    try {
        const { data } = await get(`cart`)
        return {
            ...state,
            cart: [ ...data.items ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
function * add_to_cart(action) {
    try {
        await put(`cart/add`, { itemId })
        const { data } = await get(`cart`)
        return {
            ...state,
            cart: [ ...data.items ]
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
 }
function * remove_from_cart(action) { 
    try {
        await put(`cart/remove`, { itemId })
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
function * checkout(action) {
    try {
        const { data: order } = await post(`cart/checkout`, { addressId })
        return {
            ...state,
            order
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
function * get_reviews(action) { }
function * post_review(action) { }
function * edit_review(action) { }
function * remove_review(action) { }
function * update_rating(action) { }
function * add_payment_option(action) { }
function * get_payment_option(action) { }
function * get_payment_options(action) { }
function * edit_payment_option(action) { }
function * delete_payment_option(action) { }
function * get_all_vendors(action) { 
    try {
        const { data: vendors } = await get(`vendor`)
        return {
            ...state,
            vendors
        }
    } catch(error) {
        return {
            ...state,
            error,
        }
    }
}
function * get_vendor(action) { }
function * get_vendor_by_name(action) { }
function * get_store(action) { }
function * create_vendor(action) { }
function * update_vendor(action) { }
function * get_all_items(action) { }
function * get_item(action) { }
function * get_item_by_name(action) { }
function * create_item(action) { }
function * update_item(action) { }
function * delete_item(action) { }
function * set_category(action) { }
function * fetch_user(action) {
    try {
        const res = await get(`user/${userId}`)
        const { data } = res
        return {
            ...state,
            users: {
                ...state.users,
                [userId]: data
            }
        }
    } catch (error) {
        return {
            ...state,
            error
        }
    }
 }

export default function * rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(REGISTER, register),
        takeLatest(LOGOUT, logout),
        takeLatest(GET_ADDRESSES, get_addresses),
        takeLatest(ADD_ADDRESS, add_address),
        takeLatest(EDIT_ADDRESS, edit_address),
        takeLatest(REMOVE_ADDRESS, remove_address),
        takeLatest(GET_CART, get_cart),
        takeLatest(ADD_TO_CART, add_to_cart),
        takeLatest(REMOVE_FROM_CART, remove_from_cart),
        takeLatest(CHECKOUT, checkout),
        takeLatest(GET_REVIEWS, get_reviews),
        takeLatest(POST_REVIEW, post_review),
        takeLatest(EDIT_REVIEW, edit_review),
        takeLatest(REMOVE_REVIEW, remove_review),
        takeLatest(UPDATE_RATING, update_rating),
        takeLatest(ADD_PAYMENT_OPTION, add_payment_option),
        takeLatest(GET_PAYMENT_OPTION, get_payment_option),
        takeLatest(GET_PAYMENT_OPTIONS, get_payment_options),
        takeLatest(EDIT_PAYMENT_OPTION, edit_payment_option),
        takeLatest(DELETE_PAYMENT_OPTION, delete_payment_option),
        takeLatest(GET_ALL_VENDORS, get_all_vendors),
        takeLatest(GET_VENDOR, get_vendor),
        takeLatest(GET_VENDOR_BY_NAME, get_vendor_by_name),
        takeLatest(GET_STORE, get_store),
        takeLatest(CREATE_VENDOR, create_vendor),
        takeLatest(UPDATE_VENDOR, update_vendor),
        takeLatest(GET_ALL_ITEMS, get_all_items),
        takeLatest(GET_ITEM, get_item),
        takeLatest(GET_ITEM_BY_NAME, get_item_by_name),
        takeLatest(CREATE_ITEM, create_item),
        takeLatest(UPDATE_ITEM, update_item),
        takeLatest(DELETE_ITEM, delete_item),
        takeLatest(SET_CATEGORY, set_category),
        takeLatest(FETCH_USER, fetch_user)
    ])
}