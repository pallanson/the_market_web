import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import { put as putReq, post, get, del } from '../request'
import { default as Actions,  Types } from '../actions'
import {
    makeSelectCurrentUser,
    makeSelectAddresses,
    makeSelectItems,
    makeSelectPaymentMethods,
    makeSelectVendors,
    makeSelectUsers
} from '../selectors'
import auth from '../utils/auth'
const {
    apiSuccess,
    getAllItems,
    apiFailure,
    apiRequest,
    clearError
} = Actions
const {
    LOGIN,
    REGISTER,
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
    FETCH_USER
} = Types

function * login(action) {
    yield put(apiRequest('POST: user/login', action))
    const { email, password } = action
    try {
        const res = yield call(post, `user/login`, {
            email,
            password
        })
        const { token, userId } = res.data
        auth.setToken(token, true)
        const userRes = yield call(get, `user/${userId}`)
        const { data: currentUser } = userRes
        auth.setUserInfo(currentUser)
        
        yield put(apiSuccess({
            currentUser,
            email,
            loggedIn: true,
            token
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * register(action) {
    yield put(apiRequest('POST: user', action))
    const { email, firstName, lastName, password } = action
    try {
        const registerRes = yield call(post, `user`, {
            email,
            firstName,
            lastName,
            password
        })
        const { data: currentUser } = registerRes
        const res = yield call(post, `user/login`, {
            email,
            password
        })
        const { token } = res.data
        auth.setToken(token, true)
        auth.setUserInfo(currentUser)
        
        yield put(apiSuccess({
            token,
            loggedIn: true,
            email,
            password,
            currentUser
        }))
    } catch (error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_addresses(action) {
    try {
        const currentUser = yield select(makeSelectCurrentUser)
        yield put(apiRequest(`GET: address/user/${currentUser.userId}`, action))
        const { data } = yield call(get, `address/user/${currentUser.userId}`)
        
        yield put(apiSuccess({
            addresses: [ ...data ]
        }))
    } catch(error) {
        
        yield put(apiFailure(error.response.data.message))
    }
}
function * add_address(action) {
    yield put(apiRequest('POST: address/add', action))
    const {
        name,
        addressLineOne,
        addressLineTwo,
        city,
        country,
        postcode
    } = action
    try {
        const addresses = yield select(makeSelectAddresses)
        const { data } = yield call(post, `address/add`, {
            name,
            addressLineOne,
            addressLineTwo,
            city,
            country,
            postcode
        })
        
        yield put(apiSuccess({
            addresses: [
                ...addresses,
                data
            ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
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
    yield put(apiRequest(`PUT address/${addressId}`, action))
    try {
        const currentUser = yield select(makeSelectCurrentUser)
        yield call(putReq, `address/${addressId}`, {
            name,
            addressLineOne,
            addressLineTwo,
            city,
            country,
            postcode
        })
        const { data } = yield call(get, `address/user/${currentUser.userId}`)
        
        yield put(apiSuccess({
            addresses: [ ...data ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
 }
function * remove_address(action) {
    const { addressId } = action
    try {
        const currentUser = yield select(makeSelectCurrentUser)
        yield put(apiRequest(`GET: address/user/${currentUser.userId}`, action))
        yield call(del, `address/user/${addressId}`)
        const { data } = yield call(get, `address/user/${currentUser.userId}`)
        
        yield put(apiSuccess({
            addresses: [ ...data ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_cart(action) { 
    yield put(apiRequest('GET: cart', action))
    try {
        const { data } = yield call(get, `cart`)
        
        yield put(apiSuccess({
            cart: [ ...data.items ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * add_to_cart(action) {
    yield put(apiRequest('PUT: cart/add', action))
    const {itemId} = action
    try {
        yield call(putReq, `cart/add`, { itemId })
        const { data } = yield call(get, `cart`)
        
        yield put(apiSuccess({
            cart: [ ...data.items ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
 }
function * remove_from_cart(action) {
    yield put(apiRequest('put: cart/remove', action))
    const {itemId} = action
    try {
        yield call(putReq, `cart/remove`, { itemId })
        yield put(apiSuccess())
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * checkout(action) {
    yield put(apiRequest('POST: cart/checkout', action))
    const {addressId} = action
    try {
        const { data: order } = yield call(post, `cart/checkout`, { addressId })
        
        yield put(apiSuccess({
            order
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_reviews(action) {
    const {itemId} = action
    yield put(apiRequest(`GET: item/${itemId}/reviews`, action))
    try {
        const { data: reviews } = yield call(get, `item/${itemId}/reviews`)
        
        yield put(apiSuccess({
            currentReviews: [...reviews]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * post_review(action) {
    const {itemId, title, text, rating} = action
    yield put(apiRequest(`POST: item/${itemId}/reviews`, action))
    try {
        yield call(post, `item/${itemId}/review`, { title, text, rating })
        const { data: reviews } = yield call(get, `item/${itemId}/reviews`)
        
        yield put(apiSuccess({
            currentReviews: [...reviews]
        }))
        yield put(getAllItems())
    } catch(error) {
        console.error(error)
        yield put(apiFailure(error.response.data.message))
    }
}
function * edit_review(action) {
    const {itemId, title, text, rating} = action
    yield put(apiRequest(`GET: item/${itemId}/reviews`, action))
    try {
        yield call(putReq, `item/${itemId}/review`, { title, text, rating })
        const { data: reviews } = yield call(get, `item/${itemId}/reviews`)
        
        yield put(apiSuccess({
            currentReviews: [...reviews]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * remove_review(action) {
    const {itemId} = action
    yield put(apiRequest(`GET: item/${itemId}/reviews`, action))
    try {
        yield call(del, `item/${itemId}/review`)
        const { data: reviews } = yield call(get, `item/${itemId}/reviews`)
        
        yield put(apiSuccess({
            currentReviews: [...reviews]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * update_rating(action) {
    yield put(apiRequest('GET: ', action))
    const {itemId, rating} = action
    try {
        yield put(apiSuccess({ }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * add_payment_option(action) {
    yield put(apiRequest('GET: ', action))
    const {nameOnCard, cardNumber, expiryDate} = action
    try {
        const paymentMethods = yield select(makeSelectPaymentMethods)
        const { data } = yield call(post, `payment`, {nameOnCard, cardNumber, expiryDate})
        
        yield put(apiSuccess({
            paymentMethods: [
                ...paymentMethods,
                data
            ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_payment_option(action) {
    const {paymentId} = action
    yield put(apiRequest(`GET: payment/${paymentId}`, action))
    try {
        const paymentMethods = yield select(makeSelectPaymentMethods)
        const { data } = yield call(get, `payment/${paymentId}`)
        
        yield put(apiSuccess({
            paymentMethods: [ ...paymentMethods, data ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_payment_options(action) {
    yield put(apiRequest('GET: payment', action))
    try {
        const { data } = yield call(get, `payment`)
        
            yield put(apiSuccess({
            paymentMethods: [ ...data ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * edit_payment_option(action) {
    const {paymentId, nameOnCard, cardNumber, expiryDate} = action
    yield put(apiRequest(`PUT: payment/${paymentId}`, action))
    try {
        yield call(putReq, `payment/${paymentId}`, {nameOnCard, cardNumber, expiryDate})
        const { data } = yield call(get, `payment`)
        
        yield put(apiSuccess({
            paymentMethods: [ ...data ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * delete_payment_option(action) {
    const {paymentId} = action
    yield put(apiRequest(`DELETE: payment/${paymentId}`, action))
    try {
        yield call(del, `payment/${paymentId}`)
        const { data } = yield call(get, `payment`)
        
        yield put(apiSuccess({
            paymentMethods: [ ...data ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_all_vendors(action) {
    yield put(apiRequest('GET: vendor', action))
    try {
        const { data: vendors } = yield call(get, `vendor`)
        
        yield put(apiSuccess({
            vendors
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_vendor(action) {
    const { vendorId } = action
    yield put(apiRequest(`GET: vendor/id/${vendorId}`, action))
    try {
        const vendors = yield select(makeSelectVendors)
        const { data: vendor } = yield call(get, `vendor/id/${vendorId}`)
        
        yield put(apiSuccess({
            vendors: [
                ...vendors,
                vendor
            ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    } 
}
function * get_vendor_by_name(action) {
    const { name } = action
    yield put(apiRequest(`GET: vendor/name/${name}`, action))
    try {
        const vendors = yield select(makeSelectVendors)
        const { data: vendor } = yield call(get, `vendor/name/${name}`)
        
        yield put(apiSuccess({
            vendors: [
                ...vendors,
                vendor
            ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_store(action) {
    const { vendorId } = action
    yield put(apiRequest(`GET: vendor/${vendorId}/store`, action))
    try {
        const { data } = yield call(get, `vendor/${vendorId}/store`)
        
        yield put(apiSuccess({
            currentStore: [ ...data.items ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * create_vendor(action) {
    yield put(apiRequest('POST: vendor', action))
    const { name } = action
    try {
        const vendors = yield select(makeSelectVendors)
        const { data } = yield call(post, `vendor`, { name })
        
        yield put(apiSuccess({
            vendors: [
                ...vendors,
                data.vendor
            ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * update_vendor(action) {
    yield put(apiRequest('PUT: vendor', action))
    const { vendorId, name } = action
    try {
        const vendors = yield select(makeSelectVendors)
        const { data } = yield call(putReq, `vendor`, { name })
        
        yield put(apiSuccess({
            vendors: [
                ...vendors,
                data
            ]
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_all_items(action) {
    yield put(apiRequest('GET: item', action))
    try {
        const { data: items } = yield call(get, `item`)
        
        yield put(apiSuccess({
            items: items.reduce((obj, item) => {
                obj[item.itemId] = item
                return obj
            }, {})
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_item(action) {
    const {itemId} = action
    yield put(apiRequest(`GET: item/${itemId}`, action))
    try {
        const { data: item } = yield call(get, `item/${itemId}`)
        const items = yield select(makeSelectItems)
        yield put(apiSuccess({
            items: {
                ...items,
                [item.itemId]: item
            }
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * get_item_by_name(action) {
    const {name} = action
    yield put(apiRequest(`GET: item/name/${name}`, action))
    try {
        const { data: item } = yield call(get, `item/name/${name}`)
        
        yield put(apiSuccess({
            currentItem: item
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * create_item(action) {
    yield put(apiRequest('POST: item', action))
    const {name, price, description, category, vendorId} = action
    try {
        yield call(post, `item`, {name, price, description, category})
        const { data: items } = yield call(get, `item`)
        
        yield put(apiSuccess({
            items
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * update_item(action) {
    const {itemId, name, price, description, category} = action
    yield put(apiRequest(`PUT item/${itemId}`, action))
    try {
        yield call(putReq, `item/${itemId}`, {name, price, description, category})
        const { data: items } = yield call(get, `item`)
        
        yield put(apiSuccess({
            items
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * delete_item(action) {
    const {itemId} = action
    yield put(apiRequest(`DELETE: item/${itemId}`, action))
    try {
        yield call(del, `item/${itemId}`)
        const { data: items } = yield call(get, `item`)
        
        yield put(apiSuccess({
            items
        }))
    } catch(error) {
        yield put(apiFailure(error.response.data.message))
    }
}
function * fetch_user(action) {
    const {userId} = action
    yield put(apiRequest(`GET: user/${userId}`, action))
    try {
        const users = yield select(makeSelectUsers())
        const res = yield call(get, `user/${userId}`)
        const { data } = res
        yield put(apiSuccess({
            users: {
                ...users,
                [userId]: data
            }
        }))
    } catch (error) {
        yield put(apiFailure(error.response.data.message))
    }
}

function * clear_error() {
    yield put(clearError())
}

export default function * rootSaga() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(REGISTER, register),
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
        takeLatest(FETCH_USER, fetch_user),
        takeLatest('@@router/LOCATION_CHANGE', clear_error)
    ])
}