import { Types } from "../actions"
import { createReducer } from "reduxsauce"
import auth from '../utils/auth'
import { initialState } from "../constants"

const {
    API_SUCCESS,
    API_FAILURE,
    API_REQUEST,
    CLEAR_ERROR,
    LOGOUT,
    SET_CATEGORY,
    SET_CURRENT_ITEM,
    SEARCH,
    LOAD_LOCAL_USER
} = Types

/* Reducers */
export const setCategory = (state = initialState, {category: currentCategory}) => ({
    ...state,
    currentCategory
})

export const setCurrentItem = (state = initialState, {itemId: currentItem}) => ({
    ...state,
    currentItem
})

export const search = (state = initialState, {searchString}) => ({
    ...state,
    searchString
})

export const apiRequest = (state = initialState, {request, requestPayload = {}}) => ({
    ...state,
    request,
    requestPayload,
    loading: true
})

export const apiSuccess = (state = initialState, {payload = {}}) => ({
    ...state,
    loading: false,
    ...payload
})

export const apiFailure = (state = initialState, {error = null}) => ({
    ...state,
    loading: false,
    error
})

export const loadLocalUser = (state = initialState) => {
    const token = auth.getToken()
    const currentUser = auth.getUserInfo()
    return {
        ...state,
        token,
        currentUser,
        loggedIn: token != null
    }
}

export const logout = (state = initialState) => {
    auth.clearAppStorage()
    auth.clearToken()
    auth.clearUserInfo()
    return {
        ...state,
        currentUser: {},
        loggedIn: false,
        password: null,
        token: null
    }
}

export const clearError = (state = initialState) => ({
    ...state,
    error: null,
    currentReviews: [],
})

/* Connect Reducers to Types */
export default createReducer(initialState, {
    [SET_CATEGORY]: setCategory,
    [SET_CURRENT_ITEM]: setCurrentItem,
    [SEARCH]: search,
    [LOAD_LOCAL_USER]: loadLocalUser,
    [API_SUCCESS]: apiSuccess,
    [API_FAILURE]: apiFailure,
    [API_REQUEST]: apiRequest,
    [CLEAR_ERROR]: clearError,
    [LOGOUT]: logout
})